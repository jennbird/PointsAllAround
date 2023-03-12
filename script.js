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
const scoreElement = document.getElementById("score");
const circle = document.getElementById("circle");  //this is a function that gets the element with the id circle
let circlePlacedAt;
const timeElement = document.getElementById("time");


function placeCircleRandomly() {
    circle.style.top = Math.random() * (window.innerHeight - 50) + "px";
    circle.style.left = Math.random() * (window.innerWidth - 50) + "px";

    circlePlacedAt = Date.now();    
}

function handleCircleClick(event) {
    const circleClickedAt = Date.now();
    const timeToClickCircle = (circleClickedAt - circlePlacedAt);
    timeElement.innerText = "You took " + (timeToClickCircle / 1000) + " seconds!"; 

    event.stopPropagation();
    console.log("clicked circle!");
    placeCircleRandomly();
    increaseScore();
    updateScore();

}

function increaseScore() {
    score = score + 30;
    console.log("score " + score);
}

function decreaseScore() {
    score = score - 10;
}

function updateScore() {
    scoreElement.innerText = score;
}

function updateTime() {
    timeElement.innerText = time;
}


function handleBodyClick() {
    decreaseScore();
    placeCircleRandomly();
    updateScore();
    console.log("clicked body!");
}

circle.addEventListener("click", handleCircleClick);
document.body.addEventListener("click", handleBodyClick);
placeCircleRandomly();
updateScore();




