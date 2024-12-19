import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const santiagoEulogio: Airport = {
  name: "SANTIAGO / AD Eulogio Sanchez",
  icao: "SCTB",
  procedures: [
    // STAR procedures
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 ANGOD 1E - Tabla de codificación",
      procedureName: "STAR1",
      lastUpdate: "28 NOV 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTB/SCTB%20STAR1.pdf"
    },
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID 1 PARKE 7",
      procedureName: "SID1",
      lastUpdate: "26 MAR 2020",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTB/SCTB%20SID.pdf"
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "SID 2 TOLAR 3",
      procedureName: "SID2",
      lastUpdate: "26 MAR 2020",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTB/SCTB%20SID2.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 RNP RWY 01 (LNAV Only) - Tabla de codificación",
      procedureName: "IAC1",
      lastUpdate: "30 NOV 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTB/SCTB%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "COND ESPEC",
      standardName: "Condiciones Especiales APCH",
      procedureName: "COND ESPEC",
      lastUpdate: "30 NOV 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTB/SCTB%20COND%20ESP%20IFR.pdf"
    },
    { 
      type: "Other",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "08 AUG 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTB/SCTB%20VAC.pdf"
    },
    { 
      type: "Other",
      name: "RET",
      standardName: "DISPOSICIONES OPS",
      procedureName: "RET",
      lastUpdate: "20 APR 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTB/SCTB%20RET.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Tabla de coordenadas",
      procedureName: "Lista de coordenadas",
      lastUpdate: "30 NOV 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTB/SCTB%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};