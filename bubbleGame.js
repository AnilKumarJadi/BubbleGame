var timer = 30;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function getNewhit() {
  hitrn = Math.floor(Math.random() * 30);
  document.querySelector("#hit").textContent = hitrn;
  /* if we can create a variable  inside the function we can use only , 
    but we can create a variable we can use where we can be want */
}

function makeBubble() {
  var culter = "";
  for (let i = 0; i <= 206; i++) {
    var rn = Math.floor(Math.random() * 30);
    culter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = culter;
  // math.randam()(0-1 value will be come 0.1,.2)like
  // Math.random()*10 it will be multiply above one
  // marth.floor if pass the number it will remove point values
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").innerText = timer;
    } 
    else {
      clearInterval(timerInt);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game Over.............!<h1>`;
    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (dtls) {
  /*console.log(Number(dtls.target.textContent)); 
     if we are not given Number it will print strings we can find out differnce between strings
     and number ,strings print in block color,numbers print in blue color in console.*/
  var clickTheNumber = Number(dtls.target.textContent);
  if (clickTheNumber === hitrn) {
    increaseScore();
    makeBubble();
    getNewhit();
  }
});

makeBubble();
// runTimer();
getNewhit();
