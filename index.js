const germany = ["Hamburg", "München", "Berlin", "Hannover"];
const hockey = [5, 4, 6, 11];

const question = [
  "Was ist die Hauptstadt von Deutschland?",
  "Wie viele Feldspieler gibt es beim Eishockey?",
];
const answers = [germany, hockey];

console.log(answers[0]);

const questionObject = {
  questionOne: {
    answerOne: anserOne,
  },
  answers: answers,
};

console.log(questionObject.answers);
