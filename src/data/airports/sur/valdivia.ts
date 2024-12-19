import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const valdivia: Airport = {
  name: "VALDIVIA / AD Pichoy",
  icao: "SCVD",
  procedures: [
    {
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 RWY17 NEKOR 2L/KIBEL 1A",
      procedureName: "STAR1",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20STAR1.pdf"
    },
    {
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 ISUDO 2J / GUXER 2A",
      procedureName: "STAR2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20STAR2.pdf"
    },
    {
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 RNAV RWY17 NEKOR 3M/KIBEL 1B / ISUDO 3K/GUXER 3B",
      procedureName: "STAR3",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20STAR3.pdf"
    },
    {
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 RNAV RWY35 ILNUT 1A / KIBEL 1C / ISUDO 1A / GUXER 3C",
      procedureName: "STAR4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20STAR4.pdf"
    },
    {
      type: "SID",
      name: "SID1",
      standardName: "SID 1 NEKOR 1J / ASAKU 1J / KIBEL 1J / ISUDO 1M",
      procedureName: "SID1",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20SID1.pdf"
    },
    {
      type: "SID",
      name: "SID2",
      standardName: "SID 2 RWY17 NEKOR 1T / ASAKU 1K / KIBEL 1K / ISUDO 1N",
      procedureName: "SID2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20SID2.pdf"
    },
    {
      type: "SID",
      name: "SID3",
      standardName: "SID 3 RNAV RWY17NEKOR 1V / ASAKU 1L / ISUDO 2V / PUJAR 1J",
      procedureName: "SID3",
      lastUpdate: "20 abril 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20SID3.pdf"
    },
    {
      type: "SID",
      name: "SID4",
      standardName: "SID 4 RNAV RWY35 NEKOR 1X / PUJAR 1K",
      procedureName: "SID4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20SID4.pdf"
    },
    {
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 ILS Z LOC RWY 35",
      procedureName: "IAC1",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20IAC1.pdf"
    },
    {
      type: "INFO RWY",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20ADC.pdf"
    },
    {
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 VOR RWY 17",
      procedureName: "IAC2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20IAC2.pdf"
    },
    {
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 VOR RWY 35",
      procedureName: "IAC3",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20IAC3.pdf"
    },
    {
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 RNP Y RWY17 (LNAV only)",
      procedureName: "IAC4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20IAC4.pdf"
    },
    {
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 RNP Y RWY35 (LNAV only)",
      procedureName: "IAC5",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20IAC5.pdf"
    },
    {
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 RNP Z RWY17 (AR)",
      procedureName: "IAC6",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20IAC6.pdf"
    },
    {
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 RNP Z RWY35 (AR)",
      procedureName: "IAC7",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20IAC7.pdf"
    },
    {
      type: "BCAC",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20BCAC.pdf"
    },
    {
      type: "BCAC RET",
      name: "BCAC RET",
      standardName: "BCAC RET",
      procedureName: "BCAC RET",
      lastUpdate: "16 agosto 2018",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20BCAC%20RET.pdf"
    },
    {
      type: "Tabla de coordenadas",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Lista de coordenadas",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVD/SCVD%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};