// Dibuja el portafolio a partir de datos.js. No hace falta editar este archivo.
(() => {
  const $ = id => document.getElementById(id);
  const usuario = (PERFIL.github || "").trim().replace(/^@/, "");
  const perfilGitHub = usuario ? `https://github.com/${usuario}` : "";

  // Crea un elemento con texto seguro (sin interpretar HTML de los datos)
  function el(etiqueta, clase, texto) {
    const nodo = document.createElement(etiqueta);
    if (clase) nodo.className = clase;
    if (texto != null) nodo.textContent = texto;
    return nodo;
  }

  function enlace(texto, href, clase) {
    const a = el("a", clase, texto);
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  // ---------- Cabecera y portada ----------
  document.title = `${PERFIL.nombre} · Portafolio`;
  $("marca").textContent = PERFIL.nombre;
  $("titular").textContent = PERFIL.titular;
  $("presentacion").textContent = PERFIL.presentacion;
  $("indice-ruta").textContent = `Índice de /${usuario || "proyectos"}`;

  // ---------- Aviso mientras falte el usuario de GitHub ----------
  if (!usuario) {
    const aviso = $("aviso");
    aviso.hidden = false;
    aviso.append(
      "Falta tu usuario de GitHub. Abre ",
      el("code", null, "datos.js"),
      ", escríbelo en ",
      el("code", null, "github"),
      " y los enlaces de código y demo se activan solos."
    );
  }

  // ---------- Índice ----------
  const filas = $("indice-filas");
  PROYECTOS.forEach(p => {
    const tr = el("tr");
    const nombre = el("td", "col-nombre");
    nombre.append(enlace(`${p.id}/`, `#${p.id}`));
    tr.append(nombre, el("td", "col-que", p.resumen), el("td", "col-tec", p.tecnologias.slice(0, 3).join(", ")));
    tr.addEventListener("click", e => { if (e.target.tagName !== "A") location.hash = p.id; });
    filas.append(tr);
  });

  // ---------- Fichas de proyecto ----------
  const lista = $("proyectos");
  PROYECTOS.forEach(p => {
    const art = el("article", "proyecto");
    art.id = p.id;

    // Portada: captura si existe, si no una portada de color con el nombre
    const portada = el("div", "portada-proyecto");
    portada.style.setProperty("--fondo", p.color);
    portada.style.setProperty("--tinta", p.tinta);
    portada.append(el("span", "portada-nombre", p.nombre));
    if (p.imagen) {
      const img = el("img");
      img.src = p.imagen;
      img.alt = `Captura de pantalla de ${p.nombre}`;
      img.loading = "lazy";
      img.addEventListener("error", () => img.remove()); // si falta el archivo queda la portada de color
      portada.append(img);
    }

    const texto = el("div", "proyecto-texto");
    texto.append(el("h2", null, p.nombre), el("p", "proyecto-desc", p.descripcion));

    const puntos = el("ul", "puntos");
    p.puntos.forEach(t => puntos.append(el("li", null, t)));
    texto.append(puntos);

    const chips = el("ul", "chips");
    p.tecnologias.forEach(t => chips.append(el("li", null, t)));
    texto.append(chips);

    const acciones = el("div", "acciones");
    // La demo puede estar en GitHub Pages (demo: true) o en otro servidor (demoUrl)
    const demo = p.demoUrl || (p.demo && usuario ? `https://${usuario}.github.io/${p.repo}/` : "");

    if (usuario) {
      acciones.append(enlace("Ver código", `${perfilGitHub}/${p.repo}`, "boton"));
    } else {
      acciones.append(el("span", "boton boton-apagado", "Ver código"));
    }
    if (demo) {
      acciones.append(enlace("Abrir demo", demo, "boton boton-claro"));
    } else if (p.demo) {
      acciones.append(el("span", "boton boton-claro boton-apagado", "Abrir demo"));
    } else {
      acciones.append(el("span", "nota", "Usa PHP: se prueba en un servidor local como XAMPP."));
    }
    texto.append(acciones);

    art.append(portada, texto);
    lista.append(art);
  });

  // ---------- Más proyectos y experiencia (misma forma: título, detalle y texto) ----------
  function fila(titulo, detalle, descripcion, puntos, etiquetas) {
    const art = el("article", "fila");
    const cabeza = el("div", "fila-cabeza");
    cabeza.append(el("h3", null, titulo));
    if (detalle) cabeza.append(el("p", "fila-detalle", detalle));
    const cuerpo = el("div", "fila-cuerpo");
    if (descripcion) cuerpo.append(el("p", null, descripcion));
    if (puntos && puntos.length) {
      const ul = el("ul", "puntos");
      puntos.forEach(t => ul.append(el("li", null, t)));
      cuerpo.append(ul);
    }
    if (etiquetas && etiquetas.length) {
      const chips = el("ul", "chips");
      etiquetas.forEach(t => chips.append(el("li", null, t)));
      cuerpo.append(chips);
    }
    art.append(cabeza, cuerpo);
    return art;
  }

  (PERFIL.otrosProyectos || []).forEach(p =>
    $("otros-proyectos").append(fila(p.nombre, p.area, p.descripcion, null, p.tecnologias)));
  $("mas-proyectos").hidden = !(PERFIL.otrosProyectos || []).length;

  (PERFIL.experiencia || []).forEach(x =>
    $("experiencia-lista").append(fila(x.puesto, [x.lugar, x.periodo].filter(Boolean).join(", "), null, x.puntos)));
  $("experiencia").hidden = !(PERFIL.experiencia || []).length;

  // ---------- Sobre mí ----------
  PERFIL.sobreMi.forEach(parrafo => $("sobre-texto").append(el("p", null, parrafo)));

  const formacion = $("formacion");
  if (PERFIL.carrera) formacion.append(el("p", "formacion-carrera", PERFIL.carrera));
  if (PERFIL.universidad) formacion.append(el("p", null, PERFIL.universidad));
  (PERFIL.cursos || []).forEach(c => formacion.append(el("p", "formacion-curso", c)));

  (PERFIL.habilidades || []).forEach(h => {
    const tr = el("tr");
    const th = el("th", null, h.area);
    th.scope = "row";
    tr.append(th, el("td", null, h.detalle));
    $("habilidades").append(tr);
  });

  // ---------- Contacto ----------
  const correo = (PERFIL.correo || "").trim();
  const contacto = $("contacto-enlaces");
  if (correo) contacto.append(enlace(correo, `mailto:${correo}`, "boton"));
  if (usuario) contacto.append(enlace(`github.com/${usuario}`, perfilGitHub, "boton boton-claro"));
  $("contacto-texto").textContent = correo || usuario
    ? "¿Quieres ver más de mi trabajo o platicar de un proyecto? Escríbeme."
    : "Agrega tu correo y tu usuario de GitHub en datos.js para que aparezcan aquí.";

  $("pie-texto").textContent = `${PERFIL.nombre}, ${new Date().getFullYear()}. Hecho con HTML, CSS y JavaScript.`;
})();
