import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const antofagasta: Airport = {
  name: "ANTOFAGASTA / AP Andrés Sabella",
  icao: "SCFA",
  procedures: [
    {
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 DOVRI 6C",
      procedureName: "STAR1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20STAR%201.pdf"
    },
    {
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 BORO 9 / LOA 1",
      procedureName: "STAR2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20STAR%202.pdf"
    },
    {
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 FAMEL 4 / CEMOR 3",
      procedureName: "STAR3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20STAR%203.pdf"
    },
    {
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 REBOL 5 / ENLUS 5A / EKENO 5 - Tabla de codificación",
      procedureName: "STAR4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20STAR4.pdf"
    },
    {
      type: "STAR",
      name: "STAR5",
      standardName: "STAR 5 DOVRI 4B - Tabla de codificación",
      procedureName: "STAR5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20STAR%205.pdf"
    },
    {
      type: "STAR",
      name: "STAR6",
      standardName: "STAR 6 LONEK 2A / LONEK 2B - Tabla de codificación",
      procedureName: "STAR6",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20STAR%206.pdf"
    },
    {
      type: "STAR",
      name: "STAR7",
      standardName: "SCFA - STAR 7 RNAV RWY 01",
      procedureName: "STAR7",
      lastUpdate: "12 agosto 2021",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20STAR%207.pdf"
    },
    {
      type: "SID",
      name: "SID1",
      standardName: "SID 1 ISEKA 3 / FAGAS 6",
      procedureName: "SID1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20SID%201.pdf"
    },
    {
      type: "SID",
      name: "SID2",
      standardName: "SID 2 BAHIA 5",
      procedureName: "SID2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20SID%202.pdf"
    },
    {
      type: "SID",
      name: "SID3",
      standardName: "SID 3 GARTO 4J / TENEC 3 / LANNY 3 / SAITA 4",
      procedureName: "SID3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20SID%203.pdf"
    },
    {
      type: "SID",
      name: "SID4",
      standardName: "SID 4 VADIX 3A / UKATO 3A / SACON 4 - Tabla de codificación",
      procedureName: "SID4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20SID%204.pdf"
    },
    {
      type: "SID",
      name: "SID5",
      standardName: "SID 5 ISEKA 3B / BRADA 3B / APROM 3B / TATIO 4J - Tabla de codificación",
      procedureName: "SID5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20SID%205.pdf"
    },
    {
      type: "SID",
      name: "SID6",
      standardName: "SID 6 BRADA 4J / APROM 4C / TATIO 4K - Tabla de codificación",
      procedureName: "SID6",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20SID%206.pdf"
    },
    {
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 VOR Z RWY 19",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%201.pdf"
    },
    {
      type: "INFO RWY",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20ADC.pdf"
    },
    {
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 VOR Y RWY 19",
      procedureName: "IAC2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%202.pdf"
    },
    {
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 VOR X RWY 19",
      procedureName: "IAC3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%203.pdf"
    },
    {
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 VOR Z RWY 01",
      procedureName: "IAC4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%204.pdf"
    },
    {
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 VOR Y RWY 01",
      procedureName: "IAC5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%205.pdf"
    },
    {
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 RNP X RWY 01 - Tabla de codificación",
      procedureName: "IAC6",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%206.pdf"
    },
    {
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 RNP Y RWY 01 (LNAV only) - Tabla de codificación",
      procedureName: "IAC7",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%207.pdf"
    },
    {
      type: "IAC",
      name: "IAC8",
      standardName: "IAC 8 RNP Y RWY 19 (LNAV only) - Tabla de codificación",
      procedureName: "IAC8",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%208.pdf"
    },
    {
      type: "IAC",
      name: "IAC9",
      standardName: "IAC 9 RNP Z RWY 01 (AR) - Tabla de codificación",
      procedureName: "IAC9",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%209.pdf"
    },
    {
      type: "IAC",
      name: "IAC10",
      standardName: "IAC 10 RNP Z RWY 19 (AR) - Tabla de codificación",
      procedureName: "IAC10",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%2010.pdf"
    },
    {
      type: "IAC",
      name: "IAC11",
      standardName: "IAC11",
      procedureName: "IAC11",
      lastUpdate: null,
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%2011.pdf"
    },
    {
      type: "IAC",
      name: "IAC12",
      standardName: "IAC12",
      procedureName: "IAC12",
      lastUpdate: null,
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20IAC%2012.pdf"
    },
    {
      type: "PDC",
      name: "PDC",
      standardName: "PDC",
      procedureName: "PDC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20PDC.pdf"
    },
    {
      type: "BCAC",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20BCAC.pdf"
    },
    {
      type: "ATCSMAC",
      name: "ATCSMAC-1",
      standardName: "ATCSMAC-1",
      procedureName: "ATCSMAC-1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/MRVAC-SCFA1.pdf"
    },
    {
      type: "ATCSMAC",
      name: "ATCSMAC-2",
      standardName: "ATCSMAC-2",
      procedureName: "ATCSMAC-2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/MRVAC-SCFA2.pdf"
    },
    {
      type: "VAC",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20VAC.pdf"
    },
    {
      type: "Tabla de coordenadas",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFA/SCFA%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};