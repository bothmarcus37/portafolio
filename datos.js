/* =========================================================
   DATOS DEL PORTAFOLIO
   Este es el único archivo que necesitas editar.
   Cambia los textos entre comillas y guarda; la página se
   actualiza sola al recargar.
   ========================================================= */

const PERFIL = {
  nombre: "Alberto Jiménez Hernández",

  // Tu usuario de GitHub, sin @ ni enlaces.
  // Con esto se arman solos los enlaces "Ver código" y "Abrir demo".
  github: "bothmarcus37",

  // Tu correo de contacto. Déjalo vacío si no quieres mostrarlo.
  correo: "",

  carrera: "Ingeniería en Tecnologías de la Información",
  universidad: "Universidad Politécnica del Valle de Toluca (UPVT)",

  titular: "Aplicaciones web que hablan con APIs reales.",

  presentacion:
    "Soy Alberto Jiménez Hernández, estudiante de Ingeniería en Tecnologías de la Información en la Universidad Politécnica del Valle de Toluca. Aquí están mis proyectos de desarrollo web, con su código y su demo, y el resto de mi trabajo en redes e IoT.",

  sobreMi: [
    "Estudio Ingeniería en Tecnologías de la Información y tengo proyectos en desarrollo web, bases de datos, redes e IoT. He construido aplicaciones con PHP, JavaScript y MySQL, integrado APIs públicas y prototipado dispositivos con ESP32.",
    "Busco prácticas o un primer empleo en tecnología, con interés en computación en la nube y bases de datos.",
  ],

  cursos: [
    "Curso Propedéutico CPFIA, TecNM (constancia de julio de 2026)",
    "Microsoft Azure Fundamentals (AZ-900), en preparación",
  ],

  experiencia: [
    {
      puesto: "Estancia profesional II",
      lugar: "ZooAventuras",
      periodo: "en curso, 240 horas",
      puntos: [
        "Análisis de requerimientos y necesidades de los usuarios para un sistema de reportes de incidencias tecnológicas.",
        "Diseño y modelado de la solución que comunica a los trabajadores con el departamento de sistemas.",
        "Planeación de etapas, tareas y entregables con cronograma y diagrama de Gantt, y seguimiento del avance.",
      ],
    },
    {
      puesto: "Estancia profesional I",
      lugar: "MOY",
      periodo: "240 horas",
      puntos: [
        "Mantenimiento preventivo y correctivo de equipos de cómputo.",
        "Instalación y configuración de software.",
        "Apoyo en el desarrollo de páginas web.",
      ],
    },
  ],

  // Proyectos que no tienen repositorio (redes, IoT, sistemas empresariales).
  otrosProyectos: [
    {
      nombre: "Guante quiropráctico inteligente",
      area: "IoT y sistemas embebidos",
      descripcion:
        "Prototipo de apoyo a la rehabilitación de la mano: mide presión, movimiento y temperatura, y responde con vibración programada.",
      tecnologias: ["ESP32", "Sensores FSR, IMU y NTC", "Motores LRA", "DRV2605L", "DRV8833", "Arduino"],
    },
    {
      nombre: "FoodGuard",
      area: "IoT y sistemas embebidos, en desarrollo",
      descripcion:
        "Sistema embebido para vigilar la conservación de pescado almacenado, alimentado con panel solar.",
      tecnologias: ["ESP32"],
    },
    {
      nombre: "Red empresarial simulada",
      area: "Redes e infraestructura",
      descripcion:
        "Diseño y configuración de una red con dos VLAN, enrutamiento EIGRP, NAT, ACL, DNS, DMZ y servidor Apache, verificada con pruebas de conectividad.",
      tecnologias: ["GNS3", "EIGRP", "VLAN", "NAT", "ACL", "DNS", "Apache"],
    },
    {
      nombre: "Prácticas con Odoo ERP 18",
      area: "Sistemas empresariales",
      descripcion:
        "Configuración, alta de productos, proveedores y clientes, y flujo de compras, ventas y facturación.",
      tecnologias: ["Odoo ERP 18"],
    },
    {
      nombre: "Moon Candy",
      area: "Emprendimiento",
      descripcion:
        "Propuesta de máquina expendedora inteligente conectada a un wearable, con presupuesto de inversión, análisis de costos y presentación comercial.",
      tecnologias: [],
    },
  ],

  habilidades: [
    { area: "Lenguajes", detalle: "HTML, CSS, JavaScript, PHP, Python, C++" },
    { area: "Bases de datos", detalle: "MySQL, MariaDB, SQL Server; diseño de tablas y consultas SQL" },
    { area: "Redes", detalle: "GNS3, EIGRP, VLAN, NAT, ACL, DNS, direccionamiento IP y subnetting" },
    { area: "Seguridad", detalle: "Firewalls, VPN, certificados digitales, DMZ" },
    { area: "Virtualización y servidores", detalle: "VMware, VirtualBox, Vagrant, CentOS, XAMPP, monitoreo con Nagios" },
    { area: "Electrónica e IoT", detalle: "ESP32, Arduino, sensores, motores y controladores, prototipado en protoboard" },
    { area: "Sistemas empresariales", detalle: "Odoo ERP 18" },
    { area: "Herramientas", detalle: "Visual Studio Code, NetBeans, Git y GitHub" },
  ],
};

