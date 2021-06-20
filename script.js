var questionarray = ["1what does html stand for?", "2is joe biden a fascist?", "3wanna bomb the capitol?", "4I am sad"];
var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
var choices = document.querySelectorAll("li")
document.getElementById("list").style.display = "none"
document.getElementById("next").style.display = "none"
document.getElementById("results").style.display = "none"
var question = document.getElementById("question")
let n = Math.floor(Math.random() * questionarray.length);

playgame.addEventListener("click", function() {
    document.getElementById("playgame").style.display = "none";
    console.log(answers[n])
    chosenq = questionarray[n];
    answers[n] = answers[n].sort(() => Math.random() - 0.5);
    console.log(answers[n])
    document.getElementById("list").style.display = "block";
    document.getElementById("first").textContent = answers[n][0];
    document.getElementById("second").textContent = answers[n][1];
    document.getElementById("third").textContent = answers[n][2];
    document.getElementById("fourth").textContent = answers[n][3];
    question.textContent = chosenq;
})

// var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];

first.addEventListener("click", function() {
    var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];
    let firstchoice = document.getElementById("first")
    console.log(firstchoice.textContent)
    console.log(answers[n][0])
    if (firstchoice.textContent  == answers[n][0]){
        document.getElementById("results").style.display = "block"
        document.getElementById("wl").textContent = "good job"
    }
    else{
        document.getElementById("results").style.display = "block"
        document.getElementById("wl").textContent = "you suck"
    }
})

