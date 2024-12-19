import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const porvenir: Airport = {
  name: "PORVENIR / AD Capitán Fuentes Martínez",
  icao: "SCFM",
  procedures: [
    { 
      type: "IAC",
      name: "IAC1",
      standardName: "IAC 1 VOR RWY09",
      procedureName: "IAC1",
      lastUpdate: "08 agosto 2024",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFM/SCFM%20IAC1.pdf"
    },
    { 
      type: "Other",
      name: "INFO RWY",
      standardName: "INFO RWY",
      procedureName: "INFO RWY",
      lastUpdate: "01 diciembre 2022",
      url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCFM/SCFM%20ADC.pdf"
    }
  ]
};