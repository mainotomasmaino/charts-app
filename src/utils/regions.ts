import { Region } from '../types/filters';

interface AirportRegion {
  icao: string;
  region: Region;
}

export const airportRegions: AirportRegion[] = [
  // Norte
  { icao: 'SCAR', region: 'Norte' },  // Arica
  { icao: 'SCDA', region: 'Norte' },  // Iquique
  { icao: 'SCFA', region: 'Norte' },  // Antofagasta
  { icao: 'SCCF', region: 'Norte' },  // Calama
  { icao: 'SCAT', region: 'Norte' },  // Caldera
  
  // Centro
  { icao: 'SCSE', region: 'Centro' }, // La Serena
  { icao: 'SCOV', region: 'Centro' }, // Ovalle
  { icao: 'SCVM', region: 'Centro' }, // Viña del Mar
  { icao: 'SCEL', region: 'Centro' }, // Santiago AMB
  { icao: 'SCTB', region: 'Centro' }, // Santiago Eulogio Sánchez
  { icao: 'SCSN', region: 'Centro' }, // Santo Domingo
  { icao: 'SCTL', region: 'Centro' }, // Talca
  { icao: 'SCCH', region: 'Centro' }, // Chillán
  
  // Sur
  { icao: 'SCIE', region: 'Sur' },    // Concepción
  { icao: 'SCGE', region: 'Sur' },    // Los Ángeles
  { icao: 'SCTO', region: 'Sur' },    // Victoria
  { icao: 'SCQP', region: 'Sur' },    // Temuco
  { icao: 'SCVI', region: 'Sur' },    // Villarrica
  { icao: 'SCVD', region: 'Sur' },    // Valdivia
  { icao: 'SCJO', region: 'Sur' },    // Osorno
  { icao: 'SCTE', region: 'Sur' },    // Puerto Montt
  { icao: 'SCPQ', region: 'Sur' },    // Chiloé
  
  // Austral
  { icao: 'SCBA', region: 'Austral' }, // Balmaceda
  { icao: 'SCNT', region: 'Austral' }, // Puerto Natales
  { icao: 'SCCI', region: 'Austral' }, // Punta Arenas
  { icao: 'SCRM', region: 'Austral' }, // Antártica
  { icao: 'SCGZ', region: 'Austral' }, // Puerto Williams
  { icao: 'SCFM', region: 'Austral' }, // Porvenir
  
  // Especial
  { icao: 'SCIP', region: 'Especial' }, // Isla de Pascua
];

export const getRegion = (icao: string): Region => {
  return airportRegions.find(airport => airport.icao === icao)?.region || 'Todos';
};