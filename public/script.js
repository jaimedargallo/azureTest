// Cargar el archivo JSON
const xhr = new XMLHttpRequest();
xhr.open("GET", "public/preguntas.json");
xhr.onload = function() {
  // Parsear el archivo JSON
  const preguntas = JSON.parse(xhr.responseText);

  // Agregar una variable para almacenar la respuesta del usuario
  let respuestaUsuario;

  // Mostrar la pregunta
  const divPregunta = document.createElement("div");
  divPregunta.innerHTML = `
    <h2>${preguntas[1].pregunta}</h2>
    <ul>
      <li>${preguntas[1].respuestas[0]}</li>
      <li>${preguntas[1].respuestas[1]}</li>
      <li>${preguntas[1].respuestas[2]}</li>
      <li>${preguntas[1].respuestas[3]}</li>
    </ul>
  `;
  document.body.main.appendChild(divPregunta);

  // Obtener la respuesta del usuario
  const btnRespuesta = document.querySelector("input[type='radio']:checked");
  respuestaUsuario = btnRespuesta.value;

  // Comprobar la respuesta del usuario
  const isCorrecta = comprobarRespuesta(respuestaUsuario, preguntas[0].respuestaCorrecta);

  // Mostrar un mensaje de respuesta
  mostrarMensajeRespuesta(isCorrecta);
};
xhr.send();

// Función para comprobar la respuesta del usuario
function comprobarRespuesta(respuestaUsuario, respuestaCorrecta) {
  return respuestaUsuario === respuestaCorrecta;
}

// Función para mostrar un mensaje de respuesta
function mostrarMensajeRespuesta(isCorrecta) {
  if (isCorrecta) {
    alert("Respuesta correcta");
  } else {
    alert("Respuesta incorrecta");
  }
}
