import React from 'react';

import Link from 'next/link';

import Logo from '@/assets/Logo';
import RecoveryPasswordForm from '@/containers/forms/RecoveryPasswordForm';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const RecoveryPassword = () => {
  return (
    <Main meta={<Meta title="Recuperar Senha | Caminho de Cora" />}>
      <div className="p-8 flex flex-col items-center w-full h-full">
        <div>
          <Logo className="w-80 text-white fill-current" />
        </div>
        <RecoveryPasswordForm />
        <div className="w-full mt-auto flex flex-col items-center">
          <Link href="/login">
            <a>Lembrou sua senha?</a>
          </Link>
          <div className="my-4 w-full relative flex items-center justify-center">
            <hr className="w-full absolute left-0" />
            <p className="bg-yellow-700 z-10 px-4">Ou</p>
          </div>
          <Link href="/cadastro">
            <a>Cadastrar-se</a>
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default RecoveryPassword;
