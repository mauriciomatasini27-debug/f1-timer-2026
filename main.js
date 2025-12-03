let carreraActual;
const temporada2026 = [
  {
    id: 1,
    nombre: "Gran Premio de Australia",
    circuito: "Albert Park Circuit",
    fecha: "2026-03-08T04:00:00Z",
    imagen: "assets/flags/Australia.svg.png", // Usando Australia.png
  },
  {
    id: 2,
    nombre: "Gran Premio de China",
    circuito: "Shanghai International Circuit",
    fecha: "2026-03-15T07:00:00Z",
    imagen: "assets/flags/China.svg.png", // Usando China.png
  },
  {
    id: 3,
    nombre: "Gran Premio de Japón",
    circuito: "Suzuka International Racing Course",
    fecha: "2026-03-29T05:00:00Z",
    imagen: "assets/flags/Japon.svg.png", // Usando Japon.png
  },
  {
    id: 4,
    nombre: "Gran Premio de Baréin",
    circuito: "Bahrain International Circuit",
    fecha: "2026-04-12T14:00:00Z",
    imagen: "assets/flags/Bahrain.svg.png", // Usando Bahrain.png
  },
  {
    id: 5,
    nombre: "Gran Premio de Arabia Saudita",
    circuito: "Jeddah Corniche Circuit",
    fecha: "2026-04-19T17:00:00Z",
    imagen: "assets/flags/ArabiaSaudita.svg.png", // Usando ArabiaSaudita.png
  },
  {
    id: 6,
    nombre: "Gran Premio de Miami",
    circuito: "Miami International Autodrome",
    fecha: "2026-05-03T19:30:00Z",
    imagen: "assets/flags/EstadosUnidos.svg.png", // Usando EstadosUnidos.png
  },
  {
    id: 7,
    nombre: "Gran Premio de Canadá",
    circuito: "Circuit Gilles Villeneuve",
    fecha: "2026-05-24T18:00:00Z",
    imagen: "assets/flags/Canada.svg.png", // Usando Canada.png
  },
  {
    id: 8,
    nombre: "Gran Premio de Mónaco",
    circuito: "Circuit de Monaco",
    fecha: "2026-06-07T13:00:00Z",
    imagen: "assets/flags/Monaco.svg.png", // Usando Monaco.png
  },
  {
    id: 9,
    nombre: "Gran Premio de España",
    circuito: "Circuit de Barcelona-Catalunya",
    fecha: "2026-06-14T13:00:00Z",
    imagen: "assets/flags/España.svg.png", // Usando España.png
  },
  {
    id: 10,
    nombre: "Gran Premio de Austria",
    circuito: "Red Bull Ring",
    fecha: "2026-06-28T13:00:00Z",
    imagen: "assets/flags/Austria.svg.png", // Usando Austria.png
  },
  {
    id: 11,
    nombre: "Gran Premio de Gran Bretaña",
    circuito: "Silverstone Circuit",
    fecha: "2026-07-05T14:00:00Z",
    imagen: "assets/flags/GranBretaña.svg.png", // Usando GranBretaña.png
  },
  {
    id: 12,
    nombre: "Gran Premio de Bélgica",
    circuito: "Circuit de Spa-Francorchamps",
    fecha: "2026-07-19T13:00:00Z",
    imagen: "assets/flags/Belgica.svg.png", // Usando Belgica.png
  },
  {
    id: 13,
    nombre: "Gran Premio de Hungría",
    circuito: "Hungaroring",
    fecha: "2026-07-26T13:00:00Z",
    imagen: "assets/flags/Hungria.svg.png", // Usando Hungria.png
  },
  {
    id: 14,
    nombre: "Gran Premio de Países Bajos",
    circuito: "Circuit Zandvoort",
    fecha: "2026-08-23T13:00:00Z",
    imagen: "assets/flags/Netherlands.svg.png", // Usando Netherlands.png
  },
  {
    id: 15,
    nombre: "Gran Premio de Italia",
    circuito: "Autodromo Nazionale Monza",
    fecha: "2026-09-06T13:00:00Z",
    imagen: "assets/flags/Italia.svg.png", // Usando Italia.png
  },
  {
    id: 16,
    nombre: "Gran Premio de España (Madrid)",
    circuito: "Nuevo Circuito de Madrid",
    fecha: "2026-09-13T13:00:00Z",
    imagen: "assets/flags/España.svg.png", // Usando España.png
  },
  {
    id: 17,
    nombre: "Gran Premio de Azerbaiyán",
    circuito: "Baku City Circuit",
    fecha: "2026-09-26T11:00:00Z",
    imagen: "assets/flags/Azerbaijan.svg.png", // Usando Azerbaijan.png
  },
  {
    id: 18,
    nombre: "Gran Premio de Singapur",
    circuito: "Marina Bay Street Circuit",
    fecha: "2026-10-11T12:00:00Z",
    imagen: "assets/flags/Singapore.svg.png", // Usando Singapore.png
  },
  {
    id: 19,
    nombre: "Gran Premio de Estados Unidos (Austin)",
    circuito: "Circuit of the Americas (COTA)",
    fecha: "2026-10-25T19:00:00Z",
    imagen: "assets/flags/EstadosUnidos.svg.png", // Usando EstadosUnidos.png
  },
  {
    id: 20,
    nombre: "Gran Premio de Ciudad de México",
    circuito: "Autódromo Hermanos Rodríguez",
    fecha: "2026-11-01T19:00:00Z",
    imagen: "assets/flags/Mexico.svg.png", // Usando Mexico.png
  },
  {
    id: 21,
    nombre: "Gran Premio de São Paulo (Brasil)",
    circuito: "Autódromo José Carlos Pace (Interlagos)",
    fecha: "2026-11-08T17:00:00Z",
    imagen: "assets/flags/Brasil.svg.png", // Usando Brasil.png
  },
  {
    id: 22,
    nombre: "Gran Premio de Las Vegas",
    circuito: "Las Vegas Strip Circuit",
    fecha: "2026-11-22T06:00:00Z",
    imagen: "assets/flags/EstadosUnidos.svg.png", // Usando EstadosUnidos.png
  },
  {
    id: 23,
    nombre: "Gran Premio de Qatar",
    circuito: "Lusail International Circuit",
    fecha: "2026-11-29T15:00:00Z",
    imagen: "assets/flags/Qatar.svg.png", // Usando Qatar.png
  },
  {
    id: 24,
    nombre: "Gran Premio de Abu Dabi",
    circuito: "Yas Marina Circuit",
    fecha: "2026-12-06T13:00:00Z",
    imagen: "assets/flags/Abu_Dhabi.svg.png", // Usando Abu_Dhabi.png
  },
];

