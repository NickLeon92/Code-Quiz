// function main() {

var questionarray = ["1what does html stand for?", "2is joe biden a fascist?", "3wanna bomb the capitol?", "4I am sad"];
var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
var choices = document.querySelectorAll("li")
document.getElementById("list").style.display = "none"
document.getElementById("results").style.display = "none"
document.getElementById("username").style.display = "none"
document.getElementById("finalscore").style.display = "none"
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

    document.getElementById("playgame").style.display = "none";
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
    scoresignal = false;
    if(timesignal){
        secondsLeft=secondsLeft-3;
    }

    if (newgame) {
        stoptime = false;
        setTime()
    }
}


first.addEventListener("click", choice1)

second.addEventListener("click", choice1)

third.addEventListener("click", choice1)

fourth.addEventListener("click", choice1 )

function choice1() {
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
    stoptime = true;
    secondsLeft = 30;
    namedisplay.textContent="You're done. Score: " + score;
    document.getElementById("list").style.display = "none";
    document.getElementById("username").style.display = "block"
    document.getElementById("question").style.display = "none"
    // scoredisplay = localStorage.setItem(score)
    // score = 0;
    newgame = true;
    // timeEl.style.display = "none"
    // play();
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
   
      timeEl.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        
        clearInterval(timerInterval);
        
        return endgame();
      }
      if(stoptime){
        clearInterval(timerInterval)
      }
  
    }, 1000);
  }

  
  

  captureprevious()

function captureprevious() {
      var storednamelist = JSON.parse(localStorage.getItem("namelist"));
    // var storednamelist = [document.getElementById("tester").textContent]
    console.log(storednamelist)
    if (storednamelist !== null) {
        namelist = storednamelist;
    }
}


  

  submitname.addEventListener("click", function(event) {
    var nametext = inputname.value.trim()
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
    document.getElementById("namedisplay").style.display =  "none"
    document.getElementById("tester").style.display = "block"
    namedisplay.textContent = inputname
    finalscore.textContent = "final score: " + score;
    tester.textContent = localStorage.getItem("namelist")
    score = 0;
    // localStorage.setItem
})


reset.addEventListener("click", function(event) {
    localStorage.clear()
    tester.textContent = ""
})