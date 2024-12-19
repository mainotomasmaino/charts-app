import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const talca: Airport = {
  name: "TALCA / AD Panguilemo",
  icao: "SCTL",
  procedures: [
    { 
      type: "Other",
      name: "VDRC N",
      standardName: "VDRC N",
      procedureName: "VDRC N - Tabla de codificación",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTL/SCTL%20VDRC%20N.pdf"
    },
    { 
      type: "Other",
      name: "VDRC S",
      standardName: "VDRC S",
      procedureName: "VDRC S - Tabla de codificación",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTL/SCTL%20VDRC%20S.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC1",
      procedureName: "IAC 1 RNP RWY03 (LNAV only) - Tabla de codificación",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTL/SCTL%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTL/SCTL%20INFO%20RWY.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC2",
      procedureName: "IAC 2 RNP RWY 21 (LNAV only) - Tabla de codificación",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTL/SCTL%20IAC2.pdf"
    },
    { 
      type: "Other",
      name: "COND ESPEC IFR",
      standardName: "COND ESPEC IFR",
      procedureName: "CONDICIONES ESPECIALES",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTL/SCTL%20COND%20ESP%20IFR.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Tabla de coordenadas",
      procedureName: "Lista de coordenadas",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTL/SCTL%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};