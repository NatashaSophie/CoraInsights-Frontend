import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import EditProfileForm from '@/containers/forms/EditProfileForm';

const Perfil = () => {
  return (
    <Main
      meta={
        <Meta
          title="Editar Perfil | Caminho de Cora"
          description="Caminho de Cora Coralina"
        />
      }
    >
      <EditProfileForm />
    </Main>
  );
};

Perfil.layout = 'authenticated';

export default Perfil;
