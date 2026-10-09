/* =========================================================
   DATOS DEL PORTAFOLIO
   Este es el único archivo que necesitas editar.
   Cambia los textos entre comillas y guarda; la página se
   actualiza sola al recargar.
   ========================================================= */

const PERFIL = {
  nombre: "Alberto Jiménez",

  // Tu usuario de GitHub, sin @ ni enlaces. Ejemplo: "albertojimenez"
  // Con esto se arman solos los enlaces "Ver código" y "Abrir demo".
  github: "bothmarcus37",

  // Tu correo de contacto. Déjalo vacío si no quieres mostrarlo.
  correo: "",

  titular: "Aplicaciones web que hablan con APIs reales.",

  presentacion:
    "Soy Alberto Jiménez, programador. Aquí están los proyectos que he construido con JavaScript y PHP: qué hace cada uno, con qué está hecho y dónde ver su código.",

  sobreMi: [
    "Casi todo lo que construyo parte de la misma idea: tomar datos de una API pública y convertirlos en algo que se pueda usar, ya sea un catálogo de películas, una Pokédex o un ticket de viaje en PDF.",
    "Trabajo el front con HTML, CSS y JavaScript sin frameworks, y el lado del servidor con PHP y MySQL sobre XAMPP.",
  ],

  // Solo tecnologías que aparecen en los proyectos de abajo.
  tecnologias: [
    "HTML", "CSS", "JavaScript", "Fetch API", "PHP", "MySQL",
    "Bootstrap 5", "Leaflet", "jsPDF", "Three.js",
  ],
};

/* Cada proyecto:
   id       -> nombre corto, sin espacios (se usa en la dirección #id)
   repo     -> nombre EXACTO del repositorio en GitHub
   demo     -> true si funciona en GitHub Pages (solo HTML/CSS/JS).
               Los proyectos con PHP no corren ahí: déjalo en false.
   imagen   -> captura de pantalla, por ejemplo "img/netflix.jpg".
               Si lo dejas vacío se muestra una portada de color.
   color / tinta -> colores de esa portada.                              */

const PROYECTOS = [
  {
    id: "netflix",
    nombre: "Clon de Netflix",
    repo: "clon-netflix",
    resumen: "Catálogo de películas y series con tráilers",
    descripcion:
      "Catálogo de películas y series que se llena con datos de TMDB. Tiene filas por categoría, un Top 10, buscador y una ficha por título que reproduce el tráiler oficial.",
    puntos: [
      "Vistas de Inicio, Series, Películas y Novedades con rutas en la dirección (#/series, #/movie/123)",
      "Ficha con tráiler de YouTube, reparto y títulos recomendados en una sola petición",
      "Búsqueda combinada de películas y series, en español de México",
    ],
    tecnologias: ["JavaScript", "Fetch API", "TMDB API", "CSS"],
    demo: true,
    imagen: "",
    color: "#141414",
    tinta: "#E5484D",
  },
  {
    id: "travelticket",
    nombre: "TravelTicket",
    repo: "travelticket",
    resumen: "Consulta un destino y emite el ticket en PDF",
    descripcion:
      "Buscas un país o una ciudad y la aplicación reúne su información general, el clima actual, el costo del viaje en otras monedas y su ubicación en el mapa. Al final genera el ticket de reserva en PDF.",
    puntos: [
      "Cuatro servicios en una pantalla: REST Countries, Open-Meteo, ExchangeRate-API y OpenStreetMap",
      "La clave de API vive en un proxy de PHP, así el navegador nunca la ve",
      "Formulario de reserva validado y ticket PDF generado con jsPDF",
    ],
    tecnologias: ["JavaScript", "PHP", "Bootstrap 5", "Leaflet", "jsPDF"],
    demo: false,
    imagen: "img/travelticket.jpg",
    color: "#12263F",
    tinta: "#F5A623",
  },
  {
    id: "pokedex",
    nombre: "Pokédex interactiva",
    repo: "pokedex",
    resumen: "Explorador de Pokémon con filtros y fichas",
    descripcion:
      "Explorador de Pokémon sobre PokeAPI. Carga los resultados por bloques, filtra por tipo y abre una ficha con los datos completos de cada uno.",
    puntos: [
      "Carga de 24 en 24 con botón para traer más, sin recargar la página",
      "Filtro por tipo y búsqueda por nombre o número",
      "Ficha con descripción, altura, peso, habilidades y estadísticas base",
    ],
    tecnologias: ["JavaScript", "Fetch API", "PokeAPI", "PHP", "CSS"],
    demo: false,
    imagen: "",
    color: "#C8102E",
    tinta: "#FFFFFF",
  },
  {
    id: "pasteleria",
    nombre: "Pastelería Mi Sabor",
    repo: "pasteleria",
    resumen: "Tienda en línea con carrito, cuentas y pastel en 3D",
    descripcion:
      "Tienda en línea para una pastelería: catálogo, carrito de compras, registro e inicio de sesión, y pedidos guardados en MySQL. Incluye un pastel en 3D que se puede girar con el ratón.",
    puntos: [
      "Cuentas de usuario con contraseñas cifradas (password_hash) y sesiones de PHP",
      "Pedidos y su detalle guardados con PDO y consultas preparadas",
      "Modelo 3D del pastel cargado con Three.js",
    ],
    tecnologias: ["PHP", "MySQL", "JavaScript", "Three.js", "CSS"],
    demo: false,
    imagen: "",
    color: "#F6C6D0",
    tinta: "#5A1E2E",
  },
  {
    id: "spotify",
    nombre: "Clon de Spotify",
    repo: "spotify-clone",
    resumen: "Buscador de música con fragmentos de audio",
    descripcion:
      "Buscador de música con la API de iTunes. Escribes un artista o una canción y muestra las portadas, el álbum y un fragmento de audio para escuchar.",
    puntos: [
      "Búsqueda por artista o canción con 20 resultados",
      "Portadas en alta resolución y reproductor de audio en cada tarjeta",
      "Mensajes claros cuando no hay resultados o falla la conexión",
    ],
    tecnologias: ["JavaScript", "Fetch API", "iTunes Search API", "CSS"],
    demo: true,
    imagen: "",
    color: "#121212",
    tinta: "#1ED760",
  },
  {
    id: "clientes",
    nombre: "Registro de clientes",
    repo: "sistema-crud",
    resumen: "Alta y consulta de clientes en MySQL",
    descripcion:
      "Sistema sencillo para registrar a los clientes de un servicio web y consultar en qué estado va cada uno: pendiente, en desarrollo o finalizado.",
    puntos: [
      "Formulario de alta con validación en JavaScript",
      "Tabla de clientes leída desde MySQL",
    ],
    tecnologias: ["PHP", "MySQL", "JavaScript"],
    demo: false,
    imagen: "",
    color: "#E3E8F4",
    tinta: "#14213D",
  },
];
