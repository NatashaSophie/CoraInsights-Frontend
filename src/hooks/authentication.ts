import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useAppSelector } from './state';
import client from '@/graphql/client';
import { userTokenSelector } from '@/store/user/selectors';

export const useAuthentication = () => {
  const router = useRouter();
  const [canShowContent, setCanShowContent] = useState(false);
  const token = useAppSelector(userTokenSelector);

  useEffect(() => {
    client.setHeader('Authorization', token || '');
  }, [token]);

  useEffect(() => {
    if (!token) {
      router.push('/');
    } else {
      setCanShowContent(true);
    }
  }, [router, token]);

  return {
    canShowContent,
  };
};
