import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const balmaceda: Airport = {
  name: "BALMACEDA / AD Balmaceda",
  icao: "SCBA",
  procedures: [
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 OPURA 3A/ UDOVI 3A/ ROGEL 4 / SURTA 4A",
      procedureName: "STAR1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20STAR1.pdf"
    },
    { 
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 RWY 09 OPURA 3B / UDOVI 3B",
      procedureName: "STAR2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20STAR2.pdf"
    },
    { 
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 RNAV RWY09/27 OPURA 5C/ UDOVI 4C/SURTA 3B - Tabla de codificación",
      procedureName: "STAR3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20STAR3.pdf"
    },
    { 
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 RNAV RWY 27 OPURA 4D / UDOVI 3D / SURTA 4C - Tabla de codificación",
      procedureName: "STAR4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20STAR4.pdf"
    },
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID 1 RWY27 SURTA 4A/REKOD 3A / OPURA 3J",
      procedureName: "SID1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20SID1.pdf"
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "SID 2 RWY 09/27 REKOD 3B / OPURA 3K / ROGEL 3B / ROGEL 3A",
      procedureName: "SID2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20SID2.pdf"
    },
    { 
      type: "SID",
      name: "SID3",
      standardName: "SID 3 RNAV RWY09/27 REKOD 6C - Tabla de codificación",
      procedureName: "SID3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20SID3.pdf"
    },
    { 
      type: "SID",
      name: "SID4",
      standardName: "SID 4 RNAV RWY09 SURTA 3K - Tabla de codificación",
      procedureName: "SID4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20SID4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 VOR RWY 09",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20ADC.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 VOR Y RWY 27",
      procedureName: "IAC2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC2.pdf"
    },
    { 
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 RNP Y RWY 09 (LNAV only) - Tabla de codificación",
      procedureName: "IAC3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 RNP Y RWY 27 (LNAV only) - Tabla de codificación",
      procedureName: "IAC4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 RNP Z RWY 09 (AR) - Tabla de codificación",
      procedureName: "IAC5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC5.pdf"
    },
    { 
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 RNP Z RWY 27 (AR) - Tabla de codificación",
      procedureName: "IAC6",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC6.pdf"
    },
    { 
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 RNP X RWY 27 (AR) - Tabla de codificación",
      procedureName: "IAC7",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC7.pdf"
    },
    { 
      type: "IAC",
      name: "IAC8",
      standardName: "IAC8",
      procedureName: "IAC8",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC8.pdf"
    },
    { 
      type: "IAC",
      name: "IAC9",
      standardName: "IAC9",
      procedureName: "IAC9",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC9.pdf"
    },
    { 
      type: "IAC",
      name: "IAC10",
      standardName: "IAC10",
      procedureName: "IAC10",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC10.pdf"
    },
    { 
      type: "IAC",
      name: "IAC11",
      standardName: "IAC11",
      procedureName: "IAC11",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20IAC11.pdf"
    },
    { 
      type: "Other",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20VAC.pdf"
    },
    { 
      type: "Other",
      name: "COND ESPECIALES IFR",
      standardName: "CONDICIONES ESPECIALES IFR",
      procedureName: "COND ESPECIALES IFR",
      lastUpdate: "20 abril 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/COND%20ESPECIALES%20IFR.pdf"
    },
    { 
      type: "Other",
      name: "ATCSMAC",
      standardName: "ATCSMAC",
      procedureName: "ATCSMAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20MRVAC.pdf"
    },
    { 
      type: "Other",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20BCAC.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCBA/SCBA%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};