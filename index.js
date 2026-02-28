const answerAttributes = ["A", "B", "C", "D"];

const questionZero = {
  id: "a",
  question: "Welcher Planet unseres Sonnensystems hat die meisten Monde?",
  answers: ["Jupiter", "Saturn", "Uranus", "Neptun"],
  correctAnswer: "Saturn",
  descriptionTitle: "Der Lokalpatriot",
  descriptionText:
    "Saturn! Mit über 140 Monden hätte er mehr Trabanten als so mancher Politiker Follower hat.",
};

const questionOne = {
  id: "b",
  question: "Welches chemische Element hat das Symbol 'Au'?",
  answers: ["Silber", "Gold", "Aluminium", "Argon"],
  correctAnswer: "Gold",
  descriptionTitle: "Der Fun Fact",
  descriptionText:
    "Au klingt nicht nach Gold, weil die Römer es Aurum nannten, was so viel wie glänzende Morgenröte bedeutet. Ziemlich poetisch für ein Metall.",
};

const questionTwo = {
  id: "c",
  question: "In welchem Jahr fiel die Berliner Mauer?",
  answers: ["1987", "1989", "1990", "1991"],
  correctAnswer: "1989",
  descriptionTitle: "Ein Meilenstein",
  descriptionText:
    "1989! Ein Jahr, das die Welt veränderte, und alles begann mit einer schlecht vorbereiteten Pressekonferenz.",
};

const questionThree = {
  id: "d",
  question: "Was ist die Hauptstadt von Nordamerika?",
  answers: ["Washington", "San Francisco", "New York", "Florida"],
  correctAnswer: "Washington",
  descriptionTitle: "Der Historiker",
  descriptionText:
    "Washington, D.C. wurde 1790 eigens als Hauptstadt geplant und gebaut, um keinem bestehenden Bundesstaat einen Heimvorteil zu gönnen.",
};

const questionFour = {
  id: "e",
  question: "Was ist die Hauptstadt von Frankreich?",
  answers: ["Bordeaux", "Lyon", "Metz", "Paris"],
  correctAnswer: "Paris",
  descriptionTitle: "Wusstest du?",
  descriptionText:
    "Paris die Stadt der Liebe & Heimat der Freiheitsstatue, die übrigens ein Geschenk Frankreichs an die USA war.",
};

const questionFive = {
  id: "f",
  question: "Wo fanden 2026 die olympischen Winterspiele statt?",
  answers: ["Sochi", "Vancouver", "Mailand", "Grenoble"],
  correctAnswer: "Mailand",
  descriptionTitle: "Pizza & Pasta",
  descriptionText:
    "Mailand! Es war das erste Mal seit 1956, dass Italien wieder Gastgeber der Olympischen Winterspiele war, damals ebenfalls in Cortina d'Ampezzo.",
};

const questionSix = {
  id: "g",
  question: "Was ist die Hauptstadt von Deutschland?",
  answers: ["Hamburg", "München", "Berlin", "Hannover"],
  correctAnswer: "Berlin",
  descriptionTitle: "Der Fun Fact",
  descriptionText:
    "Die Stadt hat mehr Brücken als Venedig. Über 1.700 Stück, falls jemand zählen möchte.",
};

const questions = [
  questionZero,
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
];

document.addEventListener("DOMContentLoaded", nextQuestion);

let questionsId = -1;
let currentQuestion;
let randomAnswers = [];

let displaySolution = false;
let incorrectSolution = false;
let correctSolution = false;

function renderQuestion(question) {
  /* const descriptionDiv = document.createElement("div");
  descriptionDiv.id = "display-description"; */
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
    const answerButtonDiv = document.createElement("div");
    answerButtonDiv.classList.add("answer-item", "btn", "btn-hover");
    answerButtonDiv.id = answerId;
    answerButtonDiv.setAttribute("onclick", `validate(${answerId})`);

    const answerButtonLeftDiv = document.createElement("div");
    answerButtonLeftDiv.classList.add("left-container");

    /* const answerButtonRightDiv = document.createElement("div");
    answerButtonRightDiv.classList.add("right-container");
    answerButtonRightDiv.id = "answer-button-right"; */

    const answerButtonSpanOne = document.createElement("span");
    answerButtonSpanOne.classList.add("answer-attribute");
    answerButtonSpanOne.appendChild(
      document.createTextNode(answerAttributes[answerId]),
    );

    const answerButtonSpanTwo = document.createElement("span");
    answerButtonSpanTwo.classList.add("answer-attribute");
    answerButtonSpanTwo.appendChild(
      document.createTextNode(randomAnswers[answerId]),
    );

    /* const answerButtonImg = document.createElement("img");
    answerButtonImg.classList.add("checkbox");
    answerButtonImg.src = "img/checkbox.png"; */

    answerButtonDiv.appendChild(answerButtonLeftDiv);
    /* answerButtonDiv.appendChild(answerButtonRightDiv); */
    answerButtonLeftDiv.appendChild(answerButtonSpanOne);
    answerButtonLeftDiv.appendChild(answerButtonSpanTwo);
    /* answerButtonRightDiv.appendChild(answerButtonImg); */

    answerDiv.appendChild(answerButtonDiv);
  }

  const solutionButton = document.createElement("button");
  solutionButton.id = "solution";
  solutionButton.classList.add("btn");
  solutionButton.appendChild(
    document.createTextNode("Das ist mir echt zu schwer. HILFE..."),
  );
  solutionButton.setAttribute("onclick", `showSolution()`);

  /* document.getElementById("display-question").appendChild(descriptionDiv); */
  document.getElementById("display-question").appendChild(questionDiv);
  document.getElementById("display-footer").appendChild(solutionButton);

  question.answers = randomAnswers;
}

