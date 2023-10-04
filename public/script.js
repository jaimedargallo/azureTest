// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON

const header = document.querySelector("header");
const section = document.querySelector("section");

const requestURL =
  "https://raw.githubusercontent.com/jaimedargallo/azureTest/main/public/preguntas.json";

const request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";

request.send();request.onload = function () {
  const testQuestions = request.response;
  infoHeader(testQuestions);
  showQuestions(testQuestions);
};

function infoHeader(jsonObj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["testName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent =
    "Created: " + jsonObj["created"] + " // Author: " + jsonObj["author"];
  header.appendChild(myPara);
}
function showQuestions(jsonObj) {
  const questions = jsonObj["questions"];

  for (var i = 0; i < questions.length; i++) {
    const myArticle = document.createElement("article");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("ul");
    const myPara3 = document.createElement("p");


    // myH2.textContent = questions[i].name;
    myPara1.textContent = "Pregunta: " + questions[i].question;
    myPara2.textContent = "Respuestas: " + questions[i].answers[i];
    myPara3.textContent = "Respuesta correcta:" + questions[i].correctAnswer;

    const superPowers = questions[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }
  

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);

    section.appendChild(myArticle);
  }
}