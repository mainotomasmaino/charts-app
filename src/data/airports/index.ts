import { Airport } from '../../types/airport';
import { norte } from './norte/index';
import { centro } from './centro/index';
import { sur } from './sur/index';
import { austral } from './austral/index';
import { especial } from './especial/index';

// Combinamos todos los aeropuertos en un solo array
export const airports: Airport[] = [
  ...norte,
  ...centro,
  ...sur,
  ...austral,
  ...especial
];