import React from 'react';

import Link from 'next/link';

import Logo from '@/assets/Logo';
import { usePilgrimAuth } from '@/hooks/authByRole';
import { useAppSelector } from '@/hooks/state';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const PeregrinoDashboard = () => {
  const { canShowContent } = usePilgrimAuth();
  const user = useAppSelector((state) => state.user.user);

  if (!canShowContent) {
    return (
      <div className="flex h-screen items-center justify-center bg-primary-500">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  const isMerchantPending = user.userType === 'merchant' && !user.merchantApproved;

  return (
    <Main
      meta={
        <Meta
          title="Peregrino | Caminho de Cora"
          description="Área do Peregrino - Caminho de Cora Coralina"
        />
      }
    >
      <div className="flex h-full flex-col items-center p-6 overflow-y-auto" id="scroll-container">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <Logo />
            <h1 className="text-2xl font-bold text-white mt-4">
              Área do Peregrino
            </h1>
          </div>

          {/* Aviso para comerciantes não aprovados */}
          {isMerchantPending && (
            <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-lg p-6 mb-8 shadow-lg">
              <h3 className="text-white text-lg font-semibold mb-2 flex items-center gap-2">
                ⏳ Cadastro de Comerciante Pendente
              </h3>
              <p className="text-white/90 mb-4">
                Seu cadastro como comerciante está aguardando aprovação de um gestor. 
                Enquanto isso, você pode usar todas as funcionalidades de peregrino.
              </p>
              <p className="text-white/70 text-sm">
                Você receberá uma notificação assim que seu cadastro for aprovado.
              </p>
            </div>
          )}

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href="/trilhas">
              <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                <h3 className="text-white text-lg font-semibold mb-2">
                  Minhas Trilhas
                </h3>
                <p className="text-white/70 text-sm">
                  Acesse e gerencie suas trilhas percorridas
                </p>
              </a>
            </Link>

            <Link href="/perfil">
              <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                <h3 className="text-white text-lg font-semibold mb-2">
                  Meu Perfil
                </h3>
                <p className="text-white/70 text-sm">
                  Edite suas informações pessoais
                </p>
              </a>
            </Link>

            <Link href="/conquistas">
              <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                <h3 className="text-white text-lg font-semibold mb-2">
                  Conquistas
                </h3>
                <p className="text-white/70 text-sm">
                  Veja suas conquistas e certificados
                </p>
              </a>
            </Link>

            <Link href="/cora-insights">
              <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                <h3 className="text-white text-lg font-semibold mb-2">
                  Ver Estatísticas Públicas
                </h3>
                <p className="text-white/70 text-sm">
                  Acesse os dashboards públicos do CoraInsights
                </p>
              </a>
            </Link>
          </div>

          {/* Statistics */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg mb-6">
            <h2 className="text-white text-xl font-bold mb-4">
              Suas Estatísticas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">---</div>
                <div className="text-white/70 text-sm">Trilhas Percorridas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">--- km</div>
                <div className="text-white/70 text-sm">Distância Total</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">---</div>
                <div className="text-white/70 text-sm">Conquistas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default PeregrinoDashboard;
