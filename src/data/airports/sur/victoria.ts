import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const victoria: Airport = {
  name: "VICTORIA / AD Victoria",
  icao: "SCTO",
  procedures: [
    {
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 ARMUL 2A / ARMUL 2B",
      procedureName: "STAR1",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTO/SCTO%20STAR1.pdf"
    },
    {
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 ETEMA 2A",
      procedureName: "STAR2",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTO/SCTO%20STAR2.pdf"
    },
    {
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 RNP RWY19 (LNAV only)",
      procedureName: "IAC1",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTO/SCTO%20IAC1.pdf"
    },
    {
      type: "INFO RWY",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "20 abril 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTO/SCTO%20ADC.pdf"
    },
    {
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 RNP RWY01 (LNAV only)",
      procedureName: "IAC2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTO/SCTO%20IAC2.pdf"
    },
    {
      type: "VAC",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "20 abril 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTO/SCTO%20VAC.pdf"
    },
    {
      type: "COND ESPEC",
      name: "COND ESPEC",
      standardName: "CONDICIONES ESPECIALES",
      procedureName: "CONDICIONES ESPECIALES",
      lastUpdate: "20 abril 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTO/SCTO%20COND%20ESPEC.pdf"
    },
    {
      type: "Tabla de coordenadas",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Lista de coordenadas",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTO/SCTO%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};