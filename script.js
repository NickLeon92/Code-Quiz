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
// let finalscore = document.getElementById("finalscore")

 
playgame.addEventListener("click", play)
function play() { 
    // if (newgame){
    //     newgame = false
    //     var questionarray = ["1what does html stand for?", "2is joe biden a fascist?", "3wanna bomb the capitol?", "4I am sad"];
    // }
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

// var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];

let check = true

first.addEventListener("click", choice1)
function choice1() {
        var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
        let firstchoice = document.getElementById("first")
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


second.addEventListener("click", choice1)
// function choice2() {
//         var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
//         let firstchoice = document.getElementById("second")
//         console.log(firstchoice.textContent)
//         console.log(answers[i][0])
//         if (firstchoice.textContent == answers[i][0]) {
//             document.getElementById("results").style.display = "block"
//             document.getElementById("wl").textContent = "good job"
//             scoresignal = true;
//         }
//         else {
//             document.getElementById("results").style.display = "block"
//             document.getElementById("wl").textContent = "you suck"
//             timesignal = true;
//         }
//         nextquestion()
//     }

third.addEventListener("click", choice1)
// function choice3() {
//         var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
//         let firstchoice = document.getElementById("third")
//         console.log(firstchoice.textContent)
//         console.log(answers[i][0])
//         if (firstchoice.textContent == answers[i][0]) {
//             document.getElementById("results").style.display = "block"
//             document.getElementById("wl").textContent = "good job"
//             scoresignal = true;
//         }
//         else {
//             document.getElementById("results").style.display = "block"
//             document.getElementById("wl").textContent = "you suck"
//             timesignal = true;
//         }
//         nextquestion();
//     } 


fourth.addEventListener("click", choice1)
// function choice4() {
//         var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
//         let firstchoice = document.getElementById("fourth")
//         console.log(firstchoice.textContent)
//         console.log(answers[i][0])
//         if (firstchoice.textContent == answers[i][0]) {
//             document.getElementById("results").style.display = "block"
//             document.getElementById("wl").textContent = "good job"
//             scoresignal = true;
//         }
//         else {
//             document.getElementById("results").style.display = "block"
//             document.getElementById("wl").textContent = "you suck"
//             timesignal = true;
//         }
//         nextquestion();
//     } 


function nextquestion() {
    // var questionarray = ["1what does html stand for?", "2is joe biden a fascist?", "3wanna bomb the capitol?", "4I am sad"]; 
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
    question.textContent="You're done. Score: " + score;
    document.getElementById("list").style.display = "none";
    document.getElementById("username").style.display = "block"
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
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        return endgame();
      }
      if(stoptime){
        clearInterval(timerInterval)
      }
  
    }, 1000);
  }



  submitname.addEventListener("click", function(event) {
    event.preventDefault();
    // inputname = localStorage.getItem("name")
    // localStorage.getItem(score)
    let inputname = document.getElementById("name").value
    localStorage.setItem("finalscore", score)
    localStorage.setItem("namedisplay", inputname)
    document.getElementById("username").style.display = "none"
    document.getElementById("results").style.display = "none"
    document.getElementById("question").style.display = "none"
    document.getElementById("finalscore").style.display = "block"
    document.getElementById("namedisplay").style.display =  "block"
    namedisplay.textContent = inputname
    finalscore.textContent = "final score: " + score;
    score = 0;
    // localStorage.setItem
})






    // console.log(questionarray)
    // console.log(n)
    // questionarray.splice(n,1)
    // console.log(questionarray.length)
    // console.log(questionarray)
    // if (questionarray.length>2){
    //     play()
    // n = Math.floor(Math.random() * questionarray.length);
    // }
    // else if(questionarray.length<=2 && questionarray>0){
    //     console.log("length2")
    //     n=0
    //     play()
    // }
    // else {
    //     console.log("length???")
    //     n = Math.floor(Math.random() * questionarray.length)
    //     questionarray = ["1what does html stand for?", "2is joe biden a fascist?", "3wanna bomb the capitol?", "4I am sad"]; 
    //     play()
    // }
    
 