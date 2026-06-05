// ============================================================
// CENTURY 21 SEVEN — DATA
// Editá este archivo para actualizar propiedades y asesores
// ============================================================

const ASESORES = [
  { id: 1, nombre: "Diego Rojas", rol: "Broker", iniciales: "DR", tel: "+595981800232", props: 12 },
  { id: 2, nombre: "Sonia Garcia", rol: "Asesora", iniciales: "SG", tel: "+595971561916", props: 8 },
  { id: 3, nombre: "Tatiana Solalinde", rol: "Asesora", iniciales: "TS", tel: "+595981414956", props: 6 },
  { id: 4, nombre: "Romina Chaparro", rol: "Asesora", iniciales: "RC", tel: "+595972688062", props: 9 },
  { id: 5, nombre: "Lourdes Castiñeira", rol: "Asesora", iniciales: "LC", tel: "+595971115748", props: 5 },
  { id: 6, nombre: "Maira Lovera", rol: "Asesora", iniciales: "ML", tel: "+595962109130", props: 4 },
  { id: 7, nombre: "Fanny Vera", rol: "Asesora", iniciales: "FV", tel: "+595982276045", props: 3 },
  { id: 8, nombre: "Luis López", rol: "Asesor", iniciales: "LL", tel: "+595981874605", props: 6 },
  { id: 9, nombre: "Nolberto Alema", rol: "Asesor", iniciales: "NA", tel: "+595983363228", props: 5 },
  { id: 10, nombre: "Antonia Bogado", rol: "Asesora", iniciales: "AB", tel: "+595981260846", props: 4 },
];

const PROPIEDADES = [
  {
    id: 1, asesorId: 1,
    titulo: "Terreno en Luque a metros de Ruta Elizardo Aquino",
    tipo: "terreno", operacion: "venta",
    precio: 300000000, moneda: "PYG",
    zona: "Luque", barrio: "Cuarto Barrio",
    dormitorios: null, banos: null, metros: 337,
    descripcion: "Terreno estratégicamente ubicado a minutos de CONMEBOL, Aeropuerto Internacional Silvio Pettirossi y Parque Ñu Guasu. Zona con alta demanda para vivienda familiar, construcción de dúplex para renta y desarrollo inmobiliario. Amurallado, servicios disponibles y apto crédito.",
    fotos: ["https://cdn.21online.lat/paraguay/cache/awsTest1/rc/Ftpno2Gt/uploads/54/propiedades/50038/6a22c2f61bd33.jpg"],
    destacada: true
  },
  {
    id: 2, asesorId: 2,
    titulo: "Departamento amoblado de 3 dormitorios en Insignia City",
    tipo: "departamento", operacion: "alquiler",
    precio: 1250, moneda: "USD",
    zona: "Asunción", barrio: "Mcal. Estigarribia",
    dormitorios: 3, banos: 2, metros: 80,
    descripcion: "Departamento amoblado con 3 dormitorios (uno en suite), sala, comedor, cocina, balcón con parrilla y 1 cochera. Amenities: quincho climatizado, piscina, gimnasio y guardia 24hs.",
    fotos: ["https://cdn.21online.lat/paraguay/cache/awsTest1/rc/7vGa2de9/uploads/52/propiedades/50035/6a221d6bd02ce.jpg"],
    destacada: true
  },
  {
    id: 3, asesorId: 4,
    titulo: "Dúplex exclusivo amoblado y equipado — Condominio Arapoty",
    tipo: "casa", operacion: "venta",
    precio: 215000, moneda: "USD",
    zona: "Mariano Roque Alonso", barrio: "Condominio Arapoty",
    dormitorios: 3, banos: 2, metros: 177,
    descripcion: "Dúplex totalmente amoblado y equipado en barrio cerrado. Muebles a medida, living amplio, cocina equipada, garaje para 2 vehículos, quincho cerrado climatizado con parrilla, patio privado y piscina. Suite principal con balcón. Acceso controlado, calles asfaltadas, canchas deportivas.",
    fotos: ["https://cdn.21online.lat/paraguay/cache/awsTest1/rc/VNIyMjXe/uploads/38/propiedades/50031/6a21db3f289da.jpg"],
    destacada: true
  },
  {
    id: 4, asesorId: 3,
    titulo: "Departamento monoambiente en pozo — Edificio Sunset Santa Teresa",
    tipo: "departamento", operacion: "venta",
    precio: 54475, moneda: "USD",
    zona: "Asunción", barrio: "Ycuá Satí",
    dormitorios: 1, banos: 1, metros: 27,
    descripcion: "Departamento en pozo en Edificio Sunset Santa Teresa, a metros de Avda. Santa Teresa y a 4 min del Shopping del Sol. Edificio de 10 pisos con piscina, quincho climatizado, solarium y gym. Muebles de cocina, climatización, cerradura biométrica y amplios balcones. Financiación hasta 24 meses sin interés. Entrega 2028.",
    fotos: ["https://cdn.21online.lat/paraguay/cache/awsTest1/rc/BSLcCgaa/uploads/54/propiedades/50030/6a21d33b3f63b.jpg"],
    destacada: false
  },
];
