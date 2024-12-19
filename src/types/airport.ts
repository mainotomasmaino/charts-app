export interface Airport {
  name: string;
  icao: string;
  procedures: Procedure[];
}

export interface Procedure {
  type: ProcedureType;
  name: string;
  standardName: string;
  procedureName: string;
  lastUpdate: string;
  url: string;
}

export type ProcedureType = 
  | 'STAR'
  | 'SID' 
  | 'IAC'
  | 'INFO RWY'
  | 'VAC'
  | 'PDC'
  | 'BCAC'
  | 'ATCSMAC'
  | 'VDRC'
  | 'LVP'
  | 'COND ESPEC'
  | 'Todos';