/* Cada proyecto:
   id       -> nombre corto, sin espacios (se usa en la dirección #id)
   repo     -> nombre EXACTO del repositorio en GitHub
   demo     -> true si funciona en GitHub Pages (solo HTML/CSS/JS).
               Los proyectos con PHP no corren ahí: déjalo en false.
   demoUrl  -> dirección de la demo cuando está en otro servidor
               (para los proyectos con PHP). Ejemplo: "https://misitio.com/tienda/".
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
    demoUrl: "http://albertojimenez.free.nf/travelticket/",
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
      "Explorador de Pokémon sobre PokeAPI, con tipos y estadísticas en español. Carga los resultados por bloques, filtra por tipo y abre una ficha con los datos completos de cada uno.",
    puntos: [
      "Carga de 24 en 24 con botón para traer más, sin recargar la página",
      "Filtro por tipo que consulta a la API y búsqueda por nombre o número",
      "Ficha con descripción, altura, peso, habilidades y estadísticas base",
    ],
    tecnologias: ["JavaScript", "Fetch API", "PokeAPI", "PHP", "CSS"],
    demo: true,
    imagen: "",
    color: "#C8102E",
    tinta: "#FFFFFF",
  },
  {
    id: "pasteleria",
    nombre: "Pastelería Mi Sabor",
    repo: "pasteleria",
    resumen: "Tienda en línea con carrito, cuentas y diseñador 3D",
    descripcion:
      "Tienda en línea para una pastelería: catálogo, carrito de compras, cuentas de usuario, pedidos guardados en MySQL y pago simulado. Incluye un diseñador de pasteles en 3D donde eliges forma, capas, sabor y decoración.",
    puntos: [
      "Cuentas de usuario con contraseñas cifradas (password_hash) y sesiones de PHP",
      "Pedidos guardados con PDO, consultas preparadas y transacciones; el precio se valida en el servidor",
      "Diseñador de pasteles en 3D hecho con Three.js",
    ],
    tecnologias: ["PHP", "MySQL", "JavaScript", "Three.js", "CSS"],
    demo: false,
    demoUrl: "http://albertojimenez.free.nf/pasteleria/",
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
      "Buscador de música con la API de iTunes. Escribes un artista o una canción, escuchas un fragmento en el reproductor y guardas tus favoritas en una biblioteca.",
    puntos: [
      "Búsqueda por artista, canción o álbum",
      "Reproductor fijo con pausa y barra de avance, como en una app de música",
      "Biblioteca de favoritas guardada en el navegador; se adapta a celular",
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
    resumen: "CRUD de clientes con búsqueda y filtros",
    descripcion:
      "Sistema para llevar el control de los clientes de un servicio web: alta, consulta, edición y baja, con el estado de cada uno (pendiente, en desarrollo o finalizado).",
    puntos: [
      "CRUD completo con consultas preparadas y validación en el servidor",
      "Búsqueda por nombre o correo, filtro por estado y resumen de totales",
    ],
    tecnologias: ["PHP", "MySQL", "JavaScript"],
    demo: false,
    demoUrl: "http://albertojimenez.free.nf/clientes/",
    imagen: "",
    color: "#E3E8F4",
    tinta: "#14213D",
  },
];
