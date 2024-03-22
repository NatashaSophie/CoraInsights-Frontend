import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import TrailsContainer from '@/containers/Trails';

const Trails = () => {
  return (
    <Main
      meta={
        <Meta
          title="Trilhas | Caminho de Cora"
          description="Caminho de Cora Coralina"
        />
      }
    >
      <TrailsContainer />
    </Main>
  );
};

Trails.layout = 'authenticated';

export default Trails;
