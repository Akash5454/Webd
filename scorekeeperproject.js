var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetbutton = document.querySelector("#reset"); 
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display")
var numInput = document.querySelector("input");
var num = document.getElementById("num");
var p1score = 0;
var p2score	= 0;
var gameOver = false;
var winScore = 5;


p1button.addEventListener("click", function(){
	if (!gameOver) {
	p1score = p1score + 1;
	if(p1score === winScore){
		p1display.classList.add("winner");
		gameOver = true;
	} 
	p1display.textContent = p1score;  

	}
});


p2button.addEventListener("click", function(){
	if (!gameOver) {
	p2score = p2score + 1;
	if(p2score === winScore){
		p2display.classList.add("winner");
		gameOver = true;
	} 
	p2display.textContent = p2score; 
	}
});


numInput.addEventListener("change", function(){
	num.textContent = numInput.value;
	winScore = Number(numInput.value);
	resetFunc();
});


resetbutton.addEventListener("click", function(){
	resetFunc();
});


function resetFunc(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}