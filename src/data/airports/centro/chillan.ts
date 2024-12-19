import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const chillan: Airport = {
  name: "CHILLAN / AD Gral. Bernardo O'Higgins",
  icao: "SCCH",
  procedures: [
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 ASETI 3A / MULTO 3A / VUMIT 3A",
      procedureName: "STAR1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20STAR.pdf"
    },
    { 
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 ASETI 2B / MULTO 4B / VUMIT 2B - Tabla de codificación",
      procedureName: "STAR2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20STAR2.pdf"
    },
    { 
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 ASETI 3C / MULTO 3C / VUMIT 2C - Tabla de codificación",
      procedureName: "STAR3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20STAR3.pdf"
    },
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID 1 VUMIT 2N / ASETI 2J / MULTO 2J",
      procedureName: "SID1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20SID1.pdf"
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "SID 2 ASETI 3B / MULTO 2K / VUMIT 2P",
      procedureName: "SID2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20SID2.pdf"
    },
    { 
      type: "SID",
      name: "SID3",
      standardName: "SID 3 VUMIT 2Q / ARNAK 2A / ASETI 2K / MULTO 2L - Tabla de codificación",
      procedureName: "SID3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20SID3.pdf"
    },
    { 
      type: "SID",
      name: "SID4",
      standardName: "SID 4 VUMIT 2D / ARNAK 2B / ASETI 2D / MULTO 3D - Tabla de codificación",
      procedureName: "SID4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20SID4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 VOR Z RWY 22",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20ADC.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 VOR Z RWY 04",
      procedureName: "IAC2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20IAC2.pdf"
    },
    { 
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 VOR Y RWY 22",
      procedureName: "IAC3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20IAC3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 VOR Y RWY 04",
      procedureName: "IAC4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20IAC4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 RNP RWY 22 (LNAV only) - Tabla de codificación",
      procedureName: "IAC5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20IAC5.pdf"
    },
    { 
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 RNP RWY 04 (LNAV only) - Tabla de codificación",
      procedureName: "IAC6",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20IAC6.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCH/SCCH%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};