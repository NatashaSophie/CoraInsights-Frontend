import React from 'react';

import { useSelector } from 'react-redux';

import Trail from '@/containers/Achievements/components/Trail';
import { trailsSelector } from '@/store/trails/selectors';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Conquistas = () => {
  const trails = useSelector(trailsSelector);
  return (
    <Main
      meta={
        <Meta
          title="Conquistas | Caminho de Cora"
          description="Caminho de Cora Coralina"
        />
      }
    >
      <div className="p-6">
        {trails.map((trail) => (
          <Trail key={trail.id} {...trail} />
        ))}
      </div>
    </Main>
  );
};

Conquistas.layout = 'authenticated';

export default Conquistas;
