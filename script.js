// function main() {

var questionarray = ["1what does html stand for?", "2is joe biden a fascist?", "3wanna bomb the capitol?", "4I am sad"];
var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
var choices = document.querySelectorAll("li")
document.getElementById("list").style.display = "none"
document.getElementById("results").style.display = "none"
var question = document.getElementById("question")
let n = Math.floor(Math.random() * questionarray.length);
let score =0;
let scoresignal = false;
let i=0;
 
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
    answers[n] = answers[n].sort(() => Math.random() - 0.5);
    console.log(answers[n])
    document.getElementById("list").style.display = "block";
    document.getElementById("first").textContent = answers[n][0];
    document.getElementById("second").textContent = answers[n][1];
    document.getElementById("third").textContent = answers[n][2];
    document.getElementById("fourth").textContent = answers[n][3];
    question.textContent = chosenq;
    scoresignal = false;
}

// var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];

let check = true

first.addEventListener("click", choice1)
function choice1() {
        var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
        let firstchoice = document.getElementById("first")
        console.log(firstchoice.textContent)
        console.log(answers[n][0])
        if (firstchoice.textContent == answers[n][0]) {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "good job"
            scoresignal = true;
        }
        else {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "you suck"
        }
        nextquestion()
    } 


second.addEventListener("click", choice2)
function choice2() {
        var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
        let firstchoice = document.getElementById("second")
        console.log(firstchoice.textContent)
        console.log(answers[n][0])
        if (firstchoice.textContent == answers[n][0]) {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "good job"
            scoresignal = true;
        }
        else {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "you suck"
        }
        nextquestion()
    }

third.addEventListener("click", choice3)
function choice3() {
        var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
        let firstchoice = document.getElementById("third")
        console.log(firstchoice.textContent)
        console.log(answers[n][0])
        if (firstchoice.textContent == answers[n][0]) {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "good job"
            scoresignal = true;
        }
        else {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "you suck"
        }
        nextquestion();
    } 


fourth.addEventListener("click", choice4)
function choice4() {
        var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
        let firstchoice = document.getElementById("fourth")
        console.log(firstchoice.textContent)
        console.log(answers[n][0])
        if (firstchoice.textContent == answers[n][0]) {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "good job"
            scoresignal = true;
        }
        else {
            document.getElementById("results").style.display = "block"
            document.getElementById("wl").textContent = "you suck"
        }
        nextquestion();
    } 


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
    play()
}

function endgame(){
    question.textContent="You're done bitch"
    document.getElementById("list").style.display = "none"
    window.alert(score)
    score = 0;
    play();

}





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
    
 