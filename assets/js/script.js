var time = 12
var score = ""
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
//if (time >= 0) {

var round1 =
  document.getElementById("questions").textContent = questions[0]
buttonAEL.textContent = answerOne[0]
buttonBEL.textContent = answerOne[1]
buttonCEL.textContent = answerOne[2]
buttonDEL.textContent = answerOne[3]

//correct answer
// if (addEventListener("click", buttonAEL)) {
//   score = score + 1,
//     console.log(score),
// }


// //incorrect answer
// else (addEventListener("click", buttonBEL, buttonCEL, buttonDEL)){
//   time = time - 2;
// }

var round2 =
  document.getElementById("questions").innerHTML = questions[1];
buttonAEL.textContent = answerTwo[0]
buttonAEL.textContent = answerTwo[1]
buttonAEL.textContent = answerTwo[2]
buttonAEL.textContent = answerTwo[3]
