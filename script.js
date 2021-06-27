// hides elements from starting screen
document.getElementById("list").style.display = "none"
document.getElementById("results").style.display = "none"
document.getElementById("username").style.display = "none"
document.getElementById("finalscore").style.display = "none"
document.getElementById("playagain").style.display = "none"
document.getElementById("view").style.display = "none"
//store variable site content as independent variables
let namedisplay = document.getElementById("namedisplay")
var choices = document.querySelectorAll("li")
var scoreboard = document.querySelector("#scoreboard")
var question = document.getElementById("question")
var timeEl = document.getElementById("time")
let inputname = document.querySelector("#name")
//initial declaration of question, answers and usernames arrays
var questionarray = ["1. What does html stand for?", "2. Where would you reference an external CSS stylesheet in the html file?", "3. Which element would you use to create a numbered list of items?", "4. Which javascript  method adds one or more elements to the end of an array?", "5. How would you call the value stored in following: storage.setItem(keyName, keyValue);"];
var answers = [["HyperText Markup Language", "HelperText Marker Language", "HyperText Matrix Language", "HelperText Meter Letter"], ["<head>", "<body>", "anywhere", "an element attribute"], ["<ol>", "<ul>", "<header>", "<aside>"], [".push()", ".splice()", ".join()", ".pop()"], ["getItem(keyName)", "getItem(keyValue)", "getElementbyID(keyName)", "getAttribute(keyName)"]];
var namelist = [];
//initializes logic gates and counters for game events
let call = false;
let scoresignal = false;
let timesignal = false;
let newgame = true;
let stoptime = false;
let t = true
let score = 0;
let i = 0;
var secondsLeft = 30
let wait = 0;
//this funtion is called initially by the play button
//this function initializes the game by displaying the question and randomizing the order of the answers
playgame.addEventListener("click", play)
function play() {
  wait = 0
  namelist = [];
  document.getElementById("instructions").style.display = "none"
  document.getElementById("remove").style.display = "none"
  document.getElementById("view").style.display = "block"
  document.getElementById("playgame").style.display = "none";
  document.getElementById("tester").style.display = "none"
  document.getElementById("question").style.display = "block"
  document.getElementById("scoreboard").style.display = "none"
  document.getElementById("playagain").style.display = "none"
//subtracts time when wrong question is signaled
  scoresignal = false;
  if (timesignal) {
    secondsLeft = secondsLeft - 3;
  }
//starts timer if it is a new game when this function is called
  if (newgame) {
    stoptime = false;
    setTime()
  }

  chosenq = questionarray[i];
  answers[i] = answers[i].sort(() => Math.random() - 0.5);
  document.getElementById("time").style.display = "block"
  document.getElementById("list").style.display = "block";
  document.getElementById("first").textContent = answers[i][0];
  document.getElementById("second").textContent = answers[i][1];
  document.getElementById("third").textContent = answers[i][2];
  document.getElementById("fourth").textContent = answers[i][3];
  question.textContent = chosenq;

  captureprevious()
}
//these are event listeners for the answer choices
first.addEventListener("click", choice1)

second.addEventListener("click", choice1)

third.addEventListener("click", choice1)

