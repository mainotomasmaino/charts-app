import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const puertoWilliams: Airport = {
  name: "PUERTO WILLIAMS / AD Guardiamarina Zañartu",
  icao: "SCGZ",
  procedures: [
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 RNAV RWY26 SUNLI 1B - Tabla de codificación",
      procedureName: "STAR1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCGZ/SCGZ%20STAR1.pdf"
    },
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID 1 DUMAS 3",
      procedureName: "SID1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCGZ/SCGZ%20SID1.pdf"
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "SID 2 RNAV RWY26 SUNLI 1J - Tabla de codificación",
      procedureName: "SID2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCGZ/SCGZ%20SID2.pdf"
    },
    { 
      type: "SID",
      name: "SID3",
      standardName: "SID 3 RNAV RWY08 SUNLI 1K - Tabla de codificación",
      procedureName: "SID3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCGZ/SCGZ%20SID3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 VOR A",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCGZ/SCGZ%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCGZ/SCGZ%20ADC.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 RNP RWY 26 (LNAV Only) - Tabla de codificación",
      procedureName: "IAC2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCGZ/SCGZ%20IAC2.pdf"
    },
    { 
      type: "Other",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCGZ/SCGZ%20VAC.pdf"
    },
    { 
      type: "Other",
      name: "RET",
      standardName: "VAC RET",
      procedureName: "RET",
      lastUpdate: "21 abril 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCGZ/SCGZ%20RET.pdf"
    }
  ]
};