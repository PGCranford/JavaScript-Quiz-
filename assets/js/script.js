var time = 12
var score = ""
var buttonAEL = document.getElementById("answerA")
var buttonBEL = document.getElementById("answerB")
var buttonCEL = document.getElementById("answerC")
var buttonDEL = document.getElementById("answerD")

var question1 = "Inside which HTML element do we put the JavaScript?"
var question2 = "How do you create a function in JavaScript?"

function correctAnswer {
  [buttonAEL, buttonBEL, buttonCEL, buttonDEL]
}





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

function round1() {
  document.getElementById("questions").innerHTML = question1;
  buttonAEL.textContent = "javascript";
  buttonBEL.textContent = "scripting";
  buttonCEL.textContent = "js";
  buttonDEL.textContent = "script";

  //correct answer
  if (correct) {
    score = score + 1,
      console.log(score)

  }
  // incorrect answer
  else (
    time = time - 2
  );

};


function round2() {
  document.getElementById("questions").innerHTML = question2;
  document.getElementById("answer-A").innerHTML = "javascript";
  document.getElementById("answer-B").innerHTML = "scripting";
  document.getElementById("answer-C").innerHTML = "js";
  document.getElementById("answer-D").innerHTML = "script";





}
//}
