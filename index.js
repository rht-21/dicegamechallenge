var getName1 = prompt("Enter Player 1 Name");
var getName2 = prompt("Enter Player 2 Name");
document.querySelectorAll("p")[0].textContent = getName1;
document.querySelectorAll("p")[1].textContent = getName2;


//Image 1
var RandomNumber1 = Math.floor((Math.random()*6) + 1);
var RandomDiceImageSource1 = "images/" + "dice" + RandomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", RandomDiceImageSource1);
//Image 2
var RandomNumber2 = Math.floor((Math.random()*6) + 1);
var RandomDiceImageSource2 = "images/" + "dice" + RandomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", RandomDiceImageSource2);

//Now Who Wins?
if(RandomNumber1>RandomNumber2)
  document.querySelector("h1").textContent = getName1 +" Wins!";

else if(RandomNumber1<RandomNumber2)
  document.querySelector("h1").textContent = getName2 +" Wins!";

else
  document.querySelector("h1").textContent = "Its a Draw!";
