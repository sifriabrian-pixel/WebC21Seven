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
    titulo: "Casa residencial amplia con jardín",
    tipo: "casa", operacion: "venta",
    precio: 850000000, moneda: "PYG",
    zona: "Fernando de la Mora", barrio: "Villa del Maestro",
    dormitorios: 3, banos: 2, metros: 180,
    descripcion: "Hermosa casa con amplio jardín, garage para 2 autos, cocina equipada y excelente iluminación natural. Ideal para familia.",
    fotos: [],
    destacada: true
  },
  {
    id: 2, asesorId: 2,
    titulo: "Departamento moderno en planta alta",
    tipo: "departamento", operacion: "alquiler",
    precio: 3500000, moneda: "PYG",
    zona: "Asunción", barrio: "Villa Morra",
    dormitorios: 2, banos: 1, metros: 85,
    descripcion: "Departamento con vista privilegiada, cocina americana, seguridad 24hs y acceso a gimnasio compartido.",
    fotos: [],
    destacada: true
  },
  {
    id: 3, asesorId: 4,
    titulo: "Local comercial en zona céntrica",
    tipo: "local", operacion: "venta",
    precio: 1800000000, moneda: "PYG",
    zona: "Fernando de la Mora", barrio: "Centro",
    dormitorios: null, banos: 1, metros: 240,
    descripcion: "Local de alto tráfico peatonal con frente amplio, depósito trasero y estacionamiento propio. Excelente para comercio.",
    fotos: [],
    destacada: true
  },
  {
    id: 4, asesorId: 3,
    titulo: "Casa familiar con piscina",
    tipo: "casa", operacion: "venta",
    precio: 1200000000, moneda: "PYG",
    zona: "Fernando de la Mora", barrio: "San Pablo",
    dormitorios: 4, banos: 3, metros: 260,
    descripcion: "Casa de lujo con piscina, quincho, 4 dormitorios con baño propio y garage para 3 vehículos.",
    fotos: [],
    destacada: false
  },
  {
    id: 5, asesorId: 8,
    titulo: "Terreno esquinero en zona residencial",
    tipo: "terreno", operacion: "venta",
    precio: 420000000, moneda: "PYG",
    zona: "Fernando de la Mora", barrio: "Mcal. López",
    dormitorios: null, banos: null, metros: 600,
    descripcion: "Terreno plano, esquinero, con todos los servicios. Ideal para construcción residencial o inversión.",
    fotos: [],
    destacada: false
  },
  {
    id: 6, asesorId: 5,
    titulo: "Oficina ejecutiva en edificio corporativo",
    tipo: "oficina", operacion: "alquiler",
    precio: 5500000, moneda: "PYG",
    zona: "Asunción", barrio: "Carmelitas",
    dormitorios: null, banos: 1, metros: 65,
    descripcion: "Oficina en edificio corporativo con recepción, sala de reuniones compartida, seguridad y estacionamiento.",
    fotos: [],
    destacada: false
  },
  {
    id: 7, asesorId: 6,
    titulo: "Departamento de 1 dormitorio",
    tipo: "departamento", operacion: "alquiler",
    precio: 2200000, moneda: "PYG",
    zona: "Fernando de la Mora", barrio: "Centro",
    dormitorios: 1, banos: 1, metros: 48,
    descripcion: "Departamento compacto ideal para profesionales. Edificio con portero y estacionamiento disponible.",
    fotos: [],
    destacada: false
  },
  {
    id: 8, asesorId: 1,
    titulo: "Casa con local comercial en planta baja",
    tipo: "casa", operacion: "venta",
    precio: 980000000, moneda: "PYG",
    zona: "Fernando de la Mora", barrio: "Villa del Maestro",
    dormitorios: 3, banos: 2, metros: 200,
    descripcion: "Propiedad mixta con casa en planta alta y local comercial en planta baja. Doble renta potencial.",
    fotos: [],
    destacada: false
  },
  {
    id: 9, asesorId: 9,
    titulo: "Galpón industrial con oficinas",
    tipo: "galpon", operacion: "alquiler",
    precio: 12000000, moneda: "PYG",
    zona: "Fernando de la Mora", barrio: "Industrial",
    dormitorios: null, banos: 2, metros: 800,
    descripcion: "Galpón con altura libre de 6m, oficinas administrativas, baños industriales y acceso para camiones.",
    fotos: [],
    destacada: false
  },
  {
    id: 10, asesorId: 7,
    titulo: "Terreno en barrio cerrado",
    tipo: "terreno", operacion: "venta",
    precio: 680000000, moneda: "PYG",
    zona: "Fernando de la Mora", barrio: "Los Laureles",
    dormitorios: null, banos: null, metros: 450,
    descripcion: "Terreno en barrio cerrado con seguridad privada, áreas verdes y acceso pavimentado. Servicios completos.",
    fotos: [],
    destacada: false
  },
];