function nextQuestion() {
  randomAnswers = [];
  document.getElementById("quiz-title").innerHTML = "Quiz";
  document.getElementById("quiz-title").classList.remove("quiz-title-true");
  document.getElementById("quiz-title").classList.remove("quiz-title-false");

  if (displaySolution === true) {
    document.getElementById(currentQuestion.id).remove();
    document.getElementById("continue").remove();
    displaySolution = false;
  } else if (incorrectSolution === true) {
    document.getElementById(currentQuestion.id).remove();
    document.getElementById("continue").remove();
    incorrectSolution = false;
  } else if (correctSolution === true) {
    document.getElementById("correct-answer").remove();
    document.getElementById("display-description").remove();
    document.getElementById("continue").remove();
    correctSolution = false;
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
  for (let i = 0; i < randomAnswers.length; i++) {
    if (i === correctAnswerId) {
      document.getElementById(i).classList.add("true");
      document.getElementById(i).removeAttribute("onclick");
    } else if (i === randomAnswerId) {
      document.getElementById(randomAnswerId).classList.add("false");
      document.getElementById(correctAnswerId).classList.add("true");
      document.getElementById(i).removeAttribute("onclick");
    } else if (i !== correctAnswerId && i !== randomAnswerId) {
      document.getElementById(i).removeAttribute("onclick");
      document.getElementById(i).classList.add("btn-remove-Attribute");
      document.getElementById(i).classList.remove("btn-hover");
    }
  }
  if (correctAnswerId === randomAnswerId) {
    document.getElementById("quiz-title").innerHTML = "Richtig";
    document.getElementById("quiz-title").classList.add("quiz-title-true");
    document.getElementById(currentQuestion.id).remove();

    createAnswerButton(correctAnswerId);
    addDescription();

    correctSolution = true;
  } else {
    document.getElementById("quiz-title").innerHTML = "Falsch";
    document.getElementById("quiz-title").classList.add("quiz-title-false");
    incorrectSolution = true;
  }

  addContinueButton();

  document.getElementById("solution").remove();
}

function showSolution() {
  const correctAnswerId = randomAnswers.findIndex((zahl) => {
    return zahl === currentQuestion.correctAnswer;
  });
  for (let i = 0; i < randomAnswers.length; i++) {
    if (i === correctAnswerId) {
      document.getElementById(i).classList.add("true");
      document.getElementById(i).removeAttribute("onclick");
    } else {
      document.getElementById(i).removeAttribute("onclick");
      document.getElementById(i).classList.add("btn-remove-Attribute");
      document.getElementById(i).classList.remove("btn-hover");
    }
  }
  displaySolution = true;
  addContinueButton();
  document.getElementById("solution").remove();
}

// Ausgelagerte Funktionen:

function addDescription() {
  // DescriptionDiv erstellen
  const descriptionDiv = document.createElement("div");
  descriptionDiv.id = "display-description";
  descriptionDiv.classList.add("description");

  const descriptionText = document.createElement("p");
  const descriptionTitle = document.createElement("span");
  descriptionText.classList.add("description-text");

  descriptionTitle.appendChild(
    document.createTextNode(currentQuestion.descriptionTitle),
  );
  descriptionText.appendChild(
    document.createTextNode(currentQuestion.descriptionText),
  );

  descriptionDiv.appendChild(descriptionTitle);
  descriptionDiv.appendChild(descriptionText);

  document.getElementById("display-question").appendChild(descriptionDiv);
}

function addContinueButton() {
  const continueButton = document.createElement("button");
  continueButton.id = "continue";
  continueButton.classList.add("btn");
  continueButton.setAttribute("onclick", `nextQuestion()`);
  continueButton.appendChild(
    document.createTextNode("Nächste Herausforderung"),
  );
  document.getElementById("display-footer").appendChild(continueButton);
}

function createAnswerButton(correctAnswerId) {
  const answerButtonDiv = document.createElement("div");
  answerButtonDiv.classList.add("answer-item", "btn", "btn-hover", "true");
  answerButtonDiv.id = "correct-answer";
  const answerButtonLeftDiv = document.createElement("div");
  answerButtonLeftDiv.classList.add("left-container");

  /* const answerButtonRightDiv = document.createElement("div");
    answerButtonRightDiv.classList.add("right-container");
    answerButtonRightDiv.id = "answer-button-right"; */

  const answerButtonSpanOne = document.createElement("span");
  answerButtonSpanOne.classList.add("answer-attribute");
  answerButtonSpanOne.appendChild(
    document.createTextNode(answerAttributes[correctAnswerId]),
  );

  const answerButtonSpanTwo = document.createElement("span");
  answerButtonSpanTwo.classList.add("answer-attribute");
  answerButtonSpanTwo.appendChild(
    document.createTextNode(randomAnswers[correctAnswerId]),
  );

  /* const answerButtonImg = document.createElement("img");
    answerButtonImg.classList.add("checkbox");
    answerButtonImg.src = "img/checkbox.png"; */

  answerButtonDiv.appendChild(answerButtonLeftDiv);
  /* answerButtonDiv.appendChild(answerButtonRightDiv); */
  answerButtonLeftDiv.appendChild(answerButtonSpanOne);
  answerButtonLeftDiv.appendChild(answerButtonSpanTwo);
  /* answerButtonRightDiv.appendChild(answerButtonImg); */

  document.getElementById("display-question").appendChild(answerButtonDiv);
}
