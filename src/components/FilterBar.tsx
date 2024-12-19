import React from 'react';
import { Filter, MapPin } from 'lucide-react';
import { Filters } from '../types/filters';
import { PROCEDURE_TYPES, REGIONS } from '../constants/filters';

interface FilterBarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="space-y-4">
{/*      <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-lg">
            <Filter className="w-5 h-5 text-gray-700" />
          </div>
          <span className="text-gray-700 font-medium">Procedimientos</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PROCEDURE_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => onFilterChange({ ...filters, procedureType: type })}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filters.procedureType === type
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
*/}
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-lg">
            <MapPin className="w-5 h-5 text-gray-700" />
          </div>
          <span className="text-gray-700 font-medium">Región</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => onFilterChange({ ...filters, region })}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filters.region === region
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};