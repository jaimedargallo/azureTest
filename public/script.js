// Cargar el archivo JSON
const xhr = new XMLHttpRequest();
xhr.open("GET", "public/preguntas.json");
xhr.onload = function() {
  // Parsear el archivo JSON
  const preguntas = JSON.parse(xhr.responseText);

  // Mostrar las preguntas
  for (const pregunta of preguntas) {
    const divPregunta = document.createElement("div");
    divPregunta.innerHTML = `
      <h2>${pregunta.pregunta}</h2>
      <ul>
        <li>${pregunta.respuestas[0]}</li>
        <li>${pregunta.respuestas[1]}</li>
        <li>${pregunta.respuestas[2]}</li>
        <li>${pregunta.respuestas[3]}</li>
      </ul>
    `;
    document.body.appendChild(divPregunta);
  }
};
xhr.send();
