// En app/page.tsx

"use client";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
<div className="flex flex-col items-center justify-start min-h-screen pt-8 space-y-6">
  {/* 1. Mensaje de Bienvenido */}
  <h1 className="text-6xl font-bold text-white">Bienvenido</h1>

{/* 2. Fila de Botones */}
<div className="flex w-full max-w-4xl justify-center gap-6 mx-auto">
  <button className="btn btn-wide bg-white text-gray-800 text-lg rounded-lg shadow-md">
    Gift Card
  </button>
  <button className="btn btn-wide bg-gray-800 text-white text-lg rounded-lg shadow-md">
    Certificados
  </button>
  <button className="btn btn-wide bg-white text-gray-800 text-lg rounded-lg shadow-md">
    Ítems
  </button>
</div>



  {/* Espacio antes de la tarjeta */}
  <div className="h-40"></div> {/* Ajusta esta altura para mover la tarjeta más abajo */}

{/* 3. Tarjeta de Saldo */}
<div className="card w-[380px] bg-white shadow-xl rounded-2xl">
  <div className="card-body items-center text-center p-6">
    <h2 className="card-title text-3xl font-semibold text-gray-800">
      Juan Perez
    </h2>
    <p className="text-lg text-gray-500 mt-2">Saldo actual en Tokens:</p>
    <div className="text-6xl font-bold text-gray-800 mt-4">
      1000 <span className="text-orange-500">MMY</span>
    </div>
  </div>
</div>

</div>
  );
};

export default Home;