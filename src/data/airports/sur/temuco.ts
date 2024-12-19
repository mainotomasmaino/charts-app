import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const temuco: Airport = {
  name: "FREIRE / AD La Araucania",
  icao: "SCQP",
  procedures: [
    // STAR procedures
    { type: "STAR", name: "STAR1", url: createProcedureUrl("SCQP", "STAR1") },
    { type: "STAR", name: "STAR2", url: createProcedureUrl("SCQP", "STAR2") },
    { type: "STAR", name: "STAR3", url: createProcedureUrl("SCQP", "STAR3") },
    { type: "STAR", name: "STAR4", url: createProcedureUrl("SCQP", "STAR4") },
    { type: "STAR", name: "STAR5", url: createProcedureUrl("SCQP", "STAR5") },
    { type: "STAR", name: "STAR6", url: createProcedureUrl("SCQP", "STAR6") },
    { type: "STAR", name: "STAR7", url: createProcedureUrl("SCQP", "STAR7") },
    { type: "STAR", name: "STAR8", url: createProcedureUrl("SCQP", "STAR8") },
    { type: "STAR", name: "STAR9", url: createProcedureUrl("SCQP", "STAR9") },
    
    // SID procedures
    { type: "SID", name: "SID1", url: createProcedureUrl("SCQP", "SID1") },
    { type: "SID", name: "SID2", url: createProcedureUrl("SCQP", "SID2") },
    { type: "SID", name: "SID3", url: createProcedureUrl("SCQP", "SID3") },
    { type: "SID", name: "SID4", url: createProcedureUrl("SCQP", "SID4") },
    { type: "SID", name: "SID5", url: createProcedureUrl("SCQP", "SID5") },
    { type: "SID", name: "SID6", url: createProcedureUrl("SCQP", "SID6") },
    
    // IAC procedures
    { type: "IAC", name: "IAC1", url: createProcedureUrl("SCQP", "IAC1") },
    { type: "IAC", name: "IAC2", url: createProcedureUrl("SCQP", "IAC2") },
    { type: "IAC", name: "IAC3", url: createProcedureUrl("SCQP", "IAC3") },
    { type: "IAC", name: "IAC4", url: createProcedureUrl("SCQP", "IAC4") },
    { type: "IAC", name: "IAC5", url: createProcedureUrl("SCQP", "IAC5") },
    { type: "IAC", name: "IAC6", url: createProcedureUrl("SCQP", "IAC6") },
    { type: "IAC", name: "IAC7", url: createProcedureUrl("SCQP", "IAC7") },
    { type: "IAC", name: "IAC8", url: createProcedureUrl("SCQP", "IAC8") },
    { type: "IAC", name: "IAC9", url: createProcedureUrl("SCQP", "IAC9") },
    
    // Additional procedures
    { type: "INFO RWY", name: "INFO RWY", url: createProcedureUrl("SCQP", "INFORWY") },
    { type: "BCAC", name: "BCAC", url: createProcedureUrl("SCQP", "BCAC") },
    { type: "BCAC", name: "BCAC RET", url: createProcedureUrl("SCQP", "BCAC%20RET") },
    { type: "ATCSMAC", name: "ATCSMAC", url: createProcedureUrl("SCQP", "ATCSMAC") },
    { type: "INFO RWY", name: "Tabla de coordenadas", url: createProcedureUrl("SCQP", "COORD") }
  ]
};