fourth.addEventListener("click", choice1)
//this function is called by the above event listenrs
//this function compares the selected element to the correct answer for the ith question
function choice1() {
  var answers = [["HyperText Markup Language", "HelperText Marker Language", "HyperText Matrix Language", "HelperText Meter Letter"], ["<head>", "<body>", "anywhere", "an element attribute"], ["<ol>", "<ul>", "<header>", "<aside>"], [".push()", ".splice()", ".join()", ".pop()"], ["getItem(keyName)", "getItem(keyValue)", "getElementbyID(keyName)", "getAttribute(keyName)"]];
  let firstchoice = this
  if (firstchoice.textContent == answers[i][0]) {
    document.getElementById("results").style.display = "block"
    document.getElementById("results").style.color = "green"
    document.getElementById("wl").textContent = "good job"
    scoresignal = true;
  }
  else {
    document.getElementById("results").style.display = "block"
    document.getElementById("results").style.color = "red"
    document.getElementById("wl").textContent = "wrong"
    timesignal = true;
  }
  nextquestion()
}
//this function is called after an answer is selected
//this function is the counter for the questions as well as the selection results
function nextquestion() {
  i++
  wait = 0;
  var idk = setInterval(hide, 100)
  //this function is called everytime a question is answered
  //this function hides the result section shortly after it is shown
  function hide() {
    if (wait > 10) {
      document.getElementById("results").style.display = "none"
      wait = 0
      t = true
      console.log("DONE")
      clearInterval(idk)
    }
    wait++
    console.log(wait)
  }

  if (!t) {
    clearInterval(idk)
  }
  t = false

  if (scoresignal) {
    score++
  }
  //calls the endgame function when the counter reaches the amount of questions in the quiz
  if (i == 5) {
    i = 0;
    return endgame()
  }
  newgame = false;

  play()
}
//this function is called to reset the variables and display elements needed to sumbit names
function endgame() {
  stoptime = true;
  call = true
  secondsLeft = 30;
  namedisplay.style.display = "block"
  namedisplay.textContent = "You're done. Score: " + score;
  document.getElementById("list").style.display = "none";
  document.getElementById("username").style.display = "block"
  document.getElementById("question").style.display = "none"
  document.getElementById("time").style.display = "none"
  newgame = true;
}
//this function serves as the timer for the game
function setTime() {
  var timerInterval = setInterval(function () {

    if (secondsLeft <= 0) {

      clearInterval(timerInterval);

      endgame();
    }
    if (stoptime) {
      clearInterval(timerInterval)

    }

    timeEl.textContent = secondsLeft + " second(s) left!";
    secondsLeft--;
  }, 1000);
}
//this function run to capture previosly stored scores if any were set
captureprevious()

function captureprevious() {
  var storednamelist = JSON.parse(localStorage.getItem("namelist"));
  if (storednamelist !== null) {
    namelist = storednamelist;
  }
}

//this function is called by the submit button
//this funtion builds the highscores array as well displays it
submitname.addEventListener("click", function (event) {
  var nametext = inputname.value.trim()
  if (nametext === "") {

    nametext = "-------"
  }
  event.preventDefault();
  namelist.push(nametext + " - " + score)
  localStorage.setItem("namelist", JSON.stringify(namelist));
  document.getElementById("username").style.display = "none"
  document.getElementById("results").style.display = "none"
  document.getElementById("question").style.display = "none"
  document.getElementById("finalscore").style.display = "none"
  document.getElementById("namedisplay").style.display = "none "
  document.getElementById("tester").style.display = "block"
  document.getElementById("playagain").style.display = "block"
  namedisplay.textContent = inputname
  finalscore.textContent = "final score: " + score;
  tester.textContent = "HIGHSCORES"
  render()

  score = 0;
  i = 0;
})
//this fuction renders the highscores chart by building the username matrix
function render() {
  scoreboard.innerHTML = "";
  stoptime = true;
  newgame = true;

  document.getElementById("view").style.display = "none"
  document.getElementById("list").style.display = "none";
  document.getElementById("question").style.display = "none"
  document.getElementById("time").style.display = "none"
  document.getElementById("playagain").style.display = "none"
  //if the highscores are called in the middle of the game
  if (call) {
    document.getElementById("playagain").style.display = "block"
  }
  else {
    document.getElementById("playagain").style.display = "none"
  }
  tester.textContent = "HIGHSCORES"
  document.getElementById("scoreboard").style.display = "block"
  if (namelist.length === 0) {
    scoreboard.textContent = "no scores tracked"
  }
  for (var i = 0; i < namelist.length; i++) {
    var entry = namelist[i];

    var li = document.createElement("li");
    li.textContent = entry
    li.setAttribute("data-index", i);


    scoreboard.appendChild(li);
  }
}
render()
//this function calls the highscores during the middle of a game or in the submit name portion
view.addEventListener("click", callhs)
function callhs() {
  document.getElementById("tester").style.display = "block"
  tester.textContent = "HIGHSCORES"
  call = true
  render()
}

//this function resets the scoreboard at any time
reset.addEventListener("click", function (event) {
  localStorage.clear()
  namelist = []
  scoreboard.textContent = "play again to save a score!"
})


//this fuction starts the whole game over again 
playagain.addEventListener("click", function (event) {
  timesignal = false;
  newgame = true
  secondsLeft = 30;
  i = 0;
  score = 0;
  play()
})