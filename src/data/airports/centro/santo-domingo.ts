import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const santoDomingo: Airport = {
  name: "SANTO DOMINGO / AD Santo Domingo",
  icao: "SCSN",
  procedures: [
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID1",
      procedureName: "SID 1 RNAV RWY23 VENTANAS 1J / TELAG 1J / ESOKI 1J / MOLTU 1J - Tabla de codificación",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20SID1.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC1",
      procedureName: "IAC 1 VOR Z RWY05",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "20 abril 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20INFO%20RWY.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC2",
      procedureName: "IAC 2 VOR RWY23",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20IAC2.pdf"
    },
    { 
      type: "IAC",
      name: "IAC3",
      standardName: "IAC3",
      procedureName: "IAC 3 VOR Y RWY05",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20IAC3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC4",
      standardName: "IAC4",
      procedureName: "IAC 4 ILS RWY23",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20IAC4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC5",
      standardName: "IAC5",
      procedureName: "IAC 5 RNP RWY05 (LNAV only) - Tabla de codificación",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20IAC5.pdf"
    },
    { 
      type: "IAC",
      name: "IAC6",
      standardName: "IAC6",
      procedureName: "IAC 6 RNP RWY23 (LNAV only) - Tabla de codificación",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20IAC6.pdf"
    },
    { 
      type: "IAC",
      name: "IAC7",
      standardName: "",
      procedureName: "",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20IAC7.pdf"
    },
    { 
      type: "Other",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20VAC.pdf"
    },
    { 
      type: "Other",
      name: "RET",
      standardName: "RET",
      procedureName: "VAC RET",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20RET.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Tabla de coordenadas",
      procedureName: "Lista de coordenadas",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCSN/SCSN%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};