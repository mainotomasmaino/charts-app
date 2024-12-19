import { ProcedureType, Region } from '../constants/filters';

export interface Filters {
  searchTerm: string;
  procedureType: ProcedureType;
  region: Region;
}