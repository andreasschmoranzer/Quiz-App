const answerAttributes = ["A", "B", "C", "D"];

const questionZero = {
  id: "a",
  question: "Welcher Planet unseres Sonnensystems hat die meisten Monde?",
  answers: ["Jupiter", "Saturn", "Uranus", "Neptun"],
  correctAnswer: "Saturn",
  descriptionText:
    "Mit über 140 Monden hätte er mehr Trabanten als so mancher Politiker Follower hat.",
};

const questionOne = {
  id: "b",
  question: "Welches chemische Element hat das Symbol 'Au'?",
  answers: ["Silber", "Gold", "Aluminium", "Argon"],
  correctAnswer: "Gold",
  descriptionText:
    "Au klingt nicht nach Gold, weil die Römer es Aurum nannten, was so viel wie glänzende Morgenröte bedeutet. Ziemlich poetisch für ein Metall.",
};

const questionTwo = {
  id: "c",
  question: "In welchem Jahr fiel die Berliner Mauer?",
  answers: ["1987", "1989", "1990", "1991"],
  correctAnswer: "1989",
  descriptionText:
    "Ein Jahr, das die Welt veränderte, und alles begann mit einer schlecht vorbereiteten Pressekonferenz.",
};

const questionThree = {
  id: "d",
  question: "Wie hoch hängt ein Basketballkorb?",
  answers: ["2,80 Meter", "3,05 Meter", "3,20 Meter", "2,60 Meter"],
  correctAnswer: "3,05 Meter",
  descriptionText:
    "Die Korbhöhe von exakt 3,05 Metern (10 Fuß) gilt weltweit einheitlich – von der Schulhofanlage bis zur NBA. Diese Höhe wurde bereits 1891 beim ersten Basketball-Spiel festgelegt.",
};

const questionFour = {
  id: "e",
  question: "Was ist die Hauptstadt von Frankreich?",
  answers: ["Bordeaux", "Lyon", "Metz", "Paris"],
  correctAnswer: "Paris",
  descriptionText:
    "Die Stadt der Liebe & Heimat der Freiheitsstatue, die übrigens ein Geschenk Frankreichs an die USA war.",
};

const questionFive = {
  id: "f",
  question: "Wo fanden 2026 die olympischen Winterspiele statt?",
  answers: ["Sochi", "Vancouver", "Mailand", "Grenoble"],
  correctAnswer: "Mailand",
  descriptionText:
    "Es war das erste Mal seit 1956, dass Italien wieder Gastgeber der Olympischen Winterspiele war, damals ebenfalls in Cortina d'Ampezzo.",
};

const questionSix = {
  id: "g",
  question: "Welches Land hat weltweit die meisten Inseln?",
  answers: ["Indonesien", "Philippinen", "Norwegen", "Schweden"],
  correctAnswer: "Schweden",
  descriptionText:
    "Schweden kommt auf über 221.000 Inseln. Die meisten davon sind unbewohnte Schären entlang der Ostseeküste.",
};

const questionSeven = {
  id: "h",
  question: "Welche Stadt ist die Hauptstadt von Australien?",
  answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  correctAnswer: "Canberra",
  descriptionText:
    "Sydney und Melbourne stritten so lange um den Hauptstadttitel, dass 1908 mit Canberra eine völlig neue Stadt als Kompromiss gegründet wurde.",
};

const questionEight = {
  id: "i",
  question: "Von wem stammt der Satz 'Ich denke, also bin ich'?",
  answers: ["Immanuel Kant", "Aristoteles", "René Descartes", "John Locke"],
  correctAnswer: "René Descartes",
  descriptionText:
    "Descartes formulierte diesen Satz 1637 als einzig sicheren Ausgangspunkt allen Wissens: Wer zweifelt, beweist durch den Zweifel seine eigene Existenz.",
};

const questions = [
  questionZero,
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
];

let questionsId = -1;
let currentQuestion;
let randomAnswers = [];
let score = 0;

let displaySolution = false;
let incorrectSolution = false;
let correctSolution = false;

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
    const randomAnswerId = question.answers.findIndex((zahl) => {
      return zahl === randomAnswer;
    });
    question.answers.splice(randomAnswerId, 1);
    randomAnswers.push(randomAnswer);
  }

  for (let answerId = 0; answerId < randomAnswers.length; answerId++) {
    const answerButtonDiv = document.createElement("div");
    answerButtonDiv.classList.add("btn", "btn-hover");
    answerButtonDiv.id = answerId;
    answerButtonDiv.setAttribute("onclick", `validate(${answerId})`);

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

    answerButtonDiv.appendChild(answerButtonSpanOne);
    answerButtonDiv.appendChild(answerButtonSpanTwo);

    answerDiv.appendChild(answerButtonDiv);
  }

  document.getElementById("display-question").appendChild(questionDiv);

  const solutionButton = document.getElementById("footer-btn");
  solutionButton.innerHTML = "Obi-Wan, ich brauche deine Hilfe!";
  solutionButton.setAttribute("onclick", `showSolution()`);

  question.answers = randomAnswers;
}

