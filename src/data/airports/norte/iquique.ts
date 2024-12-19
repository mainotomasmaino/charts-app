import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const iquique: Airport = {
  name: "IQUIQUE / AP Diego Aracena",
  icao: "SCDA",
  procedures: [
    {
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 PUGOT 5/LOBAG 5A/ IQUIQUE 1",
      procedureName: "STAR1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20STAR1.pdf"
    },
    {
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 GAXIR 5B / LOBAG 5B / LOKIR 5A",
      procedureName: "STAR2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20STAR2.pdf"
    },
    {
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 AKNUV 4/VUREL 5B/GAXIR 4D/ BRADA 3C",
      procedureName: "STAR3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20STAR3.pdf"
    },
    {
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 GAXIR 4C /LOBAG 4C/LOKIR 6B",
      procedureName: "STAR4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20STAR4.pdf"
    },
    {
      type: "SID",
      name: "SID1",
      standardName: "SID 1 SIRAM 1J",
      procedureName: "SID1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20SID1.pdf"
    },
    {
      type: "SID",
      name: "SID2",
      standardName: "SID 2 REBOL 4B / AKNUV 4B",
      procedureName: "SID2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20SID2.pdf"
    },
    {
      type: "SID",
      name: "SID3",
      standardName: "SID 3 SIRAM 1K / LOBAG 3",
      procedureName: "SID3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20SID3.pdf"
    },
    {
      type: "SID",
      name: "SID4",
      standardName: "SID 4 AKNUV 4C / ENLUS 5B",
      procedureName: "SID4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20SID4.pdf"
    },
    {
      type: "SID",
      name: "SID5",
      standardName: "SID 5 BRADA 1",
      procedureName: "SID5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20SID5.pdf"
    },
    {
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 ILS o LOC RWY19",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20IAC1.pdf"
    },
    {
      type: "INFO RWY",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20ADC.pdf"
    },
    {
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 VOR Z RWY19",
      procedureName: "IAC2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20IAC2.pdf"
    },
    {
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 RNP Y RWY19 (LNAV only)",
      procedureName: "IAC3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20IAC3.pdf"
    },
    {
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 RNP Z RWY19 (AR)",
      procedureName: "IAC4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20IAC4.pdf"
    },
    {
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 RNP RWY01 (AR)",
      procedureName: "IAC5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20IAC5.pdf"
    },
    {
      type: "PDC",
      name: "PDC",
      standardName: "PDC",
      procedureName: "PDC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20PDC.pdf"
    },
    {
      type: "RET",
      name: "RET",
      standardName: "PDC RET",
      procedureName: "PDC RET",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20PDC%20RET.pdf"
    },
    {
      type: "VAC",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20VAC.pdf"
    },
    {
      type: "CONDESPECIALES IFR",
      name: "CONDESPECIALES IFR",
      standardName: "CONDICIONES ESPECIALES",
      procedureName: "CONDICIONES ESPECIALES",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/cond.aprox.ifr.pdf"
    },
    {
      type: "ATCSMAC",
      name: "ATCSMAC1",
      standardName: "ATCSMAC-1",
      procedureName: "ATCSMAC-1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20MRVAC1.pdf"
    },
    {
      type: "ATCSMAC",
      name: "ATCSMAC2",
      standardName: "ATCSMAC-2",
      procedureName: "ATCSMAC-2",
      lastUpdate: "20 abril 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20MRVAC2.pdf"
    },
    {
      type: "BCAC",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20BCAC.pdf"
    },
    {
      type: "Tabla de coordenadas",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Lista de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCDA/SCDA%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};