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

const questionFour = {
  question: "Was ist die Hauptstadt von Frankreich?",
  answers: ["Bordeaux", "Lyon", "Metz", "Paris"],
  correctAnswer: "Paris",
};

const questionFive = {
  question: "Wo fanden 2026 die olympischen Winterspiele statt?",
  answers: ["Sochi", "Vancouver", "Mailand", "Grenoble"],
  correctAnswer: "Mailand",
};

const questions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
];

document.addEventListener("DOMContentLoaded", renderQuestion);

let questionsId = -1;

function validate(id) {
  const currentQuestion = questions[questionsId];
  let correctAnswerId = currentQuestion.answers.findIndex((zahl) => {
    return zahl === currentQuestion.correctAnswer;
  });
  if (correctAnswerId === id) {
    var element = document.getElementById(id);
    element.classList.add("true");
  } else {
    var element = document.getElementById(id);
    element.classList.add("false");
  }
}

function renderQuestion() {
  if (questionsId < questions.length) {
    questionsId++;
  }

  const currentQuestion = questions[questionsId];

  const questionDiv = document.createElement("div");
  const questionParagraph = document.createElement("p");
  const answerDiv = document.createElement("div");

  questionDiv.classList.add("question");
  questionParagraph.classList.add("question-title");
  answerDiv.classList.add("answer-parent");

  const questionPargraphText = document.createTextNode(
    currentQuestion.question,
  );

  questionParagraph.appendChild(questionPargraphText);

  questionDiv.appendChild(questionParagraph);
  questionDiv.appendChild(answerDiv);

  for (
    let answersId = 0;
    answersId < currentQuestion.answers.length;
    answersId++
  ) {
    const answerButton = document.createElement("button");
    answerButton.id = answersId;
    answerButton.classList.add("answer-item", "btn");
    answerButton.setAttribute("onclick", `validate(${answersId})`);
    const answerButtonTextOne = document.createTextNode(
      currentQuestion.answers[answersId],
    );
    answerButton.appendChild(answerButtonTextOne);
    answerDiv.appendChild(answerButton);
  }

  if (questionsId > 0) {
    const element = document.getElementById("display-question");
    element.replaceChild(questionDiv, element.childNodes[0]);
  } else {
    document.getElementById("display-question").appendChild(questionDiv);
  }
}
