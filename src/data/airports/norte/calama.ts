import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const calama: Airport = {
  name: "CALAMA / AD El Loa",
  icao: "SCCF",
  procedures: [
    {
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 CEPAM 3A / VUBLA 3 / TAITO 3C / VUREL 3C",
      procedureName: "STAR1",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20STAR1.pdf"
    },
    {
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 VUDAP 4 / VUREL 3D",
      procedureName: "STAR2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20STAR2.pdf"
    },
    {
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 VUREL 2E / TAITO 4A / MARGU 3A",
      procedureName: "STAR3",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20STAR3.pdf"
    },
    {
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 VUREL 3F / TAITO 3B / CEPAM 4B",
      procedureName: "STAR4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20STAR4.pdf"
    },
    {
      type: "SID",
      name: "SID1",
      standardName: "SID 1 TAITO 3L / VUREL 3J",
      procedureName: "SID1",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20SID1.pdf"
    },
    {
      type: "SID",
      name: "SID2",
      standardName: "SID 2 TAITO 3M / VUREL 3K",
      procedureName: "SID2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20SID2.pdf"
    },
    {
      type: "SID",
      name: "SID3",
      standardName: "SID 3 VUDAP 4A / CEPAM 8A",
      procedureName: "SID3",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20SID3.pdf"
    },
    {
      type: "SID",
      name: "SID4",
      standardName: "SID 4 MARGU 3J / CEPAM 4A",
      procedureName: "SID4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20SID4.pdf"
    },
    {
      type: "SID",
      name: "SID5",
      standardName: "SID 5 VUDAP 4B / TAITO 3N / VUREL 3L",
      procedureName: "SID5",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20SID5.pdf"
    },
    {
      type: "SID",
      name: "SID6",
      standardName: "SID 6 TAITO 3P / VUREL 3M",
      procedureName: "SID6",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20SID6.pdf"
    },
    {
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 I ROR RWY 10",
      procedureName: "IAC1",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20IAC1.pdf"
    },
    {
      type: "INFO RWY",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20ADC.pdf"
    },
    {
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 VOR Z RWY 28",
      procedureName: "IAC2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20IAC2.pdf"
    },
    {
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 VOR Y RWY 28",
      procedureName: "IAC3",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20IAC3.pdf"
    },
    {
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 RNP Y RWY 10 (LNAV only)",
      procedureName: "IAC4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20IAC4.pdf"
    },
    {
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 RNP Y RWY 28 (LNAV only)",
      procedureName: "IAC5",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20IAC5.pdf"
    },
    {
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 RNP Z RWY 10 (AR)",
      procedureName: "IAC6",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20IAC6.pdf"
    },
    {
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 RNP Z RWY 28 (AR)",
      procedureName: "IAC7",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20IAC7.pdf"
    },
    {
      type: "ATCSMAC",
      name: "ATCSMAC",
      standardName: "ATCSMAC",
      procedureName: "ATCSMAC",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20MRVAC.pdf"
    },
    {
      type: "Tabla de coordenadas",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCF/SCCF%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};