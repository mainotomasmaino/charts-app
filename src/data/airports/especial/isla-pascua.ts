import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const islaPascua: Airport = {
  name: "ISLA DE PASCUA / AP Mataveri",
  icao: "SCIP",
  procedures: [
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 ASALA 2A/EROPI 2A/VUGSU 2A - Tabla de codificación",
      procedureName: "STAR1",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20STAR1.pdf"
    },
    { 
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 EROPI 1C/ASALA 2C/VUGSU 2B/VUGSU 3C/VUGSU 2D - Tabla de codificación",
      procedureName: "STAR2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20STAR2.pdf"
    },
    { 
      type: "STAR",
      name: "STAR3",
      standardName: "STAR3",
      procedureName: "STAR3",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20STAR3.pdf"
    },
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID 1 EROPI 2J / ASALA 2J - Tabla de codificación",
      procedureName: "SID1",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20SID%201.pdf"
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "SID 2 HANP1 1A / HANP1 1B / HANP1 1E - Tabla de codificación",
      procedureName: "SID2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20SID%202.pdf"
    },
    { 
      type: "SID",
      name: "SID3",
      standardName: "SID 3 HANP1 1C / HANP1 1D - Tabla de codificación",
      procedureName: "SID3",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20SID%203.pdf"
    },
    { 
      type: "SID",
      name: "SID4",
      standardName: "SID 4 EROPI 3K / ASALA 3K - Tabla de codificación",
      procedureName: "SID4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20SID%204.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 ILS Z RWY10",
      procedureName: "IAC1",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20ADC.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 ILS X o LOC X RWY 10 - Tabla de codificación",
      procedureName: "IAC2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC2.pdf"
    },
    { 
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 VOR RWY10",
      procedureName: "IAC3",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 VOR Y RWY28",
      procedureName: "IAC4",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 RNP Z RWY10 (LNAV only) - Tabla de codificación",
      procedureName: "IAC5",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC5.pdf"
    },
    { 
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 RNP Y RWY10 - Tabla de codificación",
      procedureName: "IAC6",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC6.pdf"
    },
    { 
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 RNP Y RWY28 - Tabla de codificación",
      procedureName: "IAC7",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC7.pdf"
    },
    { 
      type: "IAC",
      name: "IAC8",
      standardName: "IAC 8 RNP X RWY10 (AR) - Tabla de codificación",
      procedureName: "IAC8",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC8.pdf"
    },
    { 
      type: "IAC",
      name: "IAC9",
      standardName: "IAC 9 RNP Z RWY28 (AR) - Tabla de codificación",
      procedureName: "IAC9",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC%209.pdf"
    },
    { 
      type: "IAC",
      name: "IAC10",
      standardName: "IAC10",
      procedureName: "IAC10",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC10.pdf"
    },
    { 
      type: "IAC",
      name: "IAC11",
      standardName: "IAC11",
      procedureName: "IAC11",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20IAC11.pdf"
    },
    { 
      type: "Other",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20BCAC.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIP/SCIP%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};