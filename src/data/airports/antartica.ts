import { Airport } from '../../types/airport';
import { createProcedureUrl } from '../utils';

export const antartica: Airport = {
  name: "ANTARTICA / AD Teniente Rodolfo Marsh Martin",
  icao: "SCRM",
  procedures: [
    { type: "STAR", name: "STAR1", url: createProcedureUrl("SCRM", "STAR1") },
    { type: "STAR", name: "STAR2", url: createProcedureUrl("SCRM", "STAR2") },
    { type: "SID", name: "SID1", url: createProcedureUrl("SCRM", "SID1") },
    { type: "SID", name: "SID2", url: createProcedureUrl("SCRM", "SID2") },
    { type: "IAC", name: "IAC1", url: createProcedureUrl("SCRM", "IAC1") },
    { type: "IAC", name: "IAC2", url: createProcedureUrl("SCRM", "IAC2") },
    { type: "IAC", name: "IAC3", url: createProcedureUrl("SCRM", "IAC3") },
    { type: "IAC", name: "IAC4", url: createProcedureUrl("SCRM", "IAC4") },
    { type: "IAC", name: "IAC5", url: createProcedureUrl("SCRM", "IAC5") },
    { type: "INFO RWY", name: "INFO RWY", url: createProcedureUrl("SCRM", "INFO%20RWY") },
    { type: "VAC", name: "VAC", url: createProcedureUrl("SCRM", "VAC") },
    { type: "PDC", name: "PDC", url: createProcedureUrl("SCRM", "PDC") },
    { type: "BCAC", name: "BCAC", url: createProcedureUrl("SCRM", "BCAC") }
  ]
};