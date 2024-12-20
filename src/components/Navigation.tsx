import React from 'react';

export const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/logo512x512.webp"
              alt="Charts de Aeropuertos de Chile"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Procedimientos Aéreos en Chile
              </h1>
              <p className="text-sm text-gray-600">
                Información detallada de los <span className="font-bold">procedimientos aéreos actualizados</span> en Chile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};