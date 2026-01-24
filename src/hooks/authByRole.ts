import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import client from '@/graphql/client';
import { userTokenSelector } from '@/store/user/selectors';
import { UserType } from '@/store/user/slice';

import { useAppSelector } from './state';

type AuthByRoleOptions = {
  allowedRoles: UserType[];
  redirectTo?: string;
  requireMerchantApproval?: boolean;
};

export const useAuthByRole = (options: AuthByRoleOptions) => {
  const router = useRouter();
  const [canShowContent, setCanShowContent] = useState(false);
  const token = useAppSelector(userTokenSelector);
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    client.setHeader('Authorization', token || '');
  }, [token]);

  useEffect(() => {
    if (!token) {
      router.push('/login');
      return;
    }

    const userType = user.userType || 'pilgrim';
    const userRole = user.role?.type;
    const merchantApproved = user.merchantApproved;

    // Admin sempre tem acesso total
    if (userRole === 'authenticated' && userType === 'admin') {
      setCanShowContent(true);
      return;
    }

    // Se é comerciante e precisa de aprovação, mas não foi aprovado
    if (
      userType === 'merchant' &&
      options.requireMerchantApproval &&
      !merchantApproved
    ) {
      router.push(options.redirectTo || '/peregrino');
      return;
    }

    // Verifica se o tipo de usuário está na lista de permitidos
    // Gestores e comerciantes aprovados também têm acesso de peregrino
    const hasAccess =
      options.allowedRoles.includes(userType) ||
      (options.allowedRoles.includes('pilgrim') &&
        (userType === 'manager' ||
          (userType === 'merchant' && merchantApproved)));

    if (!hasAccess) {
      router.push(options.redirectTo || '/');
      return;
    }

    setCanShowContent(true);
  }, [router, token, user, options]);

  return {
    canShowContent,
    userType: user.userType,
    isAdmin: user.role?.type === 'authenticated' && user.userType === 'admin',
    merchantApproved: user.merchantApproved,
  };
};

// Hook específico para peregrinos (todos têm acesso)
export const usePilgrimAuth = () => {
  return useAuthByRole({
    allowedRoles: ['pilgrim', 'manager', 'merchant'],
    redirectTo: '/login',
  });
};

// Hook específico para gestores
export const useManagerAuth = () => {
  return useAuthByRole({
    allowedRoles: ['manager'],
    redirectTo: '/peregrino',
  });
};

// Hook específico para comerciantes (requer aprovação)
export const useMerchantAuth = () => {
  return useAuthByRole({
    allowedRoles: ['merchant'],
    redirectTo: '/peregrino',
    requireMerchantApproval: true,
  });
};

// Hook para áreas que permitem múltiplos tipos
export const useRestrictedAuth = () => {
  return useAuthByRole({
    allowedRoles: ['manager', 'merchant'],
    redirectTo: '/peregrino',
  });
};
