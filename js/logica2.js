let persona;

function mostrarBotones(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Verificar si el formulario es válido
  if (document.getElementById("ocultarFormulario").checkValidity()) {
    document.getElementById("mostrarBotonGeneracion").style.display = "block";
    document.getElementById("mostrarBotonEdad").style.display = "block";
    document.getElementById("ocultarFormulario").style.display = "none";
    document.getElementById("mostrarBotonDatos").style.display = "block";
  }
}

document
  .getElementById("botonCrear")
  .addEventListener("click", function (event) {
    mostrarBotones(event);
    crearPersona();
  });

function crearPersona() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const anioNacimiento = document.getElementById("anio-nacimiento").value;

  persona = {
    nombre: nombre,
    edad: edad,
    dni: dni,
    peso: peso,
    altura: altura,
    anioNacimiento: anioNacimiento,
    sexo: sexo,
  };
}

function determinarGeneracion(edad) {
  if (edad >= 0 && edad <= 30) {
    return "Generación Z : Irreverencia";
  } else if (edad >= 31 && edad <= 43) {
    return "Generación Y : Frustración";
  } else if (edad >= 43 && edad <= 55) {
    return "Generación X : Obsesión por el exito";
  } else if (edad >= 56 && edad <= 75) {
    return "Generación Baby Boom : Ambición";
  } else if (edad >= 75 && edad <= 94) {
    return "Silent Generation: Austeridad";
  } else {
    return "Generacion no clasificada";
  }
}

function mostrarGeneracion() {
  if (persona) {
    alert("Generación: " + determinarGeneracion(persona.edad));
  } else {
    alert("Primero debes crear una persona.");
  }
}

function esMayorEdad() {
  if (persona) {
    const resultado =
      persona.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    alert(resultado);
  } else {
    alert("Primero debes crear una persona.");
  }
}

function mostrarDatos() {
  alert(
    "Persona creada:\nNombre: " +
      persona.nombre +
      "\nEdad: " +
      persona.edad +
      "\nDNI: " +
      persona.dni +
      "\nSexo: " +
      persona.sexo +
      "\nPeso: " +
      persona.peso +
      "\nAltura: " +
      persona.altura +
      "\nAnio-Nacimiento: " +
      persona.anioNacimiento
  );
}

document
  .getElementById("mostrarBotonGeneracion")
  .addEventListener("click", mostrarGeneracion);

document
  .getElementById("mostrarBotonEdad")
  .addEventListener("click", esMayorEdad);

document
  .getElementById("mostrarBotonDatos")
  .addEventListener("click", mostrarDatos);
