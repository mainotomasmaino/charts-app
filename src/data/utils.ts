export const createProcedureUrl = (icao: string, name: string) => 
  `http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/${icao}/${icao}%20${name}.pdf`;