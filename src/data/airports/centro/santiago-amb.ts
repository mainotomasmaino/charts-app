import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const santiagoAMB: Airport = {
  name: "SANTIAGO / AP Arturo Merino B.",
  icao: "SCEL",
  procedures: [
    // STAR procedures
    { 
      type: "STAR",
      name: "STAR1",
      standardName: "ANDES 1",
      procedureName: "STAR1",
      lastUpdate: "10 AUG 2023",
      url: createProcedureUrl("SCEL", "STAR1")
    },
    { 
      type: "STAR",
      name: "STAR2",
      standardName: "BAYOS 9 / UMKAL 6A",
      procedureName: "STAR2",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "STAR2")
    },
    { 
      type: "STAR",
      name: "STAR3",
      standardName: "ASIMO 1B",
      procedureName: "STAR3",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "STAR3")
    },
    { 
      type: "STAR",
      name: "STAR4",
      standardName: "EROLO 6E",
      procedureName: "STAR4",
      lastUpdate: "20 APR 2023",
      url: createProcedureUrl("SCEL", "STAR4")
    },
    { 
      type: "STAR",
      name: "STAR5",
      standardName: "EROLO 4C / KODVO 6",
      procedureName: "STAR5",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "STAR5")
    },
    { 
      type: "STAR",
      name: "STAR6",
      standardName: "LONEK 2A / LONEK 2B",
      procedureName: "STAR6",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "STAR6")
    },
    { 
      type: "STAR",
      name: "STAR7",
      standardName: "EROLO 8A / EROLO 2D",
      procedureName: "STAR7",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "STAR7")
    },
    { 
      type: "STAR",
      name: "STAR8",
      standardName: "EROLO 7F",
      procedureName: "STAR8",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "STAR8")
    },
    { 
      type: "STAR",
      name: "STAR9",
      standardName: "SIMOK6D/ASIMO5C/UMKAL7B",
      procedureName: "STAR9",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "STAR9")
    },
    { 
      type: "STAR",
      name: "STAR10",
      standardName: "EROLO 4B / SABLA 5A",
      procedureName: "STAR10",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "STAR10")
    },
    { 
      type: "STAR",
      name: "STAR11",
      standardName: "RNAV RWY 17R SUKSA 1A",
      procedureName: "STAR11",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "STAR11")
    },
    // SID procedures
    { 
      type: "SID",
      name: "SID1",
      standardName: "RWY17 R/L ALBAL 7A / NEBEG 7A / ANGOD 8B",
      procedureName: "SID1",
      lastUpdate: "08 AUG 2024",
      url: createProcedureUrl("SCEL", "SID1")
    },
    { 
      type: "SID",
      name: "SID2",
      standardName: "RWY17 R/L LINER 5A / GELUS 6A / SABLA 8",
      procedureName: "SID2",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID2")
    },
    { 
      type: "SID",
      name: "SID3",
      standardName: "RWY17R/L DOMINGO6 / VENTANAS6 / DONTI6A / TABON6A",
      procedureName: "SID3",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID3")
    },
    { 
      type: "SID",
      name: "SID4",
      standardName: "RWY35R/L TENUT 5 / GUVOL 5C / SANTIAGO 5",
      procedureName: "SID4",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID4")
    },
    { 
      type: "SID",
      name: "SID5",
      standardName: "RNAV GELUS 5B / GELUS 3C",
      procedureName: "SID5",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID5")
    },
    { 
      type: "SID",
      name: "SID6",
      standardName: "RNAV DILOK 7B / DILOK 5A",
      procedureName: "SID6",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID6")
    },
    { 
      type: "SID",
      name: "SID7",
      standardName: "RNAV GUVOL 6B / GUVOL 4A",
      procedureName: "SID7",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID7")
    },
    { 
      type: "SID",
      name: "SID8",
      standardName: "RNAV DONTI 5B",
      procedureName: "SID8",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID8")
    },
    { 
      type: "SID",
      name: "SID9",
      standardName: "RNAV NEBEG 7C / NEBEG 5D",
      procedureName: "SID9",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID9")
    },
    { 
      type: "SID",
      name: "SID10",
      standardName: "RNAV ALBAL 7C / ALBAL 5D",
      procedureName: "SID10",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID10")
    },
    { 
      type: "SID",
      name: "SID11",
      standardName: "RNAV LINER 6C / LINER 5D",
      procedureName: "SID11",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID11")
    },
    { 
      type: "SID",
      name: "SID12",
      standardName: "RNAV ANGOD 6C",
      procedureName: "SID12",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID12")
    },
    { 
      type: "SID",
      name: "SID13",
      standardName: "RNP RWY 17R/17L DONTI 1J / DILOK 1J / GUVOL 1J",
      procedureName: "SID13",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "SID13")
    },
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "ILS Z RWY17L",
      procedureName: "IAC1",
      lastUpdate: "20 APR 2023",
      url: createProcedureUrl("SCEL", "IAC1")
    },
    { 
      type: "IAC",
      name: "IAC2",
      standardName: "ILS Z RWY17R",
      procedureName: "IAC2",
      lastUpdate: "20 APR 2023",
      url: createProcedureUrl("SCEL", "IAC2")
    },
    { 
      type: "IAC",
      name: "IAC3",
      standardName: "ILS Y o LOC Y RWY 17L",
      procedureName: "IAC3",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "IAC3")
    },
    { 
      type: "IAC",
      name: "IAC4",
      standardName: "ILS T o LOC T RWY 17L - Tabla de codificación",
      procedureName: "IAC4",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "IAC4")
    },
    { 
      type: "IAC",
      name: "IAC5",
      standardName: "ILS Y o LOC Y RWY 17R",
      procedureName: "IAC5",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "IAC5")
    },
    { 
      type: "IAC",
      name: "IAC6",
      standardName: "ILS X o LOC X RWY 17L",
      procedureName: "IAC6",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "IAC6")
    },
    { 
      type: "IAC",
      name: "IAC7",
      standardName: "VOR RWY 17L",
      procedureName: "IAC7",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "IAC7")
    },
    { 
      type: "IAC",
      name: "IAC8",
      standardName: "VOR RWY 17R",
      procedureName: "IAC8",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "IAC8")
    },
    { 
      type: "IAC",
      name: "IAC9",
      standardName: "VOR RWY 35R",
      procedureName: "IAC9",
      lastUpdate: "20 APR 2023",
      url: createProcedureUrl("SCEL", "IAC9")
    },
    { 
      type: "IAC",
      name: "IAC10",
      standardName: "VOR RWY 35L",
      procedureName: "IAC10",
      lastUpdate: "20 APR 2023",
      url: createProcedureUrl("SCEL", "IAC10")
    },
    { 
      type: "IAC",
      name: "IAC11",
      standardName: "RNP RWY 17L - Tabla de codificación",
      procedureName: "IAC11",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "IAC11")
    },
    { 
      type: "IAC",
      name: "IAC12",
      standardName: "RNP Z RWY 17R - Tabla de codificación",
      procedureName: "IAC12",
      lastUpdate: "28 NOV 2024",
      url: createProcedureUrl("SCEL", "IAC12")
    },
    { 
      type: "IAC",
      name: "IAC13",
      standardName: "RNP Y RWY 17R - Tabla de codificación",
      procedureName: "IAC13",
      lastUpdate: "16 MAY 2024",
      url: createProcedureUrl("SCEL", "IAC13")
    },
    { 
      type: "IAC",
      name: "IAC14",
      standardName: "RNP RWY 35R - Tabla de codificación",
      procedureName: "IAC14",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "IAC14")
    },
    { 
      type: "IAC",
      name: "IAC15",
      standardName: "RNP RWY 35L - Tabla de codificación",
      procedureName: "IAC15",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "IAC15")
    },
    { 
      type: "IAC",
      name: "IAC16",
      standardName: "RNP X RWY 17L (AR) - Tabla de codificación",
      procedureName: "IAC16",
      lastUpdate: "08 AUG 2024",
      url: createProcedureUrl("SCEL", "IAC16")
    },
    { 
      type: "IAC",
      name: "IAC17",
      standardName: "RNP Z RWY 17R (AR) - Tabla de codificación",
      procedureName: "IAC17",
      lastUpdate: "28 NOV 2024",
      url: createProcedureUrl("SCEL", "IAC17")
    },
    { 
      type: "IAC",
      name: "IAC18",
      standardName: "IAC 18 RNP T RWY 17R (AR) - Tabla de codificación",
      procedureName: "IAC18",
      lastUpdate: "30 NOV 2023",
      url: createProcedureUrl("SCEL", "IAC18")
    },
    { 
      type: "IAC",
      name: "IAC19",
      standardName: "IAC19",
      procedureName: "IAC19",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20IAC19.pdf"
    },
    { 
      type: "IAC",
      name: "IAC20",
      standardName: "IAC20",
      procedureName: "IAC20",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20IAC20.pdf"
    },
    { 
      type: "IAC",
      name: "IAC21",
      standardName: "IAC21",
      procedureName: "IAC21",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20IAC21.pdf"
    },
    { 
      type: "IAC",
      name: "IAC22",
      standardName: "IAC22",
      procedureName: "IAC22",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20IAC22.pdf"
    },
    { 
      type: "IAC",
      name: "IAC23",
      standardName: "IAC23",
      procedureName: "IAC23",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20IAC23.pdf"
    },
    { 
      type: "IAC",
      name: "IAC24",
      standardName: "IAC24",
      procedureName: "IAC24",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20IAC24.pdf"
    },
    { 
      type: "IAC",
      name: "IAC25",
      standardName: "IAC25",
      procedureName: "IAC25",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20IAC25.pdf"
    },
    { 
      type: "IAC",
      name: "IAC26",
      standardName: "IAC26",
      procedureName: "IAC26",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20IAC26.pdf"
    },
    // Other procedures
    { 
      type: "Other",
      name: "Disp Locales",
      standardName: "Disp Locales",
      procedureName: "Disp Locales",
      lastUpdate: "08 AUG 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20Disp%20Locales.pdf"
    },
    { 
      type: "Other",
      name: "Local PROC",
      standardName: "Local PROC",
      procedureName: "Local PROC",
      lastUpdate: "",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20Local%20PROC.pdf"
    },
    { 
      type: "ADC",
      name: "ADC",
      standardName: "ADC",
      procedureName: "ADC",
      lastUpdate: "28 NOV 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20ADC.pdf"
    },
    { 
      type: "ADC",
      name: "ADC RET",
      standardName: "ADC RET",
      procedureName: "ADC RET",
      lastUpdate: "11 AUG 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20ADC%20RET.pdf"
    },
    { 
      type: "Other",
      name: "SMGCS",
      standardName: "SMGCS",
      procedureName: "SMGCS",
      lastUpdate: "28 NOV 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SMGCS%20SCEL.pdf"
    },
    { 
      type: "Other",
      name: "LVP1",
      standardName: "LVP1",
      procedureName: "LVP1",
      lastUpdate: "30 NOV 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20LVP1.pdf"
    },
    { 
      type: "Other",
      name: "LVP2",
      standardName: "LVP2",
      procedureName: "LVP2",
      lastUpdate: "30 NOV 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20LVP2.pdf"
    },
    { 
      type: "Other",
      name: "Procedimientos Especiales",
      standardName: "Procedimientos Especiales",
      procedureName: "Procedimientos Especiales",
      lastUpdate: "03 DEC 2020",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20Proc%20Contingencia.pdf"
    },
    { 
      type: "Other",
      name: "PDC",
      standardName: "PDC",
      procedureName: "PDC",
      lastUpdate: "28 NOV 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20PDC.pdf"
    },
    { 
      type: "Other",
      name: "PDC RET",
      standardName: "PDC RET",
      procedureName: "PDC RET",
      lastUpdate: "28 NOV 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20PDC%20RET.pdf"
    },
    { 
      type: "Other",
      name: "BCAC",
      standardName: "BCAC",
      procedureName: "BCAC",
      lastUpdate: "10 AUG 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20BCAC.pdf"
    },
    { 
      type: "Other",
      name: "BCAC RET",
      standardName: "BCAC RET",
      procedureName: "BCAC RET",
      lastUpdate: "10 AUG 2023",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20BCAC%20RET.pdf"
    },
    { 
      type: "Other",
      name: "ATCSMAC",
      standardName: "ATCSMAC",
      procedureName: "ATCSMAC",
      lastUpdate: "28 NOV 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/MRVAC%20SCEL.pdf"
    },
    { 
      type: "Other",
      name: "VAC",
      standardName: "VAC",
      procedureName: "VAC",
      lastUpdate: "03 DEC 2020",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20VAC.pdf"
    },
    { 
      type: "Other",
      name: "Tabla de coordenadas",
      standardName: "Tabla de coordenadas",
      procedureName: "Tabla de coordenadas",
      lastUpdate: "28 NOV 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCEL/SCEL%20Tabla%20de%20coordenadas.pdf"
    }
  ]

};