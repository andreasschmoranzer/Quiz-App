const questionOne = {
  id: "a",
  question: "Was ist die Hauptstadt von Deutschland?",
  answers: ["Hamburg", "München", "Berlin", "Hannover"],
  correctAnswer: "Berlin",
};

const questionTwo = {
  id: "b",
  question: "Was ist die Hauptstadt von Österreich?",
  answers: ["Wien", "Salzburg", "Innsbruck", "Graz"],
  correctAnswer: "Wien",
};

const questionThree = {
  id: "c",
  question: "Was ist die Hauptstadt von Nordamerika?",
  answers: ["Washington", "San Francisco", "New York", "Florida"],
  correctAnswer: "Washington",
};

const questionFour = {
  id: "d",
  question: "Was ist die Hauptstadt von Frankreich?",
  answers: ["Bordeaux", "Lyon", "Metz", "Paris"],
  correctAnswer: "Paris",
};

const questionFive = {
  id: "e",
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

// document.addEventListener("DOMContentLoaded", nextQuestion);

let questionsId = -1;
let currentQuestion;
let randomAnswers = [];

questionOne.answers.forEach((element) => {
  const randomAnswer =
    questionOne.answers[Math.floor(Math.random() * questionOne.answers.length)];
  randomAnswers.push(randomAnswer);
  console.log(randomAnswers);
  console.log(questionOne.answers);
  localStorage.setItem("answers", JSON.stringify(randomAnswers));
});

// vornamen[Math.floor(Math.random() * vornamen.length)];

function renderQuestion(question) {
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  const questionParagraph = document.createElement("p");
  const answerDiv = document.createElement("div");

  questionDiv.classList.add("question");
  questionParagraph.classList.add("question-title");
  answerDiv.classList.add("answer-parent");

  const questionPargraphText = document.createTextNode(question.question);

  questionParagraph.appendChild(questionPargraphText);

  questionDiv.appendChild(questionParagraph);
  questionDiv.appendChild(answerDiv);

  for (let answerId = 0; answerId < question.answers.length; answerId++) {
    const answerButton = document.createElement("button");
    answerButton.id = answerId;
    answerButton.classList.add("answer-item", "btn");
    answerButton.setAttribute("onclick", `validate(${answerId})`);
    const answerButtonTextOne = document.createTextNode(
      question.answers[answerId],
    );
    answerButton.appendChild(answerButtonTextOne);
    answerDiv.appendChild(answerButton);
  }

  document.getElementById("display-question").appendChild(questionDiv);
}

function nextQuestion() {
  if (questionsId >= 0) {
    document.getElementById(currentQuestion.id).remove();
  }

  if (questionsId + 1 < questions.length) {
    questionsId++;
    currentQuestion = questions[questionsId];
  } else {
    questionsId = 0;
    currentQuestion = questions[questionsId];
  }
  renderQuestion(currentQuestion);
}

function validate(answerId) {
  const correctAnswerId = currentQuestion.answers.findIndex((zahl) => {
    return zahl === currentQuestion.correctAnswer;
  });
  if (correctAnswerId === answerId) {
    var element = document.getElementById(answerId);
    element.classList.add("true");
    alert("Diese Antwort ist richtig");
  } else {
    document.getElementById(answerId).classList.add("false");
    alert("Diese Antwort ist falsch");
    document.getElementById(correctAnswerId).classList.add("true");
  }
}

function solution() {
  const correctAnswerId = currentQuestion.answers.findIndex((zahl) => {
    return zahl === currentQuestion.correctAnswer;
  });
  document.getElementById(correctAnswerId).classList.add("true");
}
