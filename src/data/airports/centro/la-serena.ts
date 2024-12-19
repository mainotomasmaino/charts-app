import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const laSerena: Airport = {
  name: "LA SERENA / AD La Florida",
  icao: "SCSE",
  procedures: [
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 TONGOY 3/SEBTO 4A/SEBTO 3B",
      procedureName: "STAR1",
      lastUpdate: "10 agosto 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20STAR1.pdf"
    },
    { 
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 MUGOS 4A / MUGOS 2B / MIBAS 3A",
      procedureName: "STAR2",
      lastUpdate: "10 agosto 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20STAR2.pdf"
    },
    { 
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 DANLA 4A /DANLA 3B /KUGAP 5 - Tabla de codificación",
      procedureName: "STAR3",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20STAR3.pdf"
    },
    { 
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 TIMDA 5 / ARSUS 3A / ARSUS 3B - Tabla de codificación",
      procedureName: "STAR4",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20STAR4.pdf"
    },
    { 
      type: "STAR",
      name: "STAR5",
      standardName: "STAR 5 MIBAS 4B - Tabla de codificación",
      procedureName: "STAR5",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20STAR5.pdf"
    },
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID 1 TONGOY 3/SEBTO 3/TIMDA 3J",
      procedureName: "SID1",
      lastUpdate: "10 agosto 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20SID1.pdf"
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "SID 2 SIGUD 6 / EDRON 5 - Tabla de codificación",
      procedureName: "SID2",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20SID2.pdf"
    },
    { 
      type: "SID",
      name: "SID3",
      standardName: "SID 3 VUGAS 4 - Tabla de codificación",
      procedureName: "SID3",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20SID3.pdf"
    },
    { 
      type: "SID",
      name: "SID4",
      standardName: "SID 4 MIBAS 3J/ MIBAS 4K - Tabla de codificación",
      procedureName: "SID4",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20SID4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 VOR Z RWY12",
      procedureName: "IAC1",
      lastUpdate: "10 agosto 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20ADC.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 VOR Y RWY 12",
      procedureName: "IAC2",
      lastUpdate: "10 agosto 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20IAC2.pdf"
    },
    { 
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 RNP X RWY30 (LNAV only) - Tabla de codificación",
      procedureName: "IAC3",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20IAC3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 RNP Z RWY 30 (AR) - Tabla de codificación",
      procedureName: "IAC4",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20IAC4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 RNP Y RWY30 (AR) - Tabla de codificación",
      procedureName: "IAC5",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20IAC5.pdf"
    },
    { 
      type: "Other",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "10 agosto 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20VAC.pdf"
    },
    { 
      type: "Other",
      name: "COND ESPECIALES IFR",
      standardName: "CONDICIONES ESPECIALES",
      procedureName: "COND ESPECIALES IFR",
      lastUpdate: "15 agosto 2019",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/cond.aprox.ifr.pdf"
    },
    { 
      type: "Other",
      name: "ATCSMAC",
      standardName: "ATCSMAC",
      procedureName: "ATCSMAC",
      lastUpdate: "10 agosto 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20MRVAC.pdf"
    },
    { 
      type: "Other",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "15 agosto 2019",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20BCAC.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSE/SCSE%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};