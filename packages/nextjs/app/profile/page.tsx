"use client";

import type { NextPage } from "next";
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  BriefcaseIcon,
  CalendarIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

const ProfilePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Contenido Principal */}
      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">
            Mi Perfil
          </h1>
          <p className="text-sm sm:text-base text-blue-600">
            Información personal y profesional
          </p>
        </div>

        {/* Tarjeta Principal del Usuario */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl flex-shrink-0">
                JP
              </div>
              
              {/* Info del Usuario */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Juan Pérez
                </h2>
                <p className="text-base sm:text-lg text-gray-700 font-medium">
                  Analista de Recursos Humanos
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Tecnología • Empleado desde marzo 2023
                </p>
              </div>
            </div>

            {/* Botón Editar */}
            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-lg shadow-md px-6 w-full sm:w-auto">
              Editar Perfil
            </button>
          </div>
        </div>

        {/* Grid de Estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Certificados */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">3</div>
            <div className="text-xs sm:text-sm text-gray-600">Certificados</div>
          </div>

          {/* Ítems Asignados */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">5</div>
            <div className="text-xs sm:text-sm text-gray-600">Ítems Asignados</div>
          </div>

          {/* Beneficios */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">125</div>
            <div className="text-xs sm:text-sm text-gray-600">Beneficios ($)</div>
          </div>

          Habilidades
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">5</div>
            <div className="text-xs sm:text-sm text-gray-600">Habilidades</div>
          </div>
        </div>

        {/* Grid de Información */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Información Personal */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Información Personal
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 font-medium">Nombre</label>
                <p className="text-sm text-gray-800 font-medium">Juan Pérez</p>
              </div>
              
              <div>
                <label className="text-xs text-gray-500 font-medium">Email</label>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-blue-600">juan.perez@mamayatech.com</p>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium">Teléfono</label>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-800">+1 (555) 123-4567</p>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium">Dirección</label>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-800">Av. Principal 123, Ciudad, País</p>
                </div>
              </div>
            </div>
          </div>

          {/* Información Laboral */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <BriefcaseIcon className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Información Laboral
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 font-medium">Posición</label>
                <p className="text-sm text-gray-800 font-medium">Analista de Recursos Humanos</p>
              </div>
              
              <div>
                <label className="text-xs text-gray-500 font-medium">Departamento</label>
                <p className="text-sm text-gray-800">Tecnología</p>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium">Supervisor</label>
                <div className="flex items-center gap-2">
                  <UserGroupIcon className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-800">María González</p>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium">Fecha de Contratación</label>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-800">15/03/2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto de Emergencia */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Contacto de Emergencia
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium">Nombre</label>
                <p className="text-sm text-gray-800 font-medium">Ana Pérez</p>
              </div>
              
              <div>
                <label className="text-xs text-gray-500 font-medium">Teléfono</label>
                <p className="text-sm text-gray-800">+1 (555) 987-6543</p>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium">Relación</label>
                <p className="text-sm text-gray-800">Esposa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
