// This code fetches a JSON file containing test questions and displays them on the page.

// Get the header, section, and footer elements.
const header = document.querySelector("header");
const section = document.querySelector("section");
const footer = document.querySelector("footer");

// Create a request object to fetch the JSON file.
const request = new XMLHttpRequest();

// Open a GET request to the JSON file URL.
request.open("GET", "./public/preguntas.json");

// Set the response type to JSON.
request.responseType = "json";

// Send the request.
request.send();

// Add an event listener to the request object's onload event.
request.onload = function() {
  // Get the JSON response.
  const testQuestions = request.response;

  // Display the test header information.
  infoHeader(testQuestions);

  // Display the test questions.
  showQuestions(testQuestions);
};

// This function displays the test header information.
function infoHeader(jsonObj) {
  // Create an h1 element to display the test name.
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["testName"];

  // Append the h1 element to the header element.
  header.appendChild(myH1);

  // Create a p element to display the test author and creation date.
  const myFooter = document.createElement("p");
  myFooter.textContent =
    " Author: " + jsonObj["author"] + " // Created: " + jsonObj["created"];

  // Append the p element to the footer element.
  footer.appendChild(myFooter);
}

// This function displays the test questions.
function showQuestions(jsonObj) {
  // Get the array of questions from the JSON response.
  const questions = jsonObj["questions"];

  // Iterate over the array of questions and display each question.
  for (var i = 0; i < questions.length; i++) {
    // Create an article element to display the question.
    const myArticle = document.createElement("article");

    // Create a p element to display the question text.
    const myPara1 = document.createElement("p");
    myPara1.textContent = "Pregunta: " + questions[i].question;

    // Append the p element to the article element.
    myArticle.appendChild(myPara1);

    // Create a p element to display the question answers.
    const myPara2 = document.createElement("p");
    myPara2.textContent = "Respuestas: ";

    // Create an ul element to display the list of question answers.
    const myList = document.createElement("ul");

    // Iterate over the array of question answers and display each answer.
    const answers = questions[i].answers;
    for (var j = 0; j < answers.length; j++) {
      // Create a li element to display the answer.
      const listItem = document.createElement("li");

      // Create a radio button input element to allow the user to select the answer.
      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.name = "answer";

      // Set the value of the radio button input element to the answer text.
      radioButton.value = answers[j];

      listItem.appendChild(radioButton);
      myList.appendChild(listItem);
    }
    
    myPara2.appendChild(myList);
    myArticle.appendChild(myPara2);
    section.appendChild(myArticle);
  }
}
