import { Airport } from '../../../types/airport';
import { createProcedureUrl } from '../../utils';

export const villarrica: Airport = {
  name: "VILLARRICA / AD Villarrica",
  icao: "SCVI",
  procedures: [
{
  type: "VDRC",
  name: "VDRC N",
  standardName: "VDRC N",
  procedureName: "VDRC N",
  lastUpdate: "16 mayo 2024",
  url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVI/SCVI%20VDRC%20N.pdf"
},
{
  type: "VDRC",
  name: "VDRC S",
  standardName: "VDRC S",
  procedureName: "VDRC S",
  lastUpdate: "",
  url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVI/SCVI%20VDRC%20S.pdf"
},
{
  type: "IAC",
  name: "IAC1",
  standardName: "IAC 1 RNP RWY15 (LNAV only)",
  procedureName: "IAC1",
  lastUpdate: "28 noviembre 2024",
  url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVI/SCVI%20IAC1.pdf"
},
{
  type: "INFO RWY",
  name: "INFO RWY",
  standardName: "INFO RWY",
  procedureName: "INFO RWY",
  lastUpdate: "20 abril 2023",
  url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVI/SCVI%20ADC.pdf"
},
{
  type: "IAC",
  name: "IAC2",
  standardName: "IAC 2 RNP RWY33 (LNAV only)",
  procedureName: "IAC2",
  lastUpdate: "28 noviembre 2024",
  url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVI/SCVI%20IAC2.pdf"
},
{
  type: "COND ESPEC IFR",
  name: "COND ESPEC IFR",
  standardName: "CONDICIONES ESPECIALES",
  procedureName: "CONDICIONES ESPECIALES",
  lastUpdate: "01 diciembre 2022",
  url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVI/SCVI%20COND%20ESP%20IFR.pdf"
},
{
  type: "Tabla de coordenadas",
  name: "Tabla de coordenadas",
  standardName: "Lista de coordenadas",
  procedureName: "Lista de coordenadas",
  lastUpdate: "16 mayo 2024",
  url: "http://aipchile.dgac.gob.cl/dasa/aip_chile_con_contenido/aipmap/SCVI/SCVI%20Tabla%20de%20coordenadas.pdf"
}

  ]
};