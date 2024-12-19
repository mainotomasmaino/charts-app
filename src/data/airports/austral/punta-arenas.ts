import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const puntaArenas: Airport = {
  name: "PUNTA ARENAS / AP Pdte. Carlos Ibañez del Campo",
  icao: "SCCI",
  procedures: [
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 RWY25 NEDAX 3G/ MUNER 3G",
      procedureName: "STAR1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20STAR1.pdf"
    },
    { 
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 RNAV RWY07/12 NEDAX 3F/ MUNER 2F / EGOSA 2F - Tabla de codificación",
      procedureName: "STAR2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20STAR2.pdf"
    },
    { 
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 RNAV RWY25/30 NEDAX 3E / MUNER 2E / EGOSA 2E - Tabla de codificación",
      procedureName: "STAR3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20STAR3.pdf"
    },
    { 
      type: "SID",
      name: "SID1",
      standardName: "SID 1 METAN 1 / BUNKO 1",
      procedureName: "SID1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20SID1.pdf"
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "SID 2 YAGAN 1 / NAIKE 1 / DOSON 1",
      procedureName: "SID2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20SID2.pdf"
    },
    { 
      type: "SID",
      name: "SID3",
      standardName: "SID 3 RNAV RWY25/30 SIRUN 4A - Tabla de codificación",
      procedureName: "SID3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20SID3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 ILS Z o LOC Z RWY25",
      procedureName: "IAC1",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20ADC.pdf"
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 ILS Y o LOC Y RWY25",
      procedureName: "IAC2",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC2.pdf"
    },
    { 
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 ILS X o LOC X RWY25 - Tabla de codificación",
      procedureName: "IAC3",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC3.pdf"
    },
    { 
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 VOR Z RWY07",
      procedureName: "IAC4",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC4.pdf"
    },
    { 
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 VOR Z RWY12",
      procedureName: "IAC5",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC5.pdf"
    },
    { 
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 VOR Z RWY25",
      procedureName: "IAC6",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC6.pdf"
    },
    { 
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 VOR Z RWY30",
      procedureName: "IAC7",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC7.pdf"
    },
    { 
      type: "IAC",
      name: "IAC8",
      standardName: "IAC 8 VOR Y RWY07",
      procedureName: "IAC8",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC8.pdf"
    },
    {
      type: "IAC",
      name: "IAC9",
      standardName: "IAC 9 VOR Y RWY12",
      procedureName: "IAC9",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC9.pdf"
    },
    {
      type: "IAC",
      name: "IAC10",
      standardName: "IAC 10 VOR RWY19",
      procedureName: "IAC10",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC10.pdf"
    },
    {
      type: "IAC",
      name: "IAC11",
      standardName: "IAC 11 VOR Y RWY25",
      procedureName: "IAC11",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC11.pdf"
    },
    {
      type: "IAC",
      name: "IAC12",
      standardName: "IAC 12 VOR Y RWY30",
      procedureName: "IAC12",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC12.pdf"
    },
    {
      type: "IAC",
      name: "IAC13",
      standardName: "IAC 13 RNP Y RWY07 - Tabla de codificación",
      procedureName: "IAC13",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC13.pdf"
    },
    {
      type: "IAC",
      name: "IAC14",
      standardName: "IAC 14 RNP RWY12 - Tabla de codificación",
      procedureName: "IAC14",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC14.pdf"
    },
    {
      type: "IAC",
      name: "IAC15",
      standardName: "IAC 15 RNP Y RWY25 - Tabla de codificación",
      procedureName: "IAC15",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC15.pdf"
    },
    {
      type: "IAC",
      name: "IAC16",
      standardName: "IAC 16 RNP Y RWY30 - Tabla de codificación",
      procedureName: "IAC16",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC16.pdf"
    },
    {
      type: "IAC",
      name: "IAC17",
      standardName: "IAC 17 RNP Z RWY25 (AR) - Tabla de codificación",
      procedureName: "IAC17",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC17.pdf"
    },
    {
      type: "IAC",
      name: "IAC18",
      standardName: "IAC 18 RNP Z RWY30 (AR) - Tabla de codificación",
      procedureName: "IAC18",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC18.pdf"
    },
    {
      type: "IAC",
      name: "IAC19",
      standardName: "IAC 19 RNP Z RWY07 (AR) - Tabla de codificación",
      procedureName: "IAC19",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC19.pdf"
    },
    {
      type: "IAC",
      name: "IAC20",
      standardName: "IAC20",
      procedureName: "IAC20",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC20.pdf"
    },
    {
      type: "IAC",
      name: "IAC21",
      standardName: "IAC21",
      procedureName: "IAC21",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC21.pdf"
    },
    {
      type: "IAC",
      name: "IAC22",
      standardName: "IAC22",
      procedureName: "IAC22",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC22.pdf"
    },
    {
      type: "IAC",
      name: "IAC23",
      standardName: "IAC23",
      procedureName: "IAC23",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC23.pdf"
    },
    {
      type: "IAC",
      name: "IAC24",
      standardName: "IAC24",
      procedureName: "IAC24",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC24.pdf"
    },
    {
      type: "IAC",
      name: "IAC25",
      standardName: "IAC25",
      procedureName: "IAC25",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC25.pdf"
    },
    {
      type: "IAC",
      name: "IAC26",
      standardName: "IAC26",
      procedureName: "IAC26",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20IAC26.pdf"
    },
    {
      type: "Other",
      name: "ATCSMAC",
      standardName: "ATCSMAC",
      procedureName: "ATCSMAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20MRVAC.pdf"
    },
    {
      type: "Other",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20VAC.pdf"
    },
    {
      type: "Other",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20BCAC.pdf"
    },
    {
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCCI/SCCI%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};