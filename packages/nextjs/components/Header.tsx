// components/Header.tsx
"use client";

export const Header = () => {
  return (
    <div className="sticky lg:static top-0 navbar bg-transparent min-h-0 flex-shrink-0 justify-between z-20 shadow-none px-2 sm:px-3">
      {/* IZQUIERDA: Logo solo en mobile/tablet (en desktop no se muestra) */}
      <div className="navbar-start">
        <img
          src="/img/logo_sin_fondo.png"
          alt="MamayaTech"
          className="h-6 sm:h-8 w-auto lg:hidden ml-1"
        />
      </div>

      {/* DERECHA: Botón Mi Perfil (siempre visible) */}
      <div className="navbar-end mr-2 sm:mr-4 mt-3 sm:mt-4">
        <button className="btn bg-white text-black border-none rounded-lg shadow-md hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A1.5 1.5 0 0 1 18 21.75H6a1.5 1.5 0 0 1-1.499-1.632Z"
            />
          </svg>
          Mi Perfil
        </button>
      </div>
    </div>
  );
};
