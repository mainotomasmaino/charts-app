import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const vinaDelMar: Airport = {
  name: "VIÑA DEL MAR / AD Viña del Mar",
  icao: "SCVM",
  procedures: [
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 VENTANAS 1A",
      procedureName: "STAR1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20STAR1.pdf"
    },
    { 
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 SABLA 1C / DOMINGO 1A / DOMINGO 1B",
      procedureName: "STAR2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20STAR2.pdf"
    },
    { 
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 VENTANAS 1B / SABLA 1D / DOMINGO 1C",
      procedureName: "STAR3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20STAR3.pdf"
    },
    { 
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 VENTANAS 1C / SABLA 1E / DOMINGO 1D",
      procedureName: "STAR4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20STAR4.pdf"
    },
    { 
      type: "STAR",
      name: "STAR5",
      standardName: "STAR 5 MILK 4 / SELITU 1C / SABLA 4B - Tabla de codificación",
      procedureName: "STAR5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20STAR5.pdf"
    },
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID 1 VENTANAS 1K / DOMINGO 1L",
      procedureName: "SID1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20SID1.pdf"
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "SID 2 DILOK 1L / GUVOL 1L - Tabla de codificación",
      procedureName: "SID2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20SID2.pdf"
    },
    { 
      type: "SID",
      name: "SID3",
      standardName: "SID 3 SELITU 1J / SELITU 1K - Tabla de codificación",
      procedureName: "SID3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20SID3.pdf"
    },
    { 
      type: "SID",
      name: "SID4",
      standardName: "SID 4 BUXIS 1J / BUXIS 1K - Tabla de codificación",
      procedureName: "SID4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20SID4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 ILS Z RWY05",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20ADC.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 ILS Y o LOC Y RWY05",
      procedureName: "IAC2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC2.pdf"
    },
    { 
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 ILS X o LOC X RWY05",
      procedureName: "IAC3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 ILS W o LOC W RWY05 - Tabla de codificación",
      procedureName: "IAC4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 LOC RWY 05",
      procedureName: "IAC5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC5.pdf"
    },
    { 
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 VOR Z RWY05",
      procedureName: "IAC6",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC6.pdf"
    },
    { 
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 VOR Y RWY05",
      procedureName: "IAC7",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC7.pdf"
    },
    { 
      type: "IAC",
      name: "IAC8",
      standardName: "IAC 8 RNP Z RWY05 (LNAV/VNAV only) - Tabla de codificación",
      procedureName: "IAC8",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC8.pdf"
    },
    { 
      type: "IAC",
      name: "IAC9",
      standardName: "IAC 9 RNP RWY 23 (LNAV/VNAV only) - Tabla de codificación",
      procedureName: "IAC9",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC9.pdf"
    },
    { 
      type: "IAC",
      name: "IAC10",
      standardName: "IAC 10 RNP Y RWY 05 (LNAV/VNAV only) - Tabla de codificación",
      procedureName: "IAC10",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20IAC10.pdf"
    },
    { 
      type: "Other",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20VAC.pdf"
    },
    { 
      type: "Other",
      name: "RET",
      standardName: "VAC RET",
      procedureName: "RET",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20RET.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVM/SCVM%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};