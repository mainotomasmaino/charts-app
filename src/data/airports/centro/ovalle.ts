import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const ovalle: Airport = {
  name: "OVALLE / AD El Tuqui",
  icao: "SCOV",
  procedures: [
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 RNP RWY22 (LNAV only) - Tabla de codificación",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCOV/SCOV%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "26 marzo 2020",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCOV/SCOV%20ADC.pdf"
    },
    { 
      type: "Other",
      name: "COND ESPEC",
      standardName: "CONDICIONES ESPECIALES",
      procedureName: "COND ESPEC",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCOV/SCOV%20COND%20ESPEC.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCOV/SCOV%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};