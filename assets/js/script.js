var time = 12;
var remainingTime = "";
var score = "";
var buttonQel = document.getElementById("questions");
var buttonAEL = document.getElementById("answerA");
var buttonBEL = document.getElementById("answerB");
var buttonCEL = document.getElementById("answerC");
var buttonDEL = document.getElementById("answerD");
var answersEl = document.getElementById("answers");
var startBtn = document.getElementById("startBtn");
var timerEL = document.getElementById("timer");
var name = "";

// var questions = ["Inside which HTML element do we put the JavaScript?", "What is not a  JavaScript Primitive Data Type?", "JavaScript is a _____ language?",
//   "Which of the following methods can be used to display data?", "How can a data type be declared to be a constant type?"]

// var answerOne = ["<javascript>", "<scripting>", "<js>", "<script>"]
// var answerTwo = ["String", "Boolean", "Array", "Number"]
// var answerThree = ["Object-Based", "Object-Oriented", "Procedural", "Foreign"]
// var answerFour = ["document.write()", "console.log()", "window.alert()", "All of the above"]
// var answerFive = ["var", "const", "constant", "let"]


document.getElementById("startBtn").addEventListener("click", function () {
  startQuiz();
});

var qAObj = [{
  question: 'Inside which HTML element do we put the JavaScript?',
  answers: ["<javascript>", "<scripting>", "<js>", "<script>"],
  correctAnswer: "<javascript>",
},
{
  question: 'What is not a  JavaScript Primitive Data Type?',
  answers: ['String", "Boolean", "Array", "Number'],
  correctAnswer: 'Array',
},
{
  question: "JavaScript is a _____ language?",
  answers: ["Object-Based", "Object-Oriented", "Procedural", "Foreign"],
  correctAnswer: "Object-Based",

},
{
  question: "Which of the following methods can be used to display data?",
  answers: ["document.write()", "console.log()", "window.alert()", "All of the above"],
  correctAnswer: "All of the above",

},
{
  question: "How can a data type be declared to be a constant type?",
  answers: ["var", "const", "constant", "let"],
  correctAnswer: "const"
}];


var currentQuestionIndex = 0

function startQuiz() {
  remainingTime = time;
  valId = setInterval(startTime, 1000);
  setQandA();

};

function setQandA() {
  var currentQuestion = qAObj[currentQuestionIndex];

  buttonQel.textContent = currentQuestion.question;

  buttonAEL.textContent = qAObj[currentQuestionIndex].answers[0];
  buttonBEL.textContent = qAObj[currentQuestionIndex].answers[1];
  buttonCEL.textContent = qAObj[currentQuestionIndex].answers[2];
  buttonDEL.textContent = qAObj[currentQuestionIndex].answers[3];

  // currentQuestion.answers.forEach(function (choice, i) {
  //   var choiceBtn = document.createElement("button");
  //   choiceBtn.setAttribute("class", "choice");
  //   choiceBtn.setAttribute("value", choice);
  //   choiceBtn.textContent = i + choice;
  //   choiceBtn.onclick = checkAnswer;
  //   answersEl.appendChild(choiceBtn);

};


function checkAnswer(selectedAnswer) {
  var correctAnswer = qAObj[currentQuestionIndex].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    alert("Correct!");
    score += 5;
  }
  else {
    alert("Incorrect");
    time -= 5;
  };

  if (currentQuestionIndex === qAObj.length - 1) {
    alert("Your score is " + score);
    endQuiz();
  } else {
    currentQuestionIndex++;
    setQandA();
  };
};

//whether quiz continues 

//   if (currentIndex === qAObj.length - 1) {
//     alert("Your score is" + score);
//     endQuiz();
//   }
//   else {
//     currentIndex++;
//     setQandA();
//   };
// };

function endQuiz() {
  clearInterval(time)
};

function saveScore() {
  var name = document.getElementById("initial-input")
};

var startTime = function () {
  if (time > 0) {
    time -= 1;
    console.log(time);
    document.getElementById("timer").innerHTML = time;
  }
  else {
    clearInterval(valId);
    alert("time is up")
  }
}

// function finishQuiz() {
//   clearInterval(quizTimer);
//   document.getElementById("score-section").style.display = "block";
//   document.getElementById("question-section").style.display = "none";
//   document.getElementById("answer-section").style.display = "none";
//   document.getElementById("timer").style.display = "none";
// };

function saveScore() {
  var initials = document.getElementById("initial-input").value;
  localStorage.setItem(score, initials);
  startQuiz();
};


// valId = setInterval(startTime, 1000);




// startBtn.onClick = startQuiz;

//Event Listeners

//startBtnEl.addEventListener("click", startQuiz);

buttonAEL.addEventListener("click", function () {
  checkAnswer(buttonAEL.textContent);
});
buttonBEL.addEventListener("click", function () {
  checkAnswer(buttonBEL.textContent);
});
buttonCEL.addEventListener("click", function () {
  checkAnswer(buttonCEL.textContent);
});
buttonDEL.addEventListener("click", function () {
  checkAnswer(buttonDEL.textContent);
});
//initialBtnEl.addEventListener("click", saveScore);
