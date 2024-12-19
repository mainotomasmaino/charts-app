import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const caldera: Airport = {
  name: "CALDERA / AD Desierto de Atacama",
  icao: "SCAT",
  procedures: [
    {
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 RWY 17 DOVKA 3A",
      procedureName: "STAR1",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20STAR1.pdf"
    },
    {
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 RWY 17 UPUKU 3A / PUNAP 3A",
      procedureName: "STAR2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20STAR2.pdf"
    },
    {
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 RWY 35 UPUKU 4B / PUNAP 3B",
      procedureName: "STAR3",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20STAR3.pdf"
    },
    {
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 RWY 35 DOVKA 3B / NENAT 4A",
      procedureName: "STAR4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20STAR4.pdf"
    },
    {
      type: "STAR",
      name: "STAR5",
      standardName: "STAR 5 RWY 17 NENAT 4B",
      procedureName: "STAR5",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20STAR5.pdf"
    },
    {
      type: "STAR",
      name: "STAR6",
      standardName: "STAR 6 RNAV RWY 17 SCAT / PUNAP 1E",
      procedureName: "STAR6",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20STAR6.pdf"
    },
    {
      type: "STAR",
      name: "STAR7",
      standardName: "STAR 7 RNAV RWY 35 NENAT 3D / PUNAP 3D",
      procedureName: "STAR7",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20STAR7.pdf"
    },
    {
      type: "SID",
      name: "SID1",
      standardName: "SID 1 RWY 35 DOVKA 2J / EKUBO 2A / UPUKU 2J",
      procedureName: "SID1",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20SID1.pdf"
    },
    {
      type: "SID",
      name: "SID2",
      standardName: "SID 2 RWY 17 DOVKA 2K / EKUBO 2B / UPUKU 2B",
      procedureName: "SID2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20SID2.pdf"
    },
    {
      type: "SID",
      name: "SID3",
      standardName: "SID 3 RWY 17/35 ILSOT 3J / ILSOT 3K",
      procedureName: "SID3",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20SID3.pdf"
    },
    {
      type: "SID",
      name: "SID4",
      standardName: "SID 4 RWY 17/35 MORMI 3J / MORMI 3K",
      procedureName: "SID4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20SID4.pdf"
    },
    {
      type: "SID",
      name: "SID5",
      standardName: "SID 5 RNAV RWY 17/35 MORMI 3J / MORMI 3K",
      procedureName: "SID5",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20SID5.pdf"
    },
    {
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 ILS Z LOC Z RWY 17",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20IAC%201.pdf"
    },
    {
      type: "INFO RWY",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20ADC.pdf"
    },
    {
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 ILS Y LOC Y RWY 17",
      procedureName: "IAC2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20IAC%202.pdf"
    },
    {
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 VOR RWY 17",
      procedureName: "IAC3",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20IAC%203.pdf"
    },
    {
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 VOR RWY 35",
      procedureName: "IAC4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20IAC%204.pdf"
    },
    {
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 RWY 17",
      procedureName: "IAC5",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20IAC%205.pdf"
    },
    {
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 RWY 35",
      procedureName: "IAC6",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20IAC%206.pdf"
    },
    {
      type: "ATCSMAC",
      name: "ATCSMAC",
      standardName: "ATCSMAC",
      procedureName: "ATCSMAC",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20MRVAC-CTR-TMA.pdf"
    },
    {
      type: "Tabla de coordenadas",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCAT/SCAT%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};