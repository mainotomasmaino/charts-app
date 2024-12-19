import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const chiloe: Airport = {
  name: "DALCAHUE / AD de Mocopulli",
  icao: "SCPQ",
  procedures: [
    { type: "STAR", name: "STAR1", url: createProcedureUrl("SCPQ", "STAR1") },
    { type: "STAR", name: "STAR2", url: createProcedureUrl("SCPQ", "STAR2") },
    { type: "STAR", name: "STAR3", url: createProcedureUrl("SCPQ", "STAR3") },
    { type: "STAR", name: "STAR4", url: createProcedureUrl("SCPQ", "STAR4") },
    { type: "SID", name: "SID1", url: createProcedureUrl("SCPQ", "SID1") },
    { type: "SID", name: "SID2", url: createProcedureUrl("SCPQ", "SID2") },
    { type: "SID", name: "SID3", url: createProcedureUrl("SCPQ", "SID3") },
    { type: "SID", name: "SID4", url: createProcedureUrl("SCPQ", "SID4") },
    { type: "IAC", name: "IAC1", url: createProcedureUrl("SCPQ", "IAC1") },
    { type: "IAC", name: "IAC2", url: createProcedureUrl("SCPQ", "IAC2") },
    { type: "IAC", name: "IAC3", url: createProcedureUrl("SCPQ", "IAC3") },
    { type: "IAC", name: "IAC4", url: createProcedureUrl("SCPQ", "IAC4") },
    { type: "IAC", name: "IAC5", url: createProcedureUrl("SCPQ", "IAC5") },
    { type: "INFO RWY", name: "INFO RWY", url: createProcedureUrl("SCPQ", "ADC") }
  ]
};