function calcularTiempoRestante(fechaFuturo) {
  const ahora = new Date();
  const destino = new Date(fechaFuturo);
  let diferencia = destino - ahora;
  return diferencia;
}

console.log(calcularTiempoRestante(temporada2026[0].fecha));

function convertirMilisegundos(milisegundos) {
  // 1 segundo = 1000 milisegundos
  // 1 minuto = 60 segundos
  // 1 hora = 60 minutos
  // 1 día = 24 horas

  const segundos = Math.floor(milisegundos / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  // El operador % (módulo) nos da "lo que sobra" de la división
  // Ejemplo: Si tengo 65 segundos, son 1 minuto y ME SOBRAN 5 segundos.
  const segundosRestantes = segundos % 60;
  const minutosRestantes = minutos % 60;
  const horasRestantes = horas % 24;

  // Devolvemos un objeto ordenado
  return {
    dias: dias,
    horas: horasRestantes,
    minutos: minutosRestantes,
    segundos: segundosRestantes,
  };
}
// 1. Calculamos la diferencia
let diferencia = calcularTiempoRestante(temporada2026[0].fecha);

// 2. Convertimos esa diferencia a algo legible
let tiempoLegible = convertirMilisegundos(diferencia);

// 3. Mostramos el resultado
console.log(tiempoLegible);

function renderizarCuentaRegresiva(carrera) {
  // 1. Nombre de carrera
  document.getElementById("nombre-carrera").innerText = carrera.nombre;
  // ... (código anterior de nombre y bandera) ...
  document.getElementById("bandera-pais").src = carrera.imagen;

  // === NUEVOS DATOS TÉCNICOS ===
  document.getElementById("nombre-circuito").innerText = carrera.circuito;
  // 1. Convertimos la cadena UTC en un objeto Date.
  const fechaUTC = new Date(carrera.fecha);

  // 2. Formateamos la fecha y hora para el usuario.
  const opcionesFormato = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short", // Muestra la zona horaria del usuario (ej: GMT-3, CEST)
  };
  // 3. Obtenemos la fecha formateada en el idioma y zona horaria del usuario.
  const fechaFormateada = fechaUTC.toLocaleTimeString(
    navigator.language,
    opcionesFormato
  );

  // REFERENCIA HTML: Inyectamos la fecha formateada
  document.getElementById("fecha-carrera-display").innerText = fechaFormateada;
  // ---------------------------------------------
  // 2. Calculamos tiempo
  const tiempoFaltante = calcularTiempoRestante(carrera.fecha);

  // === NUEVA LÓGICA: ¿YA EMPEZÓ? ===
  // Si faltan menos de 0 milisegundos, es que la fecha ya pasó
  if (tiempoFaltante < 0) {
    document.getElementById("dias").innerText = "00";
    document.getElementById("horas").innerText = "00";
    document.getElementById("minutos").innerText = "00";
    document.getElementById("segundos").innerText = "00";

    document.getElementById("nombre-carrera").innerText =
      "¡CARRERA EN CURSO! 🏎️";
    document.getElementById("contador").style.color = "#e10600"; // Rojo F1

    return; // ¡IMPORTANTE! Esto detiene la función acá. No sigue ejecutando lo de abajo.
  }

  // 3. Si todavía no empezó, convertimos y mostramos normal
  const tiempoFinal = convertirMilisegundos(tiempoFaltante);

  // Reset del estilo (por si antes estaba en rojo por "Carrera en curso")
  const cajaContador = document.getElementById("contador");

  // Tu lógica de color rojo de advertencia (menos de 1 día)
  if (tiempoFinal.dias === 0) {
    cajaContador.style.color = "red";
    cajaContador.style.fontWeight = "bold";
  } else {
    cajaContador.style.color = "white"; // Ojo: en tu CSS el texto es blanco, volvemos a blanco
    cajaContador.style.fontWeight = "normal";
  }

  // Inyectamos números
  document.getElementById("dias").innerText = tiempoFinal.dias;
  document.getElementById("horas").innerText = tiempoFinal.horas
    .toString()
    .padStart(2, "0");
  document.getElementById("minutos").innerText = tiempoFinal.minutos
    .toString()
    .padStart(2, "0");
  document.getElementById("segundos").innerText = tiempoFinal.segundos
    .toString()
    .padStart(2, "0");
}
// === EL BUCLE DE TIEMPO ===

