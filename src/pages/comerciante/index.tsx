import React from 'react';

import Link from 'next/link';

import Logo from '@/assets/Logo';
import { useMerchantAuth } from '@/hooks/authByRole';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const ComercianteDashboard = () => {
  const { canShowContent } = useMerchantAuth();

  if (!canShowContent) {
    return (
      <div className="flex h-screen items-center justify-center bg-primary-500">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <Main
      meta={
        <Meta
          title="Comerciante | Caminho de Cora"
          description="Área do Comerciante - Caminho de Cora Coralina"
        />
      }
    >
      <div className="flex h-full flex-col items-center p-6 overflow-y-auto" id="scroll-container">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <Logo />
            <h1 className="text-2xl font-bold text-white mt-4">
              Área do Comerciante
            </h1>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-white text-xl font-bold mb-4">
              Gestão de Negócios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/comerciante/meus-empreendimentos">
                <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    🏪 Meus Empreendimentos
                  </h3>
                  <p className="text-white/70 text-sm">
                    Gerencie seus estabelecimentos cadastrados
                  </p>
                </a>
              </Link>

              <Link href="/comerciante/novo-empreendimento">
                <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    ➕ Cadastrar Empreendimento
                  </h3>
                  <p className="text-white/70 text-sm">
                    Adicione um novo estabelecimento
                  </p>
                </a>
              </Link>

              <Link href="/comerciante/estatisticas">
                <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    📊 Estatísticas
                  </h3>
                  <p className="text-white/70 text-sm">
                    Veja análises e dados dos seus empreendimentos
                  </p>
                </a>
              </Link>

              <Link href="/comerciante/perfil-publico">
                <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    🌐 Perfil Público
                  </h3>
                  <p className="text-white/70 text-sm">
                    Visualize como os peregrinos veem seus estabelecimentos
                  </p>
                </a>
              </Link>

              <Link href="/cora-insights">
                <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    📈 Ver CoraInsights
                  </h3>
                  <p className="text-white/70 text-sm">
                    Acesse os dashboards públicos
                  </p>
                </a>
              </Link>
            </div>
          </div>

          {/* Funcionalidades de Peregrino */}
          <div className="mb-8">
            <h2 className="text-white text-xl font-bold mb-4">
              Área de Peregrino
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/trilhas">
                <a className="bg-blue-500/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-blue-500/20 transition-all border border-blue-500/30">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Minhas Trilhas
                  </h3>
                  <p className="text-white/70 text-sm">
                    Acesse suas trilhas percorridas
                  </p>
                </a>
              </Link>

              <Link href="/conquistas">
                <a className="bg-blue-500/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-blue-500/20 transition-all border border-blue-500/30">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Conquistas
                  </h3>
                  <p className="text-white/70 text-sm">
                    Veja suas conquistas e certificados
                  </p>
                </a>
              </Link>

              <Link href="/perfil">
                <a className="bg-blue-500/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-blue-500/20 transition-all border border-blue-500/30">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Meu Perfil
                  </h3>
                  <p className="text-white/70 text-sm">
                    Edite suas informações pessoais
                  </p>
                </a>
              </Link>
            </div>
          </div>

          {/* Business Statistics */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg mb-6">
            <h2 className="text-white text-xl font-bold mb-4">
              Resumo dos Empreendimentos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">---</div>
                <div className="text-white/70 text-sm">Empreendimentos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">---</div>
                <div className="text-white/70 text-sm">Visualizações (mês)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">---</div>
                <div className="text-white/70 text-sm">Avaliações</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-white text-xl font-bold mb-4">
              Atividades Recentes
            </h2>
            <div className="text-white/70 text-center py-8">
              Nenhuma atividade recente
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ComercianteDashboard;
