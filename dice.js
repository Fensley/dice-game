function gameplay(){

var randomNumber1 = Math.random()* 6;

var MathRoundrandom = Math.floor(randomNumber1 + 1);


var changingimg= "./images/dice"+MathRoundrandom+".png"

var image1change = document.querySelectorAll("img")[0].setAttribute("src" ,changingimg);




var ndomNumber1 = Math.random()* 6;

var MathRoundrando = Math.floor(ndomNumber1 + 1);

//var imag1 = document.querySelectorall("img")[0];

var changingim= "./images/dice"+MathRoundrando+".png"

var image1chang = document.querySelectorAll("img")[1].setAttribute("src" ,changingim)
//  MathRoundrando   MathRoundrandom


if ( MathRoundrandom >  MathRoundrando) {
  var player1= " player 1 win";
  document.querySelector("h1").innerHTML = player1;

}else if ( MathRoundrandom < MathRoundrando){
//player2= " player 2 win!";
document.querySelector("h1").innerHTML = " player 2 win!";

} else if (MathRoundrandom === MathRoundrando) {
  var draw = " Draw!";
  document.querySelector("h1").innerHTML = draw;
}
}