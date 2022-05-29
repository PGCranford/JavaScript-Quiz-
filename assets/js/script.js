var time = 12
var remainingTime = ""
var score = ""
var buttonQel = document.getElementById("questions")
var buttonAEL = document.getElementById("answerA")
var buttonBEL = document.getElementById("answerB")
var buttonCEL = document.getElementById("answerC")
var buttonDEL = document.getElementById("answerD")

var questions = ["Inside which HTML element do we put the JavaScript?", "What is not a  JavaScript Primitive Data Type?", "JavaScript is a _____ language?",
  "Which of the following methods can be used to display data?", "How can a data type be declared to be a constant type?"]

var answerOne = ["<javascript>", "<scripting>", "<js>", "<script>"]
var answerTwo = ["String", "Boolean", "Array", "Number"]
var answerThree = ["Object-Based", "Object-Oriented", "Procedural", "Foreign"]
var answerFour = ["document.write()", "console.log()", "window.alert()", "All of the above"]
var answerFive = ["var", "const", "constant", "let"]



document.getElementById("startBtn").addEventListener("click", function () {
  startTime;

  var qAObj = [{
    question: questions[0],
    answers: answerOne,
    correctAnswer: answerOne[0]
  },
  {
    question: questions[1],
    answers: answerTwo,
    correctAnswer: answerTwo[1],
  },
  {
    question: questions[2],
    answers: answerThree,
    correctAnswer: answerThree[0],

  },
  {
    question: questions[3],
    answers: answerFour,
    correctAnswer: answerFour[3],

  },
  {
    question: questions[4],
    answers: answerFive,
    correctAnswer: answerFive[1],
  }
  ];

  function startQuiz() {
    remainingTime = time;

  };

  function setQandA() {
    buttonQel.textContent = qAObj[currentIndex].question[0];
    answerOne.textContent = qAObj[currentIndex].answers[0];
    answerOne.textContent = qAObj[currentIndex].answers[1];
    answerOne.textContent = qAObj[currentIndex].answers[2];
    answerOne.textContent = qAObj[currentIndex].answers[3];
    answerOne.textContent = qAObj[currentIndex].answers[4];
  };

  function checkAnswer(selectedAnswer) {
    var correctAnswer = qAObj[currentIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
      alert("Correct!");
      score += 5;
    }
    else {
      alert("Incorrect");
      time -= 5;
    };


  }

  var startTime = function () {
    if (time > 0) {
      time -= 1;
      console.log(time);
      document.getElementById("timer").innerHTML = time;
    }
    else {
      clearInterval(intervalId);
      alert("time is up")
    }

  }
  valId = setInterval(startTime, 1000);

});









