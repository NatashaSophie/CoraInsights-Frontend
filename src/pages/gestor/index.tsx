import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '@/assets/Logo';
import { useManagerAuth } from '@/hooks/authByRole';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const GestorDashboard = () => {
  const { canShowContent } = useManagerAuth();
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      sessionStorage.clear();
      router.push('/login');
    }
  };

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
          title="Gestor | Caminho de Cora"
          description="Área do Gestor - Caminho de Cora Coralina"
        />
      }
    >
      <div className="flex h-full flex-col items-center p-6 overflow-y-auto" id="scroll-container">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="flex flex-col items-center mb-8 relative">
            <button
              onClick={handleLogout}
              className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              🚪 Sair
            </button>
            <Logo />
            <h1 className="text-2xl font-bold text-white mt-4">
              Área do Gestor
            </h1>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-white text-xl font-bold mb-4">
              Gestão Administrativa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/gestor/relatorios">
                <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    📊 Relatórios Gerenciais
                  </h3>
                  <p className="text-white/70 text-sm">
                    Acesse relatórios detalhados e análises de dados
                  </p>
                </a>
              </Link>

              <Link href="/gestor/peregrinos">
                <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    👥 Gestão de Peregrinos
                  </h3>
                  <p className="text-white/70 text-sm">
                    Visualize dados e estatísticas dos peregrinos
                  </p>
                </a>
              </Link>

              <Link href="/gestor/trilhas">
                <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    🗺️ Gestão de Trilhas
                  </h3>
                  <p className="text-white/70 text-sm">
                    Gerencie trilhas, rotas e pontos de interesse
                  </p>
                </a>
              </Link>

              <Link href="/gestor/estabelecimentos">
                <a className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-white/20 transition-all">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    🏪 Estabelecimentos
                  </h3>
                  <p className="text-white/70 text-sm">
                    Visualize e aprove estabelecimentos cadastrados
                  </p>
                </a>
              </Link>

              <Link href="/gestor/comerciantes-pendentes">
                <a className="bg-yellow-500/20 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-yellow-500/30 transition-all border border-yellow-500/50">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    ⏳ Aprovar Comerciantes
                  </h3>
                  <p className="text-white/70 text-sm">
                    Gerencie solicitações de cadastro como comerciante
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

          {/* Statistics Overview */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg mb-6">
            <h2 className="text-white text-xl font-bold mb-4">
              Visão Geral
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">---</div>
                <div className="text-white/70 text-sm">Peregrinos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">---</div>
                <div className="text-white/70 text-sm">Trilhas Concluídas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">---</div>
                <div className="text-white/70 text-sm">Estabelecimentos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">--- km</div>
                <div className="text-white/70 text-sm">Distância Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default GestorDashboard;
