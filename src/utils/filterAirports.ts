import { Airport } from '../types/airport';
import { Filters } from '../types/filters';
import { getRegion } from './regions';

export const filterAirports = (airports: Airport[], filters: Filters): Airport[] => {
  return airports.filter((airport) => {
    // Filtro por término de búsqueda
    const searchTerm = filters.searchTerm.toLowerCase();
    const matchesSearch = 
      airport.name.toLowerCase().includes(searchTerm) ||
      airport.icao.toLowerCase().includes(searchTerm) ||
      airport.procedures.some(p => 
        p.type.toLowerCase().includes(searchTerm) ||
        p.name.toLowerCase().includes(searchTerm)
      );

    // Filtro por tipo de procedimiento
    const matchesProcedureType = 
      filters.procedureType === 'Todos' ||
      airport.procedures.some(p => p.type === filters.procedureType);

    // Filtro por región
    const matchesRegion =
      filters.region === 'Todos' ||
      getRegion(airport.icao) === filters.region;

    return matchesSearch && matchesProcedureType && matchesRegion;
  });
};