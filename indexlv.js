const questions = [
  {
    id: 1,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      {
        id: "a",
        text: "München",
        correct: false,
      },
      {
        id: "b",
        text: "Berlin",
        correct: true,
      },
      {
        id: "c",
        text: "Hamburg",
        correct: false,
      },
      {
        id: "d",
        text: "Hannover",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Was ist die Hauptstadt von Frankreich?",
    answers: [
      {
        id: "a",
        text: "München",
        correct: false,
      },
      {
        id: "b",
        text: "Berlin",
        correct: true,
      },
      {
        id: "c",
        text: "Hamburg",
        correct: false,
      },
      {
        id: "d",
        text: "Hannover",
        correct: false,
      },
    ],
  },
];

// let currentQuestion = null;
let currentQuestion;
let currentQuestionPointer = -1;

function renderQuestion(question) {
  const questionDiv = document.createElement("div");
  questionDiv.id = question.id;
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("div");
  questionTitle.classList.add("question");

  questionTitle.appendChild(document.createTextNode(question.qestion));

  const questionAnswers = document.createElement("div");
  questionAnswers.classList.add("question-answers");

  question.answers.forEach((answer) => {
    const answerDiv = document.createElement("button");
    answerDiv.classList.add(answer);
    answerDiv.appendChild(document.createTextNode(answer.text));
    questionAnswers.appendChild(answerDiv);
  });

  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(questionAnswers);

  document.getElementById("display-question").appendChild(questionDiv);
}

function nextQuestion() {
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id)).remove();
  }

  if (currentQuestionPointer + 1 < questions.length) {
    currentQuestionPointer++;
    currentQuestion = questions[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = questions[currentQuestionPointer];
  }

  renderQuestion(currentQuestion);
}

function validate(answerId) {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });

  if (correctAnswer.id === answerId) {
    alert("richtig");
    document.getElementById(answerId).classList.add("correct");
  } else {
    alert("falsch");
    document.getElementById(answerId).classList.add("incorrect");
    document.getElementById(correctAnswerId).classList.add("correct");
  }
}

function showSolution() {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  document.getElementById(correctAnswerId).classList.add("correct");
}
