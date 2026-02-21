const questionOne = {
  question: "Was ist die Hauptstadt von Deutschland?",
  answers: ["Hamburg", "München", "Berlin", "Hannover"],
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

let questionsId = -1;

function validate(id) {
  const x = questions[questionsId];
  let correctAnswerId = x.answers.findIndex((zahl) => {
    return zahl === x.correctAnswer;
  });
  console.log(correctAnswerId);
  if (correctAnswerId === id) {
    console.log("Korrekt");
    document.getElementById(id).classList.add("true");
  } else {
    console.log("Falsch");
    document.getElementById(id).classList.add("false");
  }
}

function continueQuestion() {
  if (questionsId < questions.length) {
    questionsId++;
    console.log(questionsId);
  }

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

  // let currentQuestion =
}
