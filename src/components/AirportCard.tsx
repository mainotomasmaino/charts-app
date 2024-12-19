import React from 'react';
import { Plane, MapPin, MapIcon } from 'lucide-react';
import { Airport } from '../types/airport';
import { getRegion } from '../utils/regions';
import { airportImages } from '../data/airportImages';

interface AirportCardProps {
  airport: Airport;
  onClick: (airport: Airport) => void;
}

export const AirportCard: React.FC<AirportCardProps> = ({ airport, onClick }) => {
  const region = getRegion(airport.icao);
  const procedureTypes = Array.from(new Set(airport.procedures.map(p => p.type)));
  const airportImage = airportImages.find(img => img.icao === airport.icao);
  
  return (
    <div 
      onClick={() => onClick(airport)}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:bg-gray-50 transition-all duration-300 cursor-pointer card-hover group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={airportImage?.imageUrl || "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"} 
          alt={airport.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-lg">
            {airport.name}
          </h3>
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-4 h-4" />
            <span className="text-sm drop-shadow-lg">{airport.icao}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapIcon className="w-4 h-4" />
          <span className="text-sm">{region}</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {procedureTypes.map((type) => (
            <span 
              key={type}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border border-gray-200"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};