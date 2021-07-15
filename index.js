var random = Math.random();
var randomNumber1 = random * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log( "Random 1: " + randomNumber1);

var random2 = Math.random();
var randomNumber2 = random2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log( "Random 2: " + randomNumber2);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML= "Player 2 Wins";
}else{
  document.querySelector("h1").innerHTML = "Draw !";
}
