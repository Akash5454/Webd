var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square")
var picked = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messegeDisplay = document.querySelector("#messege");
var h1 = document.querySelector("h1");
var newButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

// Pressing Easy Button Logic
easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
			else{
				squares[i].style.display = "none";
			}
	}
});

// Pressing Hard Button Logic
hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}		
})

// Pressing New Button Logic
newButton.addEventListener("click", function(){
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	picked = pickColor(); 
	colorDisplay.textContent = picked; 
	this.textContent = "New Button"
	messegeDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});
colorDisplay.textContent = picked;

// Winn Or Lose Logic
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
	var clickedColor = this.style.backgroundColor;
	if(clickedColor === picked){
		messegeDisplay.textContent = "Correct!!";
		changedColor(clickedColor);
		h1.style.backgroundColor = clickedColor;
		newButton.textContent = "Play Again?"
	} 
	else{
		this.style.backgroundColor = "#232323";
		messegeDisplay.textContent = "Try Again";
		}
	});
} 

function changedColor(color){
	 for (var i = 0; i < squares.length; i++) {
	 	squares[i].style.backgroundColor = color;
	 }
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random];
} 

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
} 

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")" ; 
}
 