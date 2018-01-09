let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getCompChoice(){
const choices = ['r','p','s'];
const randomNumber = (Math.floor(Math.random() * 3));
return choices[randomNumber];
}

function convertToWord(letter){
	if(letter === 'r') return 'Rock';
	if(letter === 'p') return 'Paper';
	return 'Scissors';
}

function win(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `Your ${convertToWord(userChoice)} beats the Comp\'s ${convertToWord(computerChoice)}. You win!`;
	userChoice_div.classList.add('green');
	setTimeout(()=> userChoice_div.classList.remove('green'), 400);
}



function lose(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `The comp\'s ${convertToWord(computerChoice)} beats your ${convertToWord(userChoice)}. You Lose!`;
	userChoice_div.classList.add('red');
	setTimeout(()=> userChoice_div.classList.remove('red'), 400);


}
function draw(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `Your ${convertToWord(userChoice)} tie the comp's ${convertToWord(computerChoice)}. It's a draw!`;
	userChoice_div.classList.add('grey');
	setTimeout(()=> userChoice_div.classList.remove('grey'), 400);

}


function game(userChoice){
	const compChoice = getCompChoice();
	switch (userChoice + compChoice){
		case 'rs':
		case 'pr':
		case 'sp':
		win(userChoice, compChoice);
		break;
		case 'rp':
		case 'ps':
		case 'sr':
		lose(userChoice, compChoice);
		break;
		case 'pp':
		case 'rr':
		case 'ss':
		draw(userChoice, compChoice);
		break;
	} 
}

game('c')


function main(){
	rock_div.addEventListener('click', ()=>
		game('r'));
	

	paper_div.addEventListener('click',()=>
		game('p'));
	

	scissors_div.addEventListener('click',()=>
		game('s'));
	
	}



main();

