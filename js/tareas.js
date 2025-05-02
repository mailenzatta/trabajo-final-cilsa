// Evento para manejar el envío del formulario y guardar la tarea
document.getElementById("formTareas").addEventListener("submit", guardarTarea);

function guardarTarea(event) {
  // Se obtienen los valores del título y la descripción de los campos del formulario
  let titulo = document.getElementById("titulo").value;
  let descripcion = document.getElementById("descripcion").value;

  // Se crea un objeto con los valores obtenidos en el formulario y se le asigna un "id" único con la fecha y hora en que se creó
  let tareaNueva = {
    id: Date.now(),
    titulo,
    descripcion,
  };

  // Se verifica si ya existen tareas guardadas en localStorage
  if (localStorage.getItem("tareasGuardadas") === null) {
    // Si no hay tareas guardadas, se crea un array vacío, se agrega la tarea nueva y se guarda
    let tareasGuardadas = [];
    tareasGuardadas.push(tareaNueva);
    localStorage.setItem("tareasGuardadas", JSON.stringify(tareasGuardadas));
  } else {
    // Si hay tareas guardadas, se obtienen y se agrega la nueva tarea al array, manteniendo las que ya existen, y se vuelve a guardar
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareasGuardadas"));
    tareasGuardadas.push(tareaNueva);
    localStorage.setItem("tareasGuardadas", JSON.stringify(tareasGuardadas));
  }

  // Se llama a la función para actualizar la lista de tareas en pantalla y se deja el formulario con los campos vacíos
  getTareas();
  document.getElementById("formTareas").reset();
  event.preventDefault();
}

// Función para eliminar determinada tarea según su "id"
function eliminarTarea(id) {
  // Se obtienen las tareas guardadas en localStorage
  let tareasGuardadas = JSON.parse(localStorage.getItem("tareasGuardadas"));
  // Se recorre el array buscando la tarea con el "id" recibido como parámetro para poder eliminarla
  for (let i = 0; i < tareasGuardadas.length; i++) {
    if (tareasGuardadas[i].id == id) {
      tareasGuardadas.splice(i, 1);
    }
  }

  // Se vuelve a guardar el array actualizado y se llama a la función para mostrar las tareas en pantalla
  localStorage.setItem("tareasGuardadas", JSON.stringify(tareasGuardadas));
  getTareas();
}

// Función para eliminar todas las tareas guardadas
function borrarTodo() {
  // Se le pregunta al usuario si desea o no borrar todo
  let borrar = confirm(
    "¿Estás seguro/a que quieres eliminar todas las tareas?"
  );

  // Si el usuario acepta, se borran todas las tareas guardadas, se llama a la función para actualizar las tareas en pantalla y se muestra un alerta indicando que se eliminó todo
  if (borrar) {
    localStorage.removeItem("tareasGuardadas");
    getTareas();
    alert("Se eliminaron todas las tareas.");
  } else {
    // Si cancela, se muestra otro alerta
    alert("No se eliminaron las tareas.");
  }
}

// Función para mostrar todas las tareas guardadas en localStorage
function getTareas() {
  // Se obtienen las tareas guardadas o un array vacío si no hay, y el elemento del html en donde se mostrarán
  let tareas = JSON.parse(localStorage.getItem("tareasGuardadas")) || [];
  let listaTareas = document.getElementById("tareas");

  // Si la longitud del array es mayor a 0 se muestran las tareas en pantalla y se agrega un botón para vaciar el listado
  if (tareas.length > 0) {
    listaTareas.innerHTML = `<div class= "d-flex justify-content-end mb-3">
      <button onclick="borrarTodo()" class="btn btn-danger ml-5">Vaciar</button></div>`;
  } else {
    // Si no hay tareas se muestra un mensaje indicándolo
    listaTareas.innerHTML = "¡No tienes tareas!";
  }

  // Se recorre el array para mostrar cada una de ellas, junto con un botón para eliminarlas
  for (let i = 0; i < tareas.length; i++) {
    let { titulo, descripcion, id } = tareas[i];

    listaTareas.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <h5>${titulo}</h5>
          <p>${descripcion}</p>
          <button onclick="eliminarTarea('${id}')" class="btn btn-danger">Eliminar</button>
        </div>
      </div>`;
  }
}

// Se llama a la función para que las muestre al cargar la página
getTareas();
