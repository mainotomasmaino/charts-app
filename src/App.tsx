import React, { useState } from 'react';
import { AirportCard } from './components/AirportCard';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { AirportDetail } from './components/AirportDetail';
import { Navigation } from './components/Navigation';
import { airports } from './data/airports';
import { Airport } from './types/airport';
import { Filters } from './types/filters';
import { filterAirports } from './utils/filterAirports';

function App() {
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    procedureType: 'Todos',
    region: 'Todos'
  });
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);

  const filteredAirports = filterAirports(airports, filters);

  if (selectedAirport) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto p-6">
          <AirportDetail 
            airport={selectedAirport}
            onBack={() => setSelectedAirport(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-6xl mx-auto p-6">
        <div className="space-y-6 mb-8">
          <SearchBar 
            value={filters.searchTerm}
            onChange={(searchTerm) => setFilters({ ...filters, searchTerm })}
          />
          <FilterBar
            filters={filters}
            onFilterChange={setFilters}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAirports.map((airport) => (
            <AirportCard
              key={airport.icao}
              airport={airport}
              onClick={setSelectedAirport}
            />
          ))}
        </div>

        {filteredAirports.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron aeropuertos que coincidan con los filtros seleccionados.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;