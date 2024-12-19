export const PROCEDURE_TYPES = [
  'Todos',
  'STAR',
  'SID',
  'IAC',
  'INFO RWY',
  'VAC',
  'PDC',
  'BCAC',
  'ATCSMAC'
] as const;

export const REGIONS = [
  'Todos',
  'Norte',
  'Centro',
  'Sur',
  'Austral',
  'Especial'
] as const;

export type ProcedureType = typeof PROCEDURE_TYPES[number];
export type Region = typeof REGIONS[number];