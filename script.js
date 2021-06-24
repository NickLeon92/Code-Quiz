// function main() {

  let call = false;

var questionarray = ["1what does html stand for?", "2is joe biden a fascist?", "3wanna bomb the capitol?", "4I am sad"];
var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
var choices = document.querySelectorAll("li")
document.getElementById("list").style.display = "none"
document.getElementById("results").style.display = "none"
document.getElementById("username").style.display = "none"
document.getElementById("finalscore").style.display = "none"
document.getElementById("playagain").style.display = "none"
document.getElementById("view").style.display = "none"
var scoreboard = document.querySelector("#scoreboard")
var question = document.getElementById("question")
let n = Math.floor(Math.random() * questionarray.length);
let score =0;
let scoresignal = false;
let timesignal = false;
let i=0;
let newgame=true;
var timeEl = document.getElementById("time")
var secondsLeft = 30
let stoptime = false;
let namedisplay = document.getElementById("namedisplay")
let inputname = document.querySelector("#name")
var namelist=[];

// let finalscore = document.getElementById("finalscore")

 
playgame.addEventListener("click", play)
function play() {
  document.getElementById("view").style.display = "block"
  document.getElementById("instructions").style.display = "none"
  document.getElementById("remove").style.display = "none"

  namelist = [];
  document.getElementById("playgame").style.display = "none";
  document.getElementById("tester").style.display = "none"
  document.getElementById("question").style.display = "block"
  document.getElementById("scoreboard").style.display = "none"
  document.getElementById("playagain").style.display = "none"

  scoresignal = false;
  if (timesignal) {
    secondsLeft = secondsLeft - 3;
    (console.log(secondsLeft))
  }

  if (newgame) {
    stoptime = false;
    setTime()
  }

  document.getElementById("time").style.display = "block"
  console.log(questionarray)
  console.log(i)
  console.log(answers[n])
  chosenq = questionarray[i];
  answers[i] = answers[i].sort(() => Math.random() - 0.5);
  console.log(answers[n])
  document.getElementById("list").style.display = "block";
  document.getElementById("first").textContent = answers[i][0];
  document.getElementById("second").textContent = answers[i][1];
  document.getElementById("third").textContent = answers[i][2];
  document.getElementById("fourth").textContent = answers[i][3];
  question.textContent = chosenq;

  captureprevious()
}


first.addEventListener("click", choice1)

second.addEventListener("click", choice1)

third.addEventListener("click", choice1)

fourth.addEventListener("click", choice1 )

function choice1() {
  // this.style.backgroundcolor = "white"
        var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
        let firstchoice = this
        console.log(firstchoice.textContent)
        console.log(answers[i][0])
        if (firstchoice.textContent == answers[i][0]) {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "good job"
            scoresignal = true;
        }
        else {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "you suck"
            timesignal = true;
        }
        nextquestion()
    } 

function nextquestion() {
    // var questionarray = ["1.what does html stand for?", "2.is joe biden a fascist?", "3.wanna bomb the capitol?", "4.I am sad"]; 
    // document.getElementById("results").style.display = "none"
    console.log(i)
    i++
    if(scoresignal){
        score++
    }
    if(i==4){
        i=0;
        return endgame()
    }
    console.log(i)
    newgame = false;
    
    play() 
}

function endgame(){
  console.log("UMMMMM")
    stoptime = true;
    call =true
    secondsLeft = 30;
    console.log(secondsLeft)
    namedisplay.style.display= "block"
    namedisplay.textContent="You're done. Score: " + score;
    document.getElementById("list").style.display = "none";
    document.getElementById("username").style.display = "block"
    document.getElementById("question").style.display = "none"
    document.getElementById("time").style.display = "none"
    // scoredisplay = localStorage.setItem(score)
    // score = 0;
    newgame = true;
    // timeEl.style.displ ay = "none"
    // play();
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() { 
      console.log(secondsLeft)
      console.log(secondsLeft)
      
      if(secondsLeft <= 0) {
        
        clearInterval(timerInterval);
        
        console.log("ummmm")
        endgame();
      }
      if(stoptime){
        clearInterval(timerInterval)
        
      }
      
      timeEl.textContent = secondsLeft + " seconds(s) left.";
      secondsLeft--;
    }, 1000);
  }

  
  

  captureprevious()

function captureprevious() {
      var storednamelist = JSON.parse(localStorage.getItem("namelist"));
    // var storednamelist = [document.getElementById("tester").textContent]
    console.log(storednamelist)
    if (storednamelist !== null) {
        namelist = storednamelist;
        console.log(namelist)
    }
}


  submitname.addEventListener("click", function(event) {
      var nametext = inputname.value.trim()
    if (nametext === "") {
        
        nametext = "-------"
      }
    event.preventDefault();
    // localStorage.setItem("score",score)
    namelist.push(nametext + " - " + score)
    localStorage.setItem("namelist", JSON.stringify(namelist));
    // captureprevious()
    // inputname = localStorage.getItem("name")
    // localStorage.getItem(score)
    // let inputname = document.getElementById("name").value
    // localStorage.setItem("namelist", namelist)
    document.getElementById("username").style.display = "none"
    document.getElementById("results").style.display = "none"
    document.getElementById("question").style.display = "none"
    document.getElementById("finalscore").style.display = "none"
    document.getElementById("namedisplay").style.display =  "none "
    document.getElementById("tester").style.display = "block"
    document.getElementById("playagain").style.display = "block"
    namedisplay.textContent = inputname
    finalscore.textContent = "final score: " + score;
    tester.textContent = "HIGHSCORES"
    render()

    score = 0;
    i=0;
    // localStorage.setItem
})

function render() {
    // Clear todoList element and update todoCountSpan
    scoreboard.innerHTML = "";
    stoptime = true;
    newgame = true;

    document.getElementById("view").style.display = "none"
    document.getElementById("list").style.display = "none";
    document.getElementById("question").style.display = "none"
    document.getElementById("time").style.display = "none"
    document.getElementById("playagain").style.display = "none"
    if (call){
      document.getElementById("playagain").style.display = "block"
    }
    else{
      document.getElementById("playagain").style.display = "none"
    }
    // document.getElementById("playagain").style.display = "block"
    tester.textContent = "HIGHSCORES"
    console.log(namelist.length)
    document.getElementById("scoreboard").style.display = "block"
    // Render a new li for each todo
    if(namelist.length===0){
      scoreboard.textContent = "no scores tracked"
    }
    for (var i = 0; i < namelist.length; i++) {
      var entry = namelist[i];
      console.log("test2")
  
      var li = document.createElement("li");
      li.textContent = entry
      li.setAttribute("data-index", i);
  
      
      scoreboard.appendChild(li);
    }
  }
render()
view.addEventListener("click",callhs)
function callhs(){
  document.getElementById("tester").style.display ="block"
  tester.textContent = "HIGHSCORES"
  call =true
  render()
}


reset.addEventListener("click", function(event) {
    localStorage.clear()
    namelist = []
    scoreboard.textContent = "play again to save a score!"
    console.log(namelist)
})

playagain.addEventListener("click", function(event) {
  timesignal = false;
  newgame = true
  secondsLeft = 30;
  i=0;
  play()
    
    console.log(secondsLeft)
    
})