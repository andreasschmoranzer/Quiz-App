const answerAttributes = ["A | ", "B |", "C |", "D |"];

const questionOne = {
  id: "a",
  question: "Was ist die Hauptstadt von Deutschland?",
  answers: ["Hamburg", "München", "Berlin", "Hannover"],
  correctAnswer: "Berlin",
  description: {
    title: "Der Fun Fact",
    text: "Die Stadt hat mehr Brücken als Venedig. Über 1.700 Stück, falls jemand zählen möchte.",
    id: "description" + 1,
  },
};

const questionTwo = {
  id: "b",
  question: "Was ist die Hauptstadt von Österreich?",
  answers: ["Wien", "Salzburg", "Innsbruck", "Graz"],
  correctAnswer: "Wien",
  description: {
    title: "Der Snack-Fact",
    text: "Das Wiener Schnitzel stammt übrigens ursprünglich aus Mailand. Die Wiener haben es einfach besser vermarktet.",
    id: "description" + 2,
  },
};

const questionThree = {
  id: "c",
  question: "Was ist die Hauptstadt von Nordamerika?",
  answers: ["Washington", "San Francisco", "New York", "Florida"],
  correctAnswer: "Washington",
  descriptionTitle: "Der Historiker",
  descriptionText:
    "Washington, D.C. wurde 1790 eigens als Hauptstadt geplant und gebaut, um keinem bestehenden Bundesstaat einen Heimvorteil zu gönnen.",
};

const questionFour = {
  id: "d",
  question: "Was ist die Hauptstadt von Frankreich?",
  answers: ["Bordeaux", "Lyon", "Metz", "Paris"],
  correctAnswer: "Paris",
  descriptionTitle: "Wusstest du?",
  descriptionText:
    "Paris die Stadt der Liebe & Heimat der Freiheitsstatue, die übrigens ein Geschenk Frankreichs an die USA war.",
};

const questionFive = {
  id: "e",
  question: "Wo fanden 2026 die olympischen Winterspiele statt?",
  answers: ["Sochi", "Vancouver", "Mailand", "Grenoble"],
  correctAnswer: "Mailand",
  descriptionTitle: "Pizza & Pasta",
  descriptionText:
    "Mailand! Es war das erste Mal seit 1956, dass Italien wieder Gastgeber der Olympischen Winterspiele war, damals ebenfalls in Cortina d'Ampezzo.",
};

const questionSix = {
  id: "f",
  question: "Welcher Planet unseres Sonnensystems hat die meisten Monde?",
  answers: ["Jupiter", "Saturn", "Uranus", "Neptun"],
  correctAnswer: "Saturn",
  descriptionTitle: "Der Lokalpatriot",
  descriptionText:
    "Saturn! Mit über 140 Monden hätte er mehr Trabanten als so mancher Politiker Follower hat.",
};

const questionSeven = {
  id: "g",
  question: "In welchem Jahr fiel die Berliner Mauer?",
  answers: ["1987", "1989", "1990", "1991"],
  correctAnswer: "1989",
  descriptionTitle: "Ein Meilenstein",
  descriptionText:
    "1989! Ein Jahr, das die Welt veränderte, und alles begann mit einer schlecht vorbereiteten Pressekonferenz.",
};

const questionEight = {
  id: "h",
  question: "Welches chemische Element hat das Symbol 'Au'?",
  answers: ["Silber", "Gold", "Aluminium", "Argon"],
  correctAnswer: "Gold",
  descriptionTitle: "Der Fun Fact",
  descriptionText:
    "Au klingt nicht nach Gold, weil die Römer es Aurum nannten, was so viel wie glänzende Morgenröte bedeutet. Ziemlich poetisch für ein Metall.",
};

const questions = [
  questionOne,
  questionTwo,
  /* questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight, */
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
    answerButton.classList.add("answer-item", "btn", "btn-hover");
    answerButton.setAttribute("onclick", `validate(${answerId})`);
    const answerButtonTextOne = document.createTextNode(
      answerAttributes[answerId] + " " + randomAnswers[answerId],
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
    // document.getElementById(currentQuestion.description.id).remove();
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
      document.getElementById(randomAnswerId).classList.add("true");
    } else if (i === randomAnswerId) {
      document.getElementById(randomAnswerId).classList.add("false");
      document.getElementById(correctAnswerId).classList.add("true");
    } else if (i !== correctAnswerId && i !== randomAnswerId) {
      document.getElementById(i).removeAttribute("onclick");
      document.getElementById(i).classList.add("btn-remove-Attribute");
      document.getElementById(i).classList.remove("btn-hover");
    }
  }

  // Div für die Erklärungen erstellen
  const descriptionDiv = document.createElement("div");
  descriptionDiv.id = currentQuestion.description.id;
  descriptionDiv.classList.add("description");

  // Paragraphs für den Erklärungstitel und Erklärungstext
  const descriptionTitle = document.createElement("p");
  const descriptionText = document.createElement("p");
  descriptionText.classList.add("description-text");

  descriptionTitle.appendChild(
    document.createTextNode(currentQuestion.description.title),
  );
  descriptionText.appendChild(
    document.createTextNode(currentQuestion.description.text),
  );

  descriptionDiv.appendChild(descriptionTitle);
  descriptionDiv.appendChild(descriptionText);

  const continueButton = document.createElement("button");
  continueButton.classList.add("btn");
  // continueButton.setAttribute("onclick", );
  continueButton.appendChild(
    document.createTextNode("Nächste Herausforderung"),
  );

  document.getElementById("display-question").appendChild(descriptionDiv);
  document.getElementById("solution").remove();
  document.getElementById("display-footer").appendChild(continueButton);
}

function showSolution() {
  const correctAnswerId = randomAnswers.findIndex((zahl) => {
    return zahl === currentQuestion.correctAnswer;
  });
  document.getElementById(correctAnswerId).classList.add("true");
}
