import React, { useMemo } from 'react';

import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Icon from '@/components/Icon';
import Trail from '@/containers/Trail';
import { routesSelector } from '@/store/routes/selectors';

const Trilha = () => {
  const router = useRouter();
  const routes = useSelector(routesSelector);
  const { slug } = router.query;

  const route = useMemo(
    () => routes.find((r) => r.slug === slug),
    [slug, routes]
  );

  if (!route) {
    router.push('/trilhas');
  }

  return route ? (
    <div className="flex flex-col p-6">
      <button onClick={() => router.back()} type="button">
        <Icon name="chevronLeft" className="stroke-current" />
      </button>
      <Trail {...route} />
    </div>
  ) : null;
};

Trilha.layout = 'authenticated';

export default Trilha;
