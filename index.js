const questionOne = {
  question: "Was ist die Hauptstadt von Deutschland?",
  answers: ["Hamburg", "Berlin", "München", "Hannover"],
  correctAnswer: "Berlin",
};

const questionTwo = {
  question: "Was ist die Hauptstadt von Österreich?",
  answers: ["Wien", "Salzburg", "Innsbruck", "Graz"],
  correctAnswer: "Wien",
};

const questionThree = {
  question: "Was ist die Hauptstadt von Nordamerika?",
  answers: ["Washington", "San Francisco", "New York", "Florida"],
  correctAnswer: "Washington",
};

const questions = [questionOne, questionTwo, questionThree];

let questionsId = 0;

const x = questions[questionsId];
console.log(x.answers);
console.log(questions.length);

console.log(x.answers.length);

/* let id = 0;
let arrayLength = */

function add() {}

function continueQuestion() {
  const x = questions[questionsId];

  const questionDiv = document.createElement("div");
  const questionParagraph = document.createElement("p");
  const answerDiv = document.createElement("div");

  const questionPargraphText = document.createTextNode(x.question);

  questionParagraph.appendChild(questionPargraphText);

  questionDiv.appendChild(questionParagraph);
  questionDiv.appendChild(answerDiv);

  for (let answersId = 0; answersId < x.answers.length; answersId++) {
    console.log(x.answers[answersId]);
    const answerButton = document.createElement("button");
    answerButton.id = answersId;
    answerButton.setAttribute("onclick", `validate(${answersId})`);
    const answerButtonTextOne = document.createTextNode(x.answers[answersId]);
    answerButton.appendChild(answerButtonTextOne);
    answerDiv.appendChild(answerButton);
  }

  document.getElementById("demo").prepend(questionDiv);

  if (questionsId < questions.length) {
    questionsId++;
    console.log(questionsId);
  }

  var element = document.getElementById("0");
  console.log(element);
  console.log(typeof element);

  var y = document.getElementById("1");
  console.log(y);
  console.log(typeof y);
}
