// Se crea un array con nombres de alumnos
var alumnos = ["Laura", "Daniel", "Monica", "Susana", "Nahuel"];

// Se crea un bucle para que el usuario ingrese sus datos
while (true) {
  // Se pide que ingrese el nombre y apellido mediante prompt
  var nombre = prompt("Ingrese su nombre:");
  var apellido = prompt("Ingrese su apellido:");

  // Si el nombre ingresado ya existe en el array se muestra un alerta y se sale del bucle
  if (alumnos.includes(nombre)) {
    alert("El visitante ya está en la lista.");
    break;

    // Si el usuario cancela o ingresa espacios vacios se muestra otro alerta y se vuelve al comienzo del bucle
  } else if (
    nombre == null ||
    apellido == null ||
    nombre.trim() === "" ||
    apellido.trim() === ""
  ) {
    alert("Ingrese un nombre y apellido válido");

    // Si el nombre ingresado no está en la lista y es válido, se agrega al final del array y se termina el bucle
  } else {
    alert("Se agregó a " + nombre + " a la lista de visitantes.");
    alumnos.push(nombre);
    break;
  }
}

// Se crea un párrafo que le da la bienvenida al alumno y además se muestra la cantidad de enlaces del sitio
// También se agregan los nombres de los alumnos guardados en el array, en el elemento con el id "primerParrafo"
var bienvenido = document.getElementById("infoPag");
var pBienvenido = document.createElement("p");
pBienvenido.innerHTML =
  "Bienvenido/a " + nombre + ". Gracias por usar nuestra página web.";

var links = document.links.length;
pBienvenido.innerHTML +=
  "<br> La cantidad de enlaces de esta página web es: " + links;

bienvenido.appendChild(pBienvenido);

var listaAlumnos = document.getElementById("primerParrafo");
listaAlumnos.innerHTML += alumnos.join("<br>");

// Se crea un elemento "li" para que al pulsar un botón se pueda agregar el nombre del alumno a la lista y se le añade un id para luego poder identificar al alumno que se agregó
// También se cambian los nombres de las clases en los botones para que se vean o no en el sitio
function agregarNombre() {
  var lista = document.getElementById("alumnos");
  var nuevoAlumno = document.createElement("li");

  nuevoAlumno.textContent = nombre + " " + apellido;
  nuevoAlumno.setAttribute("id", "alumnoAgregado");
  lista.appendChild(nuevoAlumno);

  var botAgregar = document.getElementById("botAgregar");
  botAgregar.className = "oculto";

  var botEliminar = document.getElementById("botEliminar");
  botEliminar.className = "visible btn btn-danger";
}

// Se busca el id que se le incorporó al elemento "li" que se creó anteriormente para poder eliminarlo mediante el botón
function eliminarNombre() {
  var alumnoAgregado = document.getElementById("alumnoAgregado");
  alumnoAgregado.remove();

  var botAgregar = document.getElementById("botAgregar");
  botAgregar.className = "visible btn btn-success";

  var botEliminar = document.getElementById("botEliminar");
  botEliminar.className = "oculto";
}

// A partir del cambio de nombre de las clases se busca mostrar o no el texto adicional, y se incorpora lo del evento para que no se realice un scroll hacia arriba cuando el usuario presione el enlace
function seguirLeyendo(event) {
  event.preventDefault();

  var agregarTexto = document.getElementById("textoAdicional");
  agregarTexto.className = "visible";

  var botSeguirLeyendo = document.getElementById("seguirLeyendo");
  botSeguirLeyendo.className = "oculto";

  var botLeerMenos = document.getElementById("leerMenos");
  botLeerMenos.className = "visible";
}

function leerMenos(event) {
  event.preventDefault();

  var ocultarTexto = document.getElementById("textoAdicional");
  ocultarTexto.className = "oculto";

  var botSeguirLeyendo = document.getElementById("seguirLeyendo");
  botSeguirLeyendo.className = "visible";

  var botLeerMenos = document.getElementById("leerMenos");
  botLeerMenos.className = "oculto";
}
