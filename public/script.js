const header = document.querySelector("header");
const section = document.querySelector("section");
const footer = document.querySelector("footer");

const requestURL =
  "https://raw.githubusercontent.com/jaimedargallo/azureTest/main/public/preguntas.json";

const request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";

request.send();

request.onload = function () {
  const testQuestions = request.response;
  infoHeader(testQuestions);
  showQuestions(testQuestions);
};

function infoHeader(jsonObj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["testName"];
  header.appendChild(myH1);

  const myFooter = document.createElement("p");
  myFooter.textContent =
    " Author: " + jsonObj["author"] + " // Created: " + jsonObj["created"];
  footer.appendChild(myFooter);
}

function showQuestions(jsonObj) {
  const questions = jsonObj["questions"];
  for (var i = 0; i < questions.length; i++) {
    const myArticle = document.createElement("article");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");

    myPara1.textContent = "Pregunta: " + questions[i].question;
    myPara2.textContent = "Respuestas: ";
    const myList = document.createElement("ul");
    const answers = questions[i].answers;
    for (var j = 0; j < answers.length; j++) {
      const listItem = document.createElement("li");
      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.name = "answer";
      myList.appendChild(radioButton);
      radioButton.value = answers[j];
      
      myList.appendChild(listItem);
      listItem.textContent = answers[j];
     
    }
    
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myPara2.appendChild(myList);
    section.appendChild(myArticle);
  }
}