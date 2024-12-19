import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const puertoMontt: Airport = {
  name: "PUERTO MONTT / AP El Tepual",
  icao: "SCTE",
  procedures: [
    {
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 MIDOR 5",
      procedureName: "STAR1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20STAR1.pdf"
    },
    {
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 SARTO 2A/OSARA 2A/ GENEK 2A / CAUKE 3A",
      procedureName: "STAR2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20STAR2.pdf"
    },
    {
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 SARTO 1B / OSARA 5B / GENEK 5B/ GENEK 5C / CAUKE 5B",
      procedureName: "STAR3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20STAR3.pdf"
    },
    {
      type: "SID",
      name: "SID1",
      standardName: "SID 1 KIKOP 2D / KIKOP 4A / VOVKI 2B / VOVKI 4A",
      procedureName: "SID1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20SID1.pdf"
    },
    {
      type: "SID",
      name: "SID2",
      standardName: "SID 2 GUTIN 2D / OSARA 3K / GUTIN 4B / OSARA 4J",
      procedureName: "SID2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20SID2.pdf"
    },
    {
      type: "SID",
      name: "SID3",
      standardName: "SID 3 CALBU 2B / CALBU 4A",
      procedureName: "SID3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20SID3.pdf"
    },
    {
      type: "SID",
      name: "SID4",
      standardName: "SID 4 ANROS 3B / KIKOP 2B / KIKOP 6C / ANROS 6A",
      procedureName: "SID4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20SID4.pdf"
    },
    {
      type: "SID",
      name: "SID5",
      standardName: "SID 5 GUTIN 3A/GUTIN 4C/OSARA 2E/ OSARA 4D",
      procedureName: "SID5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20SID5.pdf"
    },
    {
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 ILS Z o LOC Z RWY35",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC1.pdf"
    },
    {
      type: "INFO RWY",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20ADC.pdf"
    },
    {
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 ILS Y o LOC Y RWY35",
      procedureName: "IAC2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC2.pdf"
    },
    {
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 VOR Z RWY17",
      procedureName: "IAC3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC3.pdf"
    },
    {
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 VOR Z RWY35",
      procedureName: "IAC4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC4.pdf"
    },
    {
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 VOR Y RWY35",
      procedureName: "IAC5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC5.pdf"
    },
    {
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 VOR Y RWY17",
      procedureName: "IAC6",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC6.pdf"
    },
    {
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 RNP Y RWY35 - Tabla de codificación",
      procedureName: "IAC7",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC7.pdf"
    },
    {
      type: "IAC",
      name: "IAC8",
      standardName: "IAC 8 RNP Y RWY17 - Tabla de codificación",
      procedureName: "IAC8",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC8.pdf"
    },
    {
      type: "IAC",
      name: "IAC9",
      standardName: "IAC 9 RNP Z RWY35 (AR) - Tabla de codificación",
      procedureName: "IAC9",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC9.pdf"
    },
    {
      type: "IAC",
      name: "IAC10",
      standardName: "IAC 10 RNP Z RWY17 (AR) - Tabla de codificación",
      procedureName: "IAC10",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20IAC10.pdf"
    },
    {
      type: "PDC",
      name: "PDC",
      standardName: "PDC",
      procedureName: "PDC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20PDC.pdf"
    },
    {
      type: "ATCSMAC",
      name: "ATCSMAC",
      standardName: "ATCSMAC",
      procedureName: "ATCSMAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20MRVAC.pdf"
    },
    {
      type: "BCAC",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20BCAC.pdf"
    },
    {
      type: "Tabla de coordenadas",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Lista de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCTE/SCTE%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};