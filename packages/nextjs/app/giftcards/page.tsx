"use client";

import type { NextPage } from "next";
import { GiftIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const GiftCardsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* Título */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            MamayaWallet
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Espacio para Gift Cards y Beneficios asignados
          </p>
        </div>

        {/* Resumen de Beneficios */}
        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-green-800 mb-1">
                Resumen de Beneficios
              </h2>
              <p className="text-sm text-green-700">3 beneficios activos</p>
            </div>
            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-bold text-green-700">$270</div>
              <p className="text-xs sm:text-sm text-green-600">Valor total disponible</p>
            </div>
          </div>
        </div>

        {/* Grid de Tarjetas de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Tarjeta 1: Gift Card Activo */}
          <div className="bg-white border-2 border-green-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-50 p-4 border-b border-green-200">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <GiftIcon className="w-6 h-6 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Gift Card</h3>
                    <p className="text-xs text-gray-600">Negocio A</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                  <CheckCircleIcon className="w-3 h-3" />
                  Active
                </span>
              </div>
            </div>

            <div className="p-4">
              {/* Imagen de Gift Card - Reemplaza '/img/giftcard-negocio-a.jpg' con tu imagen */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src="/img/giftcard.png"
                  alt="Gift Card Negocio A"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="text-center">
                <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-2 rounded-lg mb-2">
                  Disponible
                </span>
                <p className="text-xs text-gray-600">Vence: 13/02/2025</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-green-700">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Tokenizado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Descuento */}
          <div className="bg-white border-2 border-purple-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-50 p-4 border-b border-purple-200">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Descuento</h3>
                    <p className="text-xs text-gray-600">Negocio B</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                  <CheckCircleIcon className="w-3 h-3" />
                  Active
                </span>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-purple-700 mb-2">10%</div>
                <p className="text-sm text-purple-900 font-medium">
                  10% de descuento en productos seleccionados.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-600">Vence: 30/01/2025</p>
                <div className="flex items-center justify-center gap-1 text-purple-700">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Tokenizado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Gift Card Cobrado/Expirado */}
          <div className="bg-white border-2 border-red-300 rounded-xl overflow-hidden shadow-sm opacity-75">
            <div className="bg-red-50 p-4 border-b border-red-200">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <GiftIcon className="w-6 h-6 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Gift Card</h3>
                    <p className="text-xs text-gray-600">Negocio C</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-red-700 bg-red-100 px-2 py-1 rounded-full">
                  <XCircleIcon className="w-3 h-3" />
                  Expirado
                </span>
              </div>
            </div>

            <div className="p-4">
              {/* Imagen de Gift Card - Reemplaza '/img/giftcard-negocio-c.jpg' con tu imagen */}
              <div className="mb-4 rounded-lg overflow-hidden opacity-60">
                <img
                  src="/img/giftcard.png"
                  alt="Gift Card Negocio C"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="text-center">
                <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-4 py-2 rounded-lg mb-2">
                  Cobrado
                </span>
                <p className="text-xs text-gray-600">Vence: 30/11/2024</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-green-700">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Tokenizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardsPage;
