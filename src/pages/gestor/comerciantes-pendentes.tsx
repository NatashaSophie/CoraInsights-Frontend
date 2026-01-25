import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/assets/Logo';
import { useManagerAuth } from '@/hooks/authByRole';
import { useAppSelector } from '@/hooks/state';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

interface PendingMerchant {
  id: number;
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  businessAddress: string;
  businessPhone: string;
  created_at: string;
}

const ComerciantesPendentesPage = () => {
  const { canShowContent } = useManagerAuth();
  const user = useAppSelector((state) => state.user);
  const [merchants, setMerchants] = useState<PendingMerchant[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<number | null>(null);

  useEffect(() => {
    if (canShowContent) {
      fetchPendingMerchants();
    }
  }, [canShowContent]);

  const fetchPendingMerchants = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:1337/users?userType=merchant&merchantApproved=false',
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      const data = await response.json();
      setMerchants(data);
    } catch (error) {
      console.error('Erro ao buscar comerciantes pendentes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (merchantId: number) => {
    if (!confirm('Deseja aprovar este comerciante?')) return;

    setProcessingId(merchantId);
    try {
      const response = await fetch(`http://127.0.0.1:1337/users/${merchantId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.jwt}`,
        },
        body: JSON.stringify({
          merchantApproved: true,
          merchantApprovedBy: user.id,
          merchantApprovedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert('Comerciante aprovado com sucesso!');
        fetchPendingMerchants();
      } else {
        alert('Erro ao aprovar comerciante');
      }
    } catch (error) {
      console.error('Erro ao aprovar comerciante:', error);
      alert('Erro ao aprovar comerciante');
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (merchantId: number) => {
    const reason = prompt('Motivo da rejeição:');
    if (!reason) return;

    setProcessingId(merchantId);
    try {
      const response = await fetch(`http://127.0.0.1:1337/users/${merchantId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.jwt}`,
        },
        body: JSON.stringify({
          merchantApproved: false,
          merchantRejectedReason: reason,
          userType: 'pilgrim', // Volta para peregrino
        }),
      });

      if (response.ok) {
        alert('Comerciante rejeitado. Ele foi convertido para peregrino.');
        fetchPendingMerchants();
      } else {
        alert('Erro ao rejeitar comerciante');
      }
    } catch (error) {
      console.error('Erro ao rejeitar comerciante:', error);
      alert('Erro ao rejeitar comerciante');
    } finally {
      setProcessingId(null);
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
          title="Comerciantes Pendentes | Gestor"
          description="Aprovação de comerciantes - Caminho de Cora"
        />
      }
    >
      <div className="flex h-full flex-col items-center p-6 overflow-y-auto" id="scroll-container">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <Logo />
            <h1 className="text-2xl font-bold text-white mt-4">
              Comerciantes Pendentes de Aprovação
            </h1>
            <Link href="/gestor">
              <a className="text-white/70 hover:text-white mt-2">
                ← Voltar ao Dashboard
              </a>
            </Link>
          </div>

          {/* Content */}
          {loading ? (
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
              <p className="text-white">Carregando...</p>
            </div>
          ) : merchants.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
              <p className="text-white text-lg">
                ✅ Não há comerciantes pendentes de aprovação
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {merchants.map((merchant) => (
                <div
                  key={merchant.id}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {merchant.name}
                      </h3>
                      <p className="text-gray-600">{merchant.email}</p>
                      <p className="text-gray-500 text-sm">
                        Cadastrado em:{' '}
                        {new Date(merchant.created_at).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Pendente
                    </span>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Dados do Negócio:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-600 font-medium">
                          Nome do Negócio:
                        </span>
                        <p className="text-gray-800">
                          {merchant.businessName || 'Não informado'}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600 font-medium">Tipo:</span>
                        <p className="text-gray-800">
                          {merchant.businessType || 'Não informado'}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600 font-medium">
                          Endereço:
                        </span>
                        <p className="text-gray-800">
                          {merchant.businessAddress || 'Não informado'}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600 font-medium">
                          Telefone:
                        </span>
                        <p className="text-gray-800">
                          {merchant.businessPhone || 'Não informado'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApprove(merchant.id)}
                      disabled={processingId === merchant.id}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                    >
                      {processingId === merchant.id ? 'Processando...' : '✓ Aprovar'}
                    </button>
                    <button
                      onClick={() => handleReject(merchant.id)}
                      disabled={processingId === merchant.id}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                    >
                      {processingId === merchant.id ? 'Processando...' : '✗ Rejeitar'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Main>
  );
};

export default ComerciantesPendentesPage;
