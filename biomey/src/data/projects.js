// Categorías disponibles (para filtros o badges)
export const CATEGORIES = {
  WEB: 'Página Web',
  SYSTEM: 'Sistema Web',
  ECOMMERCE: 'E-commerce',
  POS: 'Punto de Venta',
  LANDING: 'Landing Page',
  MOBILE: 'App Móvil', // 👈 Nueva categoría para KaapTerra
};

// Lista de proyectos
export const PROJECTS = [
  {
    id: 1,
    name: 'Punto de Venta — Sneakers',
    category: CATEGORIES.POS,
    location: 'Tapachula, Chiapas',
    description:
      'Sistema de punto de venta para control de inventario, ventas y reportes diarios.',
    image: '/img/projects/pos-1.png',
  },
  {
    id: 2,
    name: 'Sistema para Gimnasio',
    category: CATEGORIES.SYSTEM,
    location: 'Tuxtla Gutierrez, Chiapas',
    description:
      'Control de miembros, pagos, asistencia y rutinas desde una sola plataforma.',
    image: '/img/projects/gym-1.png',
  },
  {
    id: 3,
    name: 'Sistema para Gimnasio',
    category: CATEGORIES.SYSTEM,
    location: 'Villa Comaltitlan, Chiapas',
    description:
      'Gestión de suscripciones, entrenadores y estadísticas de uso en tiempo real.',
    image: '/img/projects/gym-2.png',
  },
  {
    id: 4,
    name: 'Página Web Universitaria',
    category: CATEGORIES.WEB,
    location: 'Suchiapa, Chiapas',
    description:
      'Sitio web institucional con carreras, noticias, admisiones y contacto.',
    image: '/img/projects/universidad.png',
  },
  {
    id: 5,
    name: 'Punto de Venta — Restaurante',
    category: CATEGORIES.POS,
    location: 'Villa Comaltitlan, Chiapas',
    description:
      'Sistema de ventas con comandas, mesas, impresión de tickets y corte de caja.',
    image: '/img/projects/pos-2.png',
  },
  {
    id: 6,
    name: 'Página Web Tenis',
    category: CATEGORIES.WEB,
    location: 'Mexico',
    description:
      'Sitio con streaming en vivo, programación, locutores y contacto directo.',
    image: '/img/projects/radio.png',
  },
  {
    id: 7,
    name: 'Aplicación Web Vial',
    category: CATEGORIES.MOBILE,
    location: 'Monterrey, Nuevo León',
    description:
      'Plataforma para reporte y seguimiento de incidentes viales en tiempo real.',
    image: '/img/projects/vial.png',
  },
  // 👇 NUEVO PROYECTO: KaapTerra
  {
    id: 8,
    name: 'KaapTerra — Trazabilidad de Café',
    category: CATEGORIES.MOBILE,
    location: 'Chiapas, México',
    description:
      'App móvil para monitorear el desempeño del café, cuidar los terrenos y comercializar lotes con trazabilidad total. Incluye mapas GPS, bitácora de cultivo, historial completo y conexión directa entre compradores y vendedores.',
    image: '/img/projects/kaapterra.png', // Asegúrate de guardar la imagen con este nombre
  },
];