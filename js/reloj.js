window.onload = function () {
  // Se crea una función para mostrar y actualizar la fecha y hora en pantalla
  var actualizarHora = function () {
    var fecha = new Date(),
      diaSemana = fecha.getDay(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      anio = fecha.getFullYear(),
      horas = fecha.getHours(),
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds();

    //Se utiliza el "id" para obtener los elementos en donde se mostrará luego la fecha y hora
    var pDiaSemana = document.getElementById("diaSemana"),
      pDia = document.getElementById("dia"),
      pMes = document.getElementById("mes"),
      pAnio = document.getElementById("anio"),
      pHoras = document.getElementById("horas"),
      pMinutos = document.getElementById("minutos"),
      pSegundos = document.getElementById("segundos");

    // Array con los días de la semana
    var semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];

    // Muestra el día de la semana usando un índice
    pDiaSemana.textContent = semana[diaSemana];

    // Para mostrar el día
    pDia.textContent = dia;

    // Array con los meses
    var meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    // Muestra el mes a partir del índice
    pMes.textContent = meses[mes];

    // Para mostrar el año
    pAnio.textContent = anio;

    // Si la hora es un número menor a 10, se le agrega un 0 adelante (por ejemplo: si es "9", se mostrará "09"). Se realiza lo mismo con los minutos y con los segundos.
    if (horas < 10) {
      horas = "0" + horas;
    }

    if (minutos < 10) {
      minutos = "0" + minutos;
    }

    if (segundos < 10) {
      segundos = "0" + segundos;
    }

    // Para mostrar la hora, minutos y segundos en pantalla
    pHoras.textContent = horas;
    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;
  };

  // Se llama a la función para que muestre la fecha-hora y se establece un intervalo para que se actualice en tiempo real
  actualizarHora();
  setInterval(actualizarHora, 1000);
};
