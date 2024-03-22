import React from 'react';

import Link from 'next/link';

import Logo from '@/assets/Logo';
import RegisterForm from '@/containers/forms/RegisterForm';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Login = () => {
  return (
    <Main meta={<Meta title="Cadastro | Caminho de Cora" />}>
      <div className="p-8 flex flex-col items-center w-full h-full overflow-auto">
        <div>
          <Logo className="w-80 h-full text-white fill-current" />
        </div>
        <RegisterForm />
        <div className="w-full mt-8 flex flex-col items-center">
          <Link href="/login">
            <a>Já tem uma conta?</a>
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default Login;
