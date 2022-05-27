var time = 12;
var questionEl = 
var question1 = "Inside which HTML element do we put the JavaScript?"
var question2 = "How do you create a function in JavaScript?"



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
  var intervalId = setInterval(startTime, 1000);

  if (startTime() === true) {

    //startQuiz = function () {

    document.getElementById("questions").innerHTML = question1

    //}
  }

});
