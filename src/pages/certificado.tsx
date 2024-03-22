import React from 'react';

import { useRouter } from 'next/router';

const Certificado = () => {
  const { query } = useRouter();

  return (
    <div className="w-full h-full bg-gray-100 p-2">
      <div className="flex justify-between p-6 flex-col items-center w-full h-full rounded-lg border border-black">
        <img
          alt="Caminho de Cora"
          src="/assets/images/caminho-de-cora-black.png"
          width={300}
        />

        <div className="text-2xl text-center">
          <p>A Associação Caminho de Cora Coralina certifica que:</p>
          <p className="my-2 font-bold font-serif">{query.name}</p>
          <p>
            concluiu o percurso de 300km do Caminho de Cora Coralina
            <br /> no período de <b>{query.startDate}</b> a{' '}
            <b>{query.finishDate}</b>.
          </p>
        </div>

        <div>
          <p>Código digital: {query.id}</p>
        </div>
      </div>
    </div>
  );
};

Certificado.layout = 'clean';

export default Certificado;