function nextQuestion() {
  randomAnswers = [];

  if (questionsId < 0) {
    document.getElementById("quiz-introduction").remove();
    createQuizMainDiv();
    createScoreboard();
    createDisplayQuestionDiv();
  } else if (displaySolution === true) {
    document.getElementById("current-score").innerHTML = "Punkte: " + score;
    document.getElementById(currentQuestion.id).remove();
    displaySolution = false;
  } else if (incorrectSolution === true) {
    document.getElementById("current-score").innerHTML = "Punkte: " + score;
    document.getElementById(currentQuestion.id).remove();
    incorrectSolution = false;
  } else if (correctSolution === true) {
    document.getElementById("current-score").innerHTML = "Punkte: " + score;
    document.getElementById("correct-answer").remove();
    document.getElementById("description").remove();
    createDisplayQuestionDiv();
    correctSolution = false;
  } else if (questionsId === questions.length) {
    createResultPage();
  }

  if (questionsId + 1 < questions.length) {
    questionsId++;
    currentQuestion = questions[questionsId];
  } else {
    questionsId = 0;
    score = 0;
    currentQuestion = questions[questionsId];
  }
  renderQuestion(currentQuestion);
}

function validate(randomAnswerId) {
  const correctAnswerId = randomAnswers.findIndex((zahl) => {
    return zahl === currentQuestion.correctAnswer;
  });
  if (correctAnswerId === randomAnswerId) {
    document.getElementById("display-question").remove();
    document.getElementById("current-score").innerHTML = "Richtig!";
    createCorrectAnswerPage();
    correctSolution = true;
    score = score + 1;
  } else {
    for (let i = 0; i < randomAnswers.length; i++) {
      document.getElementById(randomAnswerId).classList.add("false");
      document.getElementById(correctAnswerId).classList.add("true");
      document.getElementById(i).classList.add("btn-remove-Attribute");
      document.getElementById(i).classList.remove("btn-hover");
      document.getElementById(i).removeAttribute("onclick");
    }
    document.getElementById("current-score").innerHTML =
      "Du noch viel zu lernen hast,<br> junger Padawan!";
    incorrectSolution = true;
  }
  addContinueButton();
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
}
function createQuizMainDiv() {
  const quizMainDiv = document.createElement("div");
  quizMainDiv.id = "quiz-main";
  document.getElementById("quiz-content").prepend(quizMainDiv);
}

function createScoreboard() {
  const quizTitle = document.createElement("h2");
  quizTitle.appendChild(document.createTextNode("Punkte: "));
  quizTitle.id = "current-score";
  quizTitle.classList.add("scoreboard");

  const currentScore = document.createElement("span");
  currentScore.appendChild(document.createTextNode(score));
  currentScore.id = "score-increase";
  quizTitle.appendChild(currentScore);
  document.getElementById("quiz-main").appendChild(quizTitle);
}

function createDisplayQuestionDiv() {
  const displayQuestion = document.createElement("div");
  displayQuestion.id = "display-question";
  document.getElementById("quiz-main").appendChild(displayQuestion);
}

function addContinueButton() {
  const continueButton = document.getElementById("footer-btn");
  continueButton.innerHTML = "R2, nächste Frage bitte!";
  continueButton.setAttribute("onclick", `nextQuestion()`);
}

function createCorrectAnswerPage() {
  const correctAnswerParagraph = document.createElement("p");
  correctAnswerParagraph.id = "correct-answer";
  correctAnswerParagraph.classList.add("correct-answer");
  correctAnswerParagraph.appendChild(
    document.createTextNode(currentQuestion.correctAnswer + "..."),
  );

  const description = document.createElement("p");
  description.id = "description";
  description.classList.add("description-text");

  description.appendChild(
    document.createTextNode(currentQuestion.descriptionText),
  );
  document.getElementById("quiz-main").appendChild(correctAnswerParagraph);
  document.getElementById("quiz-main").appendChild(description);
}

function createResultPage() {
  document.getElementById("current-score").innerHTML = "Dein Ergebnis!";
  if (correctSolution === true) {
    document.getElementById("correct-answer").innerHTML = score + " Punkte!";
    document.getElementById("description").remove();
  } else {
    document.getElementById("display-question").remove();
    const correctAnswerParagraph = document.createElement("p");
    correctAnswerParagraph.id = "correct-answer";
    correctAnswerParagraph.classList.add("correct-answer");
    correctAnswerParagraph.appendChild(
      document.createTextNode(score + "Punkte"),
    );
    document.getElementById("quiz-main").appendChild(correctAnswerParagraph);
  }
  document.getElementById("footer-btn").innerHTML = "Nochmal spielen!";
}
