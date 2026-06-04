# Century 21 Seven — Portal Inmobiliario

Portal web corporativo para Century 21 Seven, Fernando de la Mora, Paraguay.

## Estructura

```
c21-seven/
├── index.html          # Página principal (todo en uno)
├── assets/
│   ├── styles.css      # Estilos
│   └── app.js          # Lógica
├── data/
│   └── data.js         # ← EDITAR AQUÍ: propiedades y asesores
└── README.md
```

## Deploy en Vercel

1. Subir esta carpeta a un repositorio GitHub
2. Ir a vercel.com → New Project → importar el repo
3. Vercel detecta automáticamente que es un sitio estático
4. Deploy listo — sin configuración adicional

## Cómo cargar propiedades reales

Editar el archivo `data/data.js`. Cada propiedad tiene esta estructura:

```js
{
  id: 11,                          // número único, incrementar
  asesorId: 1,                     // ID del asesor asignado
  titulo: "Nombre de la propiedad",
  tipo: "casa",                    // casa | departamento | local | oficina | terreno | galpon
  operacion: "venta",              // venta | alquiler
  precio: 850000000,               // número sin puntos ni comas
  moneda: "PYG",                   // PYG (guaraníes) | USD
  zona: "Fernando de la Mora",
  barrio: "Villa del Maestro",
  dormitorios: 3,                  // null si no aplica
  banos: 2,                        // null si no aplica
  metros: 180,
  descripcion: "Descripción larga de la propiedad.",
  fotos: ["ruta/a/foto.jpg"],      // dejar [] si no hay fotos aún
  destacada: true                  // true = aparece en home
}
```

## Cómo agregar fotos

1. Crear carpeta `assets/fotos/` en el repo
2. Subir imágenes (JPG/WebP, máx 300kb recomendado)
3. En data.js, agregar la ruta: `fotos: ["assets/fotos/prop-11.jpg"]`

## Contacto técnico

Desarrollado por [Tu agencia] para Century 21 Seven.
