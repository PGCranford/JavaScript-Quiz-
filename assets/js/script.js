//function startQuiz() {

//create start button
//var startBtn =
//set timer 
const startingSeconds = .01;
let time = startingSeconds;
const countdownEl = document.getElementById("startTime");


setInterval(updateCountdown, 1000);

function updateCountdown() {

  time -= 1;

  countdownEl.innerHTML = `${seconds}`;

  // const seconds = Math.floor(time);


  // seconds = seconds < 10 ? "0" + seconds : seconds;


  // countdownEl.innerHTML = `${minutes} : ${seconds}`;
  // time--;

};








// function startTime(duration, display) {
//   var timer = duration, seconds;
//   setInterval(function () {
//     seconds = parseInt(timer, 60, 10);
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     var display = document.getElementById("startTime");
//     display.textContent = ("0" + seconds);
//   })
// }




//     if (--timer < 0) {

//       window.alert = ("Your time has expired!")
//     }



//   }, 1000);
// };












