import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const osorno: Airport = {
  name: "OSORNO / AD Cañal Bajo - Carlos Hott Siebert",
  icao: "SCJO",
  procedures: [
    {
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 RWY15/33 ISUDO 2A/ANROS 2R/VOVKI 2J",
      procedureName: "STAR1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20STAR1.pdf"
    },
    {
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 ISUDO 2B / ANROS 2N / VOVKI 2K",
      procedureName: "STAR2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20STAR2.pdf"
    },
    {
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 RNAV RWY15 ISUDO 3C / ERUKA 3C / VOVKI 2L / TOMUS 3A",
      procedureName: "STAR3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20STAR3.pdf"
    },
    {
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 ISUDO 2E/ ERUKA 2D/ VOVKI 2M",
      procedureName: "STAR4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20STAR4.pdf"
    },
    {
      type: "SID",
      name: "SID1",
      standardName: "SID 1 ISUDO 2P/ANROS 2P/ KIKOP 2M / TOMUS 2J",
      procedureName: "SID1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20SID1.pdf"
    },
    {
      type: "SID",
      name: "SID2",
      standardName: "SID 2 ISUDO 2Q / ANROS 2Q / KIKOP 2N / TOMUS 2B",
      procedureName: "SID2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20SID2.pdf"
    },
    {
      type: "SID",
      name: "SID3",
      standardName: "SID 3 ISUDO 2R / PUKAN2C / TOMUS 2C",
      procedureName: "SID3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20SID3.pdf"
    },
    {
      type: "SID",
      name: "SID4",
      standardName: "SID 4 ISUDO 2D / PUKAN 2D / TOMUS 2D",
      procedureName: "SID4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20SID4.pdf"
    },
    {
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 VOR Z RWY15",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20IAC1.pdf"
    },
    {
      type: "INFO RWY",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20ADC.pdf"
    },
    {
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 VOR Y RWY15",
      procedureName: "IAC2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20IAC2.pdf"
    },
    {
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 VOR Z RWY33",
      procedureName: "IAC3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20IAC3.pdf"
    },
    {
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 VOR Y RWY33",
      procedureName: "IAC4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20IAC4.pdf"
    },
    {
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 VOR X RWY15",
      procedureName: "IAC5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20IAC5.pdf"
    },
    {
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 RNP Y RWY15",
      procedureName: "IAC6",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20IAC6.pdf"
    },
    {
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 RNP Y RWY33",
      procedureName: "IAC7",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20IAC7.pdf"
    },
    {
      type: "IAC",
      name: "IAC8",
      standardName: "IAC 8 RNP Z RWY15 (AR)",
      procedureName: "IAC8",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20IAC8.pdf"
    },
    {
      type: "IAC",
      name: "IAC9",
      standardName: "IAC 9 RNP Z RWY33 (AR)",
      procedureName: "IAC9",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20IAC9.pdf"
    },
    {
      type: "Tabla de coordenadas",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Lista de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCJO/SCJO%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};