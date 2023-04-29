console.log("hello world");

//function square(num1) {
    //return ("The square of " + num1 + " is " + (num1 * num1));
//}

function square(num) { 
    const squaredNumber = num * num;
    return "The square of " + num + " is " + squaredNumber;
}

//num is the input. the first and second function do the same thing but the second one is BETTER/EASIER
//let and const are both variables, BUT the value of let can be changed; the value of const is NOT changeable
let score = 100;
let scoreChange;
const scoreElement = document.getElementById("score");
const circle = document.getElementById("circle");  //this is a function that gets the element with the id circle
const timeElement = document.getElementById("time");
const scorePopupElement = document.getElementById("score-popup");
let circlePlacedAt;
let overThreeSecondTimer;
let replaceCircleTimer;

function placeCircleRandomly() {
    circle.style.top = Math.random() * (window.innerHeight - 50) + "px";
    circle.style.left = Math.random() * (window.innerWidth - 50) + "px";
    circle.style.background = "blue";

    replaceCircleTimer = setTimeout(didntClickAnything, 3500);
    overThreeSecondTimer = setTimeout(turnCircleRed, 3000);
    circlePlacedAt = Date.now();    
}

function didntClickAnything(){
    decreaseScore();
    updateScore();
    placeCircleRandomly();
    console.log("hehe sux to suck");
}

function handleCircleClick(event) {
    console.log(event);
    const circleClickedAt = Date.now();
    const timeToClickCircle = (circleClickedAt - circlePlacedAt);
    timeElement.innerText = "You took " + (timeToClickCircle / 1000) + " seconds!"; 
    
    event.stopPropagation();
    console.log("clicked circle!");
    clearTimeout(replaceCircleTimer);
    clearTimeout(overThreeSecondTimer);
    placeCircleRandomly();
    increaseScore(timeToClickCircle);
    updateScore(event);
}

function handleBodyClick(event) {
    console.log(event.clientX,event.clientY);
    clearTimeout(replaceCircleTimer);
    clearTimeout(overThreeSecondTimer);
    decreaseScore();
    updateScore(event);
    placeCircleRandomly();
    console.log("clicked body!");
}

function increaseScore(timeToClickCircle) {
    if (timeToClickCircle < 1000){
        score = score + 30;
        scoreChange = 30;
    } else if (timeToClickCircle < 2000){
        score = score + 20;
        scoreChange = 20;
    } else if (timeToClickCircle < 3000){
        score = score + 10;
        scoreChange = 10;
    } else {
        score = score + 5;
        scoreChange = 5;
    };

    console.log("score " + score);
}

function decreaseScore() {
    score = score - 10;
    scoreChange = -10;
}

function updateScore(event) {
    scoreElement.innerText = score;
    scorePopupElement.innerText = scoreChange;

    if (event===undefined){
        scorePopupElement.style.top  = 351;
        scorePopupElement.style.left = 351;
    } else {
        scorePopupElement.style.top = event.clientY - 30;
        scorePopupElement.style.left = event.clientX - 18;
    }

}

function updateTime() {
    timeElement.innerText = time;
}

function turnCircleRed() {
    //console.log("Arr I be RED");
    circle.style.background = "red";
}



circle.addEventListener("click", handleCircleClick);
document.body.addEventListener("click", handleBodyClick);
placeCircleRandomly();
updateScore();




