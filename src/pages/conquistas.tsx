import React from 'react';

import { useSelector } from 'react-redux';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Trail from '@/containers/Achievements/components/Trail';
import { trailsSelector } from '@/store/trails/selectors';

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
