const answerButtonDiv = document.createElement("div");
answerButtonDiv.classList.add("answer-item", "btn", "btn-hover");

const answerButtonLeftDiv = document.createElement("div");
answerButtonLeftDiv.classList.add("left-container");

const answerButtonRightDiv = document.createElement("div");
answerButtonRightDiv.classList.add("right-container");

const answerButtonSpanOne = document.createElement("span");
answerButtonSpanOne.classList.add("answer-attribute");
answerButtonSpanOne.appendChild(document.createTextNode("A"));

const answerButtonSpanTwo = document.createElement("span");
answerButtonSpanTwo.classList.add("answer-attribute");
answerButtonSpanTwo.appendChild(document.createTextNode("Hannover"));

const answerButtonImg = document.createElement("img");
answerButtonImg.classList.add("checkbox");
answerButtonImg.src = "img/checkbox.png";

answerButtonDiv.appendChild(answerButtonLeftDiv);
answerButtonDiv.appendChild(answerButtonRightDiv);
answerButtonLeftDiv.appendChild(answerButtonSpanOne);
answerButtonLeftDiv.appendChild(answerButtonSpanTwo);
answerButtonRightDiv.appendChild(answerButtonImg);

document.getElementById("display-question").appendChild(answerButtonDiv);
