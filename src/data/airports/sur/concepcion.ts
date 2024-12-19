import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const concepcion: Airport = {
  name: "CONCEPCION / AP Carriel Sur",
  icao: "SCIE",
  procedures: [
    {
      type: "STAR",
      name: "STAR1",
      standardName: "STAR 1 SOSTA 5A/ ANGOL 5C/ PANEX 6A",
      procedureName: "STAR1",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20STAR1.pdf"
    },
    {
      type: "STAR",
      name: "STAR2",
      standardName: "STAR 2 ESIDO 4A/SOSTA 8D/ARUNI 8E/ VUMIT 7C",
      procedureName: "STAR2",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20STAR2.pdf"
    },
    {
      type: "STAR",
      name: "STAR3",
      standardName: "STAR 3 ANGOL 5A / PANEX 5B",
      procedureName: "STAR3",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20STAR3.pdf"
    },
    {
      type: "STAR",
      name: "STAR4",
      standardName: "STAR 4 RNAV SOSTA 6C/ARUNI 6C/ VUMIT 4B/ANGOL 4B/PANEX 6C",
      procedureName: "STAR4",
      lastUpdate: "10 agosto 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20STAR4.pdf"
    },
    {
      type: "STAR",
      name: "STAR5",
      standardName: "STAR 5 RNAV RWY02 ESIDO 1B / SOSTA 1E / ARUNI 1D",
      procedureName: "STAR5",
      lastUpdate: "10 agosto 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20STAR5.pdf"
    },
    {
      type: "STAR",
      name: "STAR6",
      standardName: "STAR 6 RNAV RWY 02 ESIDO 1C / SOSTA 1B / ARUNI 1A",
      procedureName: "STAR6",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20STAR6.pdf"
    },
    {
      type: "SID",
      name: "SID1",
      standardName: "SID 1 PANEX 2J/ PANEX 2K/ SOSTA 2J/ LODOS 3J/ VUMIT 2J",
      procedureName: "SID1",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20SID1.pdf"
    },
    {
      type: "SID",
      name: "SID2",
      standardName: "SID 2 SOSTA 2K / LODOS 3K / VUMIT 2K / PANEX 2L",
      procedureName: "SID2",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20SID2.pdf"
    },
    {
      type: "SID",
      name: "SID3",
      standardName: "SID 3 SOSTA 3L / LODOS 4M / VUMIT 3L / PANEX 3M",
      procedureName: "SID3",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20SID3.pdf"
    },
    {
      type: "SID",
      name: "SID4",
      standardName: "SID 4 RNAV RWY 20 DEXOT 3J/ESIDO 3J/ SOSTA 5M/LODOS 4N/VUMIT 4M/PANEX 3N",
      procedureName: "SID4",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20SID4.pdf"
    },
    {
      type: "SID",
      name: "SID5",
      standardName: "SID 5 RNAV RWY 02 ESIDO 1K / ESIDO 1L",
      procedureName: "SID5",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20SID5.pdf"
    },
    {
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 ILS Z RWY 02",
      procedureName: "IAC1",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC1.pdf"
    },
    {
      type: "INFO RWY",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "28 noviembre 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20ADC.pdf"
    },
    {
      type: "IAC",
      name: "IAC2",
      standardName: "IAC 2 ILS Y RWY02",
      procedureName: "IAC2",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC2.pdf"
    },
    {
      type: "IAC",
      name: "IAC3",
      standardName: "IAC 3 ILS X o LOC X RWY02",
      procedureName: "IAC3",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC3.pdf"
    },
    {
      type: "IAC",
      name: "IAC4",
      standardName: "IAC 4 ILS W o LOC W RWY02",
      procedureName: "IAC4",
      lastUpdate: "20 abril 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC4.pdf"
    },
    {
      type: "IAC",
      name: "IAC5",
      standardName: "IAC 5 ILS to LOC T RWY 02",
      procedureName: "IAC5",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC5.pdf"
    },
    {
      type: "IAC",
      name: "IAC6",
      standardName: "IAC 6 VOR Z RWY 20",
      procedureName: "IAC6",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC6.pdf"
    },
    {
      type: "IAC",
      name: "IAC7",
      standardName: "IAC 7 VOR RWY02",
      procedureName: "IAC7",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC7.pdf"
    },
    {
      type: "IAC",
      name: "IAC8",
      standardName: "IAC 8 VOR Y RWY02",
      procedureName: "IAC8",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC8.pdf"
    },
    {
      type: "IAC",
      name: "IAC9",
      standardName: "IAC 9 RNP Y RWY02",
      procedureName: "IAC9",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC9.pdf"
    },
    {
      type: "IAC",
      name: "IAC10",
      standardName: "IAC 10 RNP RWY 20",
      procedureName: "IAC10",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC10.pdf"
    },
    {
      type: "IAC",
      name: "IAC11",
      standardName: "IAC 11 RNP Z RWY 02 (AR)",
      procedureName: "IAC11",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC11.pdf"
    },
    {
      type: "IAC",
      name: "IAC12",
      standardName: "",
      procedureName: "",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC12.pdf"
    },
    {
      type: "IAC",
      name: "IAC13",
      standardName: "",
      procedureName: "",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20IAC13.pdf"
    },
    {
      type: "SMGCS",
      name: "SMGCS",
      standardName: "SMGCS",
      procedureName: "SMGCS",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20SMGCS.pdf"
    },
    {
      type: "PROC LVP",
      name: "PROC LVP",
      standardName: "LVP",
      procedureName: "LVP",
      lastUpdate: "30 noviembre 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20PROC%20LVP.pdf"
    },
    {
      type: "PDC",
      name: "PDC",
      standardName: "PDC",
      procedureName: "PDC",
      lastUpdate: "20 abril 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20PDC.pdf"
    },
    {
      type: "ATCSMAC",
      name: "ATCSMAC",
      standardName: "ATCSMAC",
      procedureName: "ATCSMAC",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20ATCSMAC.pdf"
    },
    {
      type: "BCAC",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "26 marzo 2020",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20BCAC.pdf"
    },
    {
      type: "BCAC",
      name: "BCAC RET",
      standardName: "BCAC RET",
      procedureName: "BCAC RET",
      lastUpdate: "22 abril 2021",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20BCAC%20RET.pdf"
    },
    {
      type: "VAC",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20VAC.pdf"
    },
    {
      type: "Tabla de coordenadas",
      name: "Tabla de coordenadas",
      standardName: "Lista de coordenadas",
      procedureName: "Lista de coordenadas",
      lastUpdate: "16 mayo 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCIE/SCIE%20Tabla%20de%20coordenadas.pdf"
    }
  ]
};