// En app/page.tsx
"use client";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
<div className="flex flex-col items-center justify-start min-h-screen pt-4 sm:pt-6 md:pt-8 space-y-4 sm:space-y-6 px-4">
  {/* 1. Mensaje de Bienvenido */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
    Bienvenido
  </h1>

{/* 2. Fila de Botones */}
<div className="flex flex-col sm:flex-row w-full max-w-4xl justify-center gap-3 sm:gap-4 md:gap-6 mx-auto">
  <button className="btn w-full sm:btn-wide bg-white text-gray-800 text-base sm:text-lg rounded-lg shadow-md hover:shadow-lg transition-shadow">
    Gift Card
  </button>
  <button className="btn w-full sm:btn-wide bg-gray-800 text-white text-base sm:text-lg rounded-lg shadow-md hover:shadow-lg transition-shadow">
    Certificados
  </button>
  <button className="btn w-full sm:btn-wide bg-white text-gray-800 text-base sm:text-lg rounded-lg shadow-md hover:shadow-lg transition-shadow">
    Ítems
  </button>
</div>



  {/* Espacio antes de la tarjeta */}
  <div className="h-20 sm:h-32 md:h-40"></div> {/* Espacio responsive */}

{/* 3. Tarjeta de Saldo */}
<div className="card w-full max-w-[380px] sm:w-[380px] bg-white shadow-xl rounded-2xl">
  <div className="card-body items-center text-center p-4 sm:p-6">
    <h2 className="card-title text-2xl sm:text-3xl font-semibold text-gray-800">
      Juan Perez
    </h2>
    <p className="text-base sm:text-lg text-gray-500 mt-2">Saldo actual en Tokens:</p>
    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mt-3 sm:mt-4">
      1000 <span className="text-orange-500">MMY</span>
    </div>
  </div>
</div>

</div>
  );
};

export default Home;