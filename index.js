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

const questionSix = {
  id: "f",
  question: "Welcher Planet unseres Sonnensystems hat die meisten Monde?",
  answers: ["Jupiter", "Saturn", "Uranus", "Neptun"],
  correctAnswer: "Saturn",
};

const questionSeven = {
  id: "g",
  question: "In welchem Jahr fiel die Berliner Mauer?",
  answers: ["1987", "1989", "1990", "1991"],
  correctAnswer: "1989",
};

const questionEight = {
  id: "h",
  question: "Welches chemische Element hat das Symbol 'Au'?",
  answers: ["Silber", "Gold", "Aluminium", "Argon"],
  correctAnswer: "Gold",
};

const questions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
];

document.addEventListener("DOMContentLoaded", nextQuestion);

let questionsId = -1;
let currentQuestion;
let randomAnswers = [];

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

  while (question.answers.length > 0) {
    let randomAnswer =
      question.answers[Math.floor(Math.random() * question.answers.length)];

    // randomAnswer findIndex
    const randomAnswerId = question.answers.findIndex((zahl) => {
      return zahl === randomAnswer;
    });

    // randomAnswer aus dem alten Array löschen
    question.answers.splice(randomAnswerId, 1);

    // randomAnswer in leeres Array randomAnswers speichern
    randomAnswers.push(randomAnswer);
  }

  // Elemente erstellen
  for (let answerId = 0; answerId < randomAnswers.length; answerId++) {
    const answerButton = document.createElement("button");
    answerButton.id = answerId;
    answerButton.classList.add("answer-item", "btn");
    answerButton.setAttribute("onclick", `validate(${answerId})`);
    const answerButtonTextOne = document.createTextNode(
      randomAnswers[answerId],
    );
    answerButton.appendChild(answerButtonTextOne);
    answerDiv.appendChild(answerButton);
  }
  document.getElementById("display-question").appendChild(questionDiv);
  question.answers = randomAnswers;
}

function nextQuestion() {
  randomAnswers = [];

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

function validate(randomAnswerId) {
  const correctAnswerId = randomAnswers.findIndex((zahl) => {
    return zahl === currentQuestion.correctAnswer;
  });
  console.log(correctAnswerId, randomAnswers);
  if (correctAnswerId === randomAnswerId) {
    document.getElementById(randomAnswerId).classList.add("true");
  } else {
    document.getElementById(randomAnswerId).classList.add("false");
    document.getElementById(correctAnswerId).classList.add("true");
  }
  for (let i = 0; i < randomAnswers.length; i++) {
    document.getElementById(i).removeAttribute("onclick");
    document.getElementById(i).classList.remove("btn:hover");
  }
}

function showSolution() {
  const correctAnswerId = randomAnswers.findIndex((zahl) => {
    return zahl === currentQuestion.correctAnswer;
  });
  document.getElementById(correctAnswerId).classList.add("true");
}
