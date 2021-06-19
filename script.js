var questionarray = ["1what does html stand for?", "2is joe biden a fascist?", "3wanna bomb the capitol?", "4I am sad"];
var answers = [["1right", "wrong", "wrong", "wrong"], ["2right", "wrong", "wrong", "wrong"], ["3right", "wrong", "wrong", "wrong"], ["4right", "wrong", "wrong", "wrong"]];

document.getElementById("list").style.display = "none"
var question = document.getElementById("question")

playgame.addEventListener("click", function() {
    document.getElementById("playgame").style.display = "none";
    let questionText = document.getElementById("question");
    let n = Math.floor(Math.random() * questionarray.length);
    chosenq = questionarray[n];
    document.getElementById("list").style.display = "block"
    document.getElementById("first").textContent = answers[n][0];
    document.getElementById("second").textContent = answers[n][1];
    document.getElementById("third").textContent = answers[n][2];
    document.getElementById("fourth").textContent = answers[n][3];
    console.log(n);
    console.log(answers[n]);
    console.log(answers[n][n]);
    question.textContent = chosenq;
    questionText.textContent = chosenq;
    })