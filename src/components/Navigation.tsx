import React from 'react';

export const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Direcci%C3%B3n_General_de_Aeron%C3%A1utica_Civil_de_Chile.svg/1200px-Direcci%C3%B3n_General_de_Aeron%C3%A1utica_Civil_de_Chile.svg.png"
              alt="DGAC Logo"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Aeropuertos de Chile
              </h1>
              <p className="text-sm text-gray-600">
                Dirección General de Aeronáutica Civil
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};