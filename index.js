const answersOne = ["Hamburg", "Berlin", "München", "Hannover"];
const answersTwo = ["Wien", "Salzburg", "Innsbruck", "Graz"];

const question = {
  question: [
    "Was ist die Hauptstadt von Deutschland?",
    "Was ist die Hauptstadt von Österreich?",
  ],
  answerOne: ["Hamburg", "Wien"],
  answerTwo: ["Berlin", "Salzburg"],
  answerThree: ["München", "Innsbruck"],
  answerFour: ["Hannover", "Graz"],
};

let questions = [question];

function contribute() {
  for (let i = 0; i < questions.length; i++) {
    appendQuestion(question);
  }
}

function appendQuestion(question) {
  const questionDiv = document.createElement("div");

  const questionParagraph = document.createElement("p");
  const answerButtonOne = document.createElement("button");
  const answerButtonTwo = document.createElement("button");
  const answerButtonThree = document.createElement("button");
  const answerButtonFour = document.createElement("button");

  const questionParagraphText = document.createTextNode(question.question[0]);
  const answerButtonTextOne = document.createTextNode(question.answerOne[0]);
  const answerButtonTextTwo = document.createTextNode(question.answerTwo[0]);
  const answerButtonTextThree = document.createTextNode(
    question.answerThree[0],
  );
  const answerButtonTextFour = document.createTextNode(question.answerFour[0]);

  questionParagraph.appendChild(questionParagraphText);
  answerButtonOne.appendChild(answerButtonTextOne);
  answerButtonTwo.appendChild(answerButtonTextTwo);
  answerButtonThree.appendChild(answerButtonTextThree);
  answerButtonFour.appendChild(answerButtonTextFour);

  questionDiv.appendChild(questionParagraph);
  questionDiv.appendChild(answerButtonOne);
  questionDiv.appendChild(answerButtonTwo);
  questionDiv.appendChild(answerButtonThree);
  questionDiv.appendChild(answerButtonFour);

  document.getElementById("demo").appendChild(questionDiv);
}
