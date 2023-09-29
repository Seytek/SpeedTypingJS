"use strict";

// Global variables
let time = 60; // how much time do we have 
let score = 0;
let isPlaying; // when game is over this should be false

// DOM elements
const quoteInput = document.querySelector('.input');
const timer = document.querySelector('.timer');
const restartBtn = document.querySelector('.restart');
const text = document.querySelector('.text');
const finalScore = document.querySelector('.score');

const quotes = [
	'red'
	// "We do not want merely to see beauty. We want something else which can hardly be put into words — to be united with the beauty we see, to pass into it, to receive it into ourselves.",
	// "If I find a cow turd on my front steps, I'm not satisfied knowing that I'll be mentally prepared to find some future cow turd. I want to shovel that turd onto my garden and hope the cow returns every week so I never have to buy fertilizer again. Failure is a resource that can be managed.",
	// "Negative thoughts compound. The more you think of yourself as worthless, stupid, or ugly, the more you condition yourself to interpret life that way. You get trapped in a thought loop.",
	// "Nothing other people do is because of you. It is because of themselves. All people live in their own dream, in their own mind; they are in a completely different world from the one we live in. When we take something personally, we make the assumption that they know what is in our world, and we try to impose our world on their world.",
	// "If you want to know your past look into your present conditions. If you want to know your future look into your present actions.",
	// "I’ve never been interested in pursuing a normal life. There are enough people doing that. More growth and discovery seems to happen when I’m uncomfortable.",
	// "On the mountains of truth you can never climb in vain: either you will reach a point higher up today, or you will be training your powers so that you will be able to climb higher tomorrow."
];




// // Restart button
// restartBtn.addEventListener('click', () => {
// 	isPlaying = true;
// 	time = 60;
// 	init();
// });



// Initialize game
function init () {
	// Load quote from array
	showQuote();
	// Check input with quote
	quoteInput.addEventListener('input', matchWords);
	// Call countdown every second
	setInterval(countdown, 1000); // in setInterval we don't use the brackets for functions!!!
}
init();


// Matching with input
function matchWords () {
	if (quoteInput.value === text.innerText) {
		console.log('good');
	}
}

// Show quote
function showQuote () {
	// Generate random index
	const randomIndex = Math.floor(Math.random() * quotes.length);
	// Output our random quote to .text
	text.innerText = quotes[randomIndex];
}

// Countdown timer
function countdown () {
	// Make sure time is not run out
	if (time > 0) {
		// Decrement time
		time--;
	} else if (time === 0) {
		isPlaying = false;
	}
	// Show time
	timer.innerHTML = time;
}











































































// const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
// const quoteText = document.querySelector('.quote');

// function getRandomQuote() {
//     fetch(RANDOM_QUOTE_API_URL)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         return data.content;
//     });
// }

// async function renderNewQuote() {  //when we will get data from getRandomQuote it will be stored in quote var
//     const quote = await getRandomQuote();
//     quoteText.innerText = quote;
// }

// renderNewQuote();





// const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
// 	}
// };
// const quoteText = document.querySelector('.quote');

// async function renderNewQuote() {  //when we will get data from getRandomQuote it will be stored in quote var
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//     quoteText.innerHTML = result;
// }

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }