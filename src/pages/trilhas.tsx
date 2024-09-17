import React from 'react';

import TrailsContainer from '@/containers/Trails';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

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
