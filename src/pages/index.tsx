import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário está logado
    if (localStorage.getItem("persist:root")) {
      const item = localStorage.getItem("persist:root") || '';
      const convItem = JSON.parse(item || '');
      const user = JSON.parse(convItem?.user || '');

      if (user?.token) {
        // Redireciona baseado no tipo de usuário
        const userType = user?.user?.userType || 'pilgrim';
        const roleType = user?.user?.role?.type;
        const merchantApproved = user?.user?.merchantApproved;

        if (roleType === 'authenticated' && userType === 'admin') {
          router.push('/admin');
        } else if (userType === 'manager') {
          router.push('/gestor');
        } else if (userType === 'merchant' && merchantApproved) {
          router.push('/comerciante');
        } else {
          router.push('/peregrino');
        }
      } else {
        // Não está logado, vai para a página pública
        router.push('/cora-insights');
      }
    } else {
      // Não está logado, vai para a página pública
      router.push('/cora-insights');
    }
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-primary-500">
      <div className="text-white text-xl">Carregando...</div>
    </div>
  );
};

export default Home;
