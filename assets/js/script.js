var time = 12
var score = ""
var buttonAEL = document.getElementById("answerA")
var buttonBEL = document.getElementById("answerB")
var buttonCEL = document.getElementById("answerC")
var buttonDEL = document.getElementById("answerD")

var questions = ["Inside which HTML element do we put the JavaScript?", "What is not a Primitive JavaScript?", "JavaScript is a _____ language?",
  "Which of the following methods can be used to display data?", "How can a data type be declared to be a constant type?"]

var answerOne = ["<javascript>", "<scripting>", "<js>", "<script>"]

document.getElementById("startBtn").addEventListener("click", function () {
  startTime;

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
  round1();
});


//if (time >= 0) {

var round1 = function () {
  document.getElementById("questions").innerHTML = questions[0]
  buttonAEL.textContent = answerOne[0]
  buttonBEL.textContent = answerOne[1]
  buttonCEL.textContent = answerOne[2]
  buttonDEL.textContent = answerOne[3]

  //correct answer
  addEventListener("click", buttonAEL), function () {
    score = score + 1;
    console.log(score);

  };
  // incorrect answer
  // else (
  //   time = time - 2
  // );


};


var round2 = function () {
  document.getElementById("questions").innerHTML = question2;
  document.getElementById("answer-A").innerHTML = "javascript";
  document.getElementById("answer-B").innerHTML = "scripting";
  document.getElementById("answer-C").innerHTML = "js";
  document.getElementById("answer-D").innerHTML = "script";


}
