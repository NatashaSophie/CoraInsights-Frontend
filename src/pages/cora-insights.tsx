import React from 'react';

import Link from 'next/link';

import Logo from '@/assets/Logo';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const CoraInsights = () => {
  return (
    <Main
      meta={
        <Meta
          title="CoraInsights | Portal de Análise do Caminho de Cora"
          description="Portal público com análises e estatísticas do Caminho de Cora Coralina"
        />
      }
    >
      <div className="flex h-full flex-col items-center p-6 overflow-y-auto" id="scroll-container">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <Logo />
            <h1 className="text-3xl font-bold text-white mt-4 text-center">
              CoraInsights
            </h1>
            <p className="text-white/80 text-center mt-2 max-w-2xl">
              Portal de análise e visualização de dados do Caminho de Cora Coralina
            </p>
          </div>

          {/* Login Button */}
          <div className="flex justify-end mb-6">
            <Link href="/login">
              <a className="btn btn-primary px-6 py-2">
                Fazer Login
              </a>
            </Link>
          </div>

          {/* Dashboard Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Card 1 - Total de Peregrinos */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <h3 className="text-white text-lg font-semibold mb-2">
                Total de Peregrinos
              </h3>
              <div className="text-4xl font-bold text-white mb-2">
                ---
              </div>
              <p className="text-white/70 text-sm">
                Usuários cadastrados no sistema
              </p>
            </div>

            {/* Card 2 - Quilômetros Percorridos */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <h3 className="text-white text-lg font-semibold mb-2">
                Quilômetros Percorridos
              </h3>
              <div className="text-4xl font-bold text-white mb-2">
                --- km
              </div>
              <p className="text-white/70 text-sm">
                Distância total registrada
              </p>
            </div>

            {/* Card 3 - Trilhas Ativas */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <h3 className="text-white text-lg font-semibold mb-2">
                Trilhas Ativas
              </h3>
              <div className="text-4xl font-bold text-white mb-2">
                ---
              </div>
              <p className="text-white/70 text-sm">
                Rotas disponíveis para percorrer
              </p>
            </div>
          </div>

          {/* Rankings Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg mb-8">
            <h2 className="text-white text-2xl font-bold mb-4">
              Rankings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Peregrinos */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  Top 5 Peregrinos
                </h3>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((position) => (
                    <div
                      key={position}
                      className="flex items-center justify-between bg-white/5 rounded p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold w-6">
                          {position}°
                        </span>
                        <span className="text-white/80">---</span>
                      </div>
                      <span className="text-white font-semibold">--- km</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trilhas Mais Percorridas */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  Trilhas Mais Percorridas
                </h3>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((position) => (
                    <div
                      key={position}
                      className="flex items-center justify-between bg-white/5 rounded p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold w-6">
                          {position}°
                        </span>
                        <span className="text-white/80">---</span>
                      </div>
                      <span className="text-white font-semibold">--- vezes</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Charts Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <h3 className="text-white text-lg font-semibold mb-4">
                Peregrinos por Mês
              </h3>
              <div className="flex items-center justify-center h-64 text-white/50">
                [Gráfico será implementado]
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <h3 className="text-white text-lg font-semibold mb-4">
                Distribuição por Região
              </h3>
              <div className="flex items-center justify-center h-64 text-white/50">
                [Gráfico será implementado]
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-white/60 text-sm py-4">
            <p>© 2026 Caminho de Cora Coralina - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default CoraInsights;
