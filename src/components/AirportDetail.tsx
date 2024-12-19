import React from 'react';
import { ArrowLeft, FileText, ExternalLink, MapPin, Plane } from 'lucide-react';
import { Airport } from '../types/airport';
import { airportImages } from '../data/airportImages';
import { getRegion } from '../utils/regions';

interface AirportDetailProps {
  airport: Airport;
  onBack: () => void;
}

export const AirportDetail: React.FC<AirportDetailProps> = ({ airport, onBack }) => {
  const airportImage = airportImages.find(img => img.icao === airport.icao);
  const region = getRegion(airport.icao);
  const proceduresByType = airport.procedures.reduce((acc, procedure) => {
    if (!acc[procedure.type]) {
      acc[procedure.type] = [];
    }
    acc[procedure.type].push(procedure);
    return acc;
  }, {} as Record<string, typeof airport.procedures>);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header Image */}
      <div className="relative h-64 md:h-96">
        <img
          src={airportImage?.imageUrl || "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"}
          alt={airport.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 flex items-center gap-2 text-white bg-black/30 hover:bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>
      </div>

      {/* Airport Info */}
      <div className="p-6 md:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{airport.name}</h2>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5" />
                <span className="font-medium">{airport.icao}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{region}</span>
              </div>
            </div>
          </div>

          {/* Procedures */}
          <div className="space-y-8">
            {Object.entries(proceduresByType).map(([type, procedures]) => (
              <div key={type} className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type}</h3>
                <div className="grid gap-3">
                  {procedures.map((procedure, index) => (
                    <a
                      key={index}
                      href={procedure.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="text-gray-600 group-hover:text-gray-900" />
                        <div>
                          {procedure.standardName && (
                            <div className="text-lg font-semibold text-gray-900">
                              {procedure.standardName}
                            </div>
                          )}
                          <div className="text-sm text-gray-600">
                            {procedure.name}
                          </div>
                          {procedure.lastUpdate && (
                            <div className="text-xs text-gray-500">
                              Última actualización: {procedure.lastUpdate}
                            </div>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="text-gray-400 group-hover:text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};