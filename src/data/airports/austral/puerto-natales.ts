import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const puertoNatales: Airport = {
  name: "NATALES / AD Teniente Julio Gallardo",
  icao: "SCNT",
  procedures: [
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 RNAV RWY28 BODOM 3A/ SIRUN 3 - Tabla de codificación",
      procedureName: "STAR1",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20STAR1.pdf"
    },
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID 1 RNAV RWY28 KOLPU 3A / NEDAX 4A - Tabla de codificación",
      procedureName: "SID1",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20SID1.pdf"
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "SID 2 RNAV RWY10 KOLPU 3B / NEDAX 4B - Tabla de codificación",
      procedureName: "SID2",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20SID2.pdf"
    },
    { 
      type: "SID",
      name: "SID3",
      standardName: "SID 3 RNAV RWY28 KOLPU 3C / NEDAX 3H - Tabla de codificación",
      procedureName: "SID3",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20SID3.pdf"
    },
    { 
      type: "SID",
      name: "SID4",
      standardName: "SID 4 RNAV RWY10 KOLPU 3D - Tabla de codificación",
      procedureName: "SID4",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20SID4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 VOR RWY28",
      procedureName: "IAC1",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20ADC.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 RNP Y RWY28 (LNAV only) - Tabla de codificación",
      procedureName: "IAC2",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20IAC2.pdf"
    },
    { 
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 RNP Z RWY28 (AR) - Tabla de codificación",
      procedureName: "IAC3",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20IAC3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 RNP RWY10 (AR) - Tabla de codificación",
      procedureName: "IAC4",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20IAC4.pdf"
    },
    { 
      type: "Other",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20VAC.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCNT/SCNT%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};