var mes = document.getElementById("message");
var submit = document.getElementById("submit");
var livcount = document.getElementById("livesNo");


var randomNumber = Math.round(Math.random() * 100);
var lives = 5;
var message;

submit.onclick = () => {
    console.log(randomNumber);
    var userinput = document.getElementById("number").value;
    lives--;
    if (randomNumber == userinput)
        location.href = "./win.html";
    else if (lives == 0)
        location.href = "./lose.html";
    else if (userinput > randomNumber)
        message = "Oops! Yoyr guess is too high!";
    else if (userinput < randomNumber)
        message = "Oops! Yoyr guess is too low!";

    mes.style.display = "inherit";
    mes.innerHTML = message;
    livcount.innerHTML = lives;


}