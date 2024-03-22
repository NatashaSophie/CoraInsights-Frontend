import React from 'react';

import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Logo from '@/assets/Logo';

const Home = () => {
  return (
    <Main
      meta={
        <Meta
          title="Home | Caminho de Cora"
          description="Caminho de Cora Coralina"
        />
      }
    >
      <div className="flex h-full flex-col items-center p-6">
        <Logo />
        <div className="mt-auto flex flex-col gap-4 w-full">
          <Link href="/cadastro">
            <a className="btn btn-primary">Criar uma conta</a>
          </Link>
          <Link href="/login">
            <a className="btn btn-secondary">Acessar minha conta</a>
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default Home;