// setInterval recibe dos cosas:
// 1. La función que queremos repetir (una flecha anónima es lo más limpio aquí).
// 2. Cada cuántos milisegundos repetirla (1000 ms = 1 segundo).

// 1. ESTADO GLOBAL INTELIGENTE

// Buscamos si hay un ID guardado en la memoria
const idGuardado = localStorage.getItem("ultimaCarreraId");

if (idGuardado) {
  // Si hay algo guardado, buscamos esa carrera en el array usando .find()
  // (ParseInt es necesario porque localStorage guarda todo como texto)
  carreraActual = temporada2026.find((c) => c.id === parseInt(idGuardado));
} else {
  // Si no hay nada (es la primera vez que entra), usamos la primera por defecto
  carreraActual = temporada2026[0];
}

// Nota: Si por alguna razón .find no encuentra nada (ej. borraste la carrera), volvemos a la 0
if (!carreraActual) {
  carreraActual = temporada2026[0];
}

// 2. FUNCIÓN PARA CREAR EL MENÚ
function crearBotonesMenu() {
  const contenedor = document.getElementById("menu-carreras");
  contenedor.innerHTML = ""; // Limpia el contenedor
  // Usamos .forEach para recorrer tu array de objetos
  temporada2026.forEach((carrera) => {
    // A. Creamos el botón en memoria
    const boton = document.createElement("button");
    boton.innerText = carrera.circuito; // Ponemos el nombre del circuito en el botón

    // B. Le damos "oído" al botón (Evento Click)
    boton.addEventListener("click", function (e) {
      e.preventDefault();
      carreraActual = carrera;
      renderizarCuentaRegresiva(carreraActual);

      // === NUEVO: Guardamos en la memoria del navegador ===
      // setItem funciona como una caja: etiqueta 'ultimaCarrera' y valor 'carrera.id'
      localStorage.setItem("ultimaCarreraId", carrera.id);
    });

    // C. Lo agregamos al HTML real
    contenedor.appendChild(boton);
  });
}

// Ejecutamos la creación del menú una sola vez al inicio
crearBotonesMenu();

// 3. INTERVALO ACTUALIZADO
setInterval(() => {
  // Ahora el intervalo usa la variable "carreraActual", que cambia según el botón que toques
  renderizarCuentaRegresiva(carreraActual);
}, 1000);
