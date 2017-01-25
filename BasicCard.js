var inquirer = require("inquirer");

var i = 0;
var preguntas = [];
var respuestas = [];

var BasicCard = function(front, back) {
		this.front = front;
		this.back = back;
}

var questions = [{
	question: "What color does acid turn Litmus paper?",
	answer: "Red"
}, {
 	question: "What is the largest Scandinavian country?",
	answer: "Sweden"
}, {
 	question: "What was Mickey Mouse's original name?",
	answer: "Mortimer Mouse"
}, {
 	question: "Which metal do you get from bauxite?",
	answer: "Aluminum"
}, {
 	question: "What was the name of the Benedictine monk who legend has it invented Champagne?",
	answer: "Dom Perignon"
}];


function createCards() {
	for (i = 0; i < questions.length; i++) {
		var card = new BasicCard(questions[i].question, questions[i].answer);
		preguntas.push(card.front);
		respuestas.push(card.back);
	}
}

function displayFront() {
	for (i = 0; i < preguntas.length; i++) {
		// console.log(preguntas[i]);
	}
}

function displayBack() {
	for (i = 0; i < respuestas.length; i++) {
		// console.log(respuestas[i]);
	}
}

createCards();

displayFront();

displayBack();

console.log("");
console.log("=================================================================================================")
console.log("");
console.log("Card-1 FRONT: " + preguntas[0]);
console.log("");
console.log("Card-1 BACK: " + respuestas[0]);
console.log("");
console.log("=================================================================================================")
console.log("");
console.log("Card-2 FRONT: " + preguntas[1]);
console.log("");
console.log("Card-2 BACK: " + respuestas[1]);
console.log("");
console.log("=================================================================================================")
console.log("");
console.log("Card-3 FRONT: " + preguntas[2]);
console.log("");
console.log("Card-3 BACK: " + respuestas[2]);
console.log("");
console.log("=================================================================================================")
console.log("");
console.log("Card-4 FRONT: " + preguntas[3]);
console.log("");
console.log("Card-4 BACK: " + respuestas[3]);
console.log("");
console.log("=================================================================================================")
console.log("");
console.log("Card-5 FRONT: " + preguntas[4]);
console.log("");
console.log("Card-5 BACK: " + respuestas[4]);
console.log("");
console.log("=================================================================================================")























// var newCard = function() {
// 	if (count < 3) {
// 			inquirer.prompt([
// 	      {
// 	      	type: "input",
// 	        name: "question1",
// 	        message: card1.front,
// 	        choices: card1.back
// 	      },{
// 	      	type: "input",
// 	        name: "question2",
// 	        message: card2.front,
// 	        choices: card2.back
// 	      },{
// 	      	type: "input",
// 	        name: "question3",
// 	        message: card3.front,
// 	        choices: card3.back
// 	      },{
// 	      	type: "input",
// 	        name: "question4",
// 	        message: card4.front,
// 	        choices: card4.back
// 	      },{
// 	      	type: "input",
// 	        name: "question5",
// 	        message: card5.front,
// 	        choices: card5.back
// 	      }
// 	    ]).then(function(user) {

// 			  console.log(JSON.stringify(user, null, 2));

			  

// 	    });
// 	}
// 	else {
// 	    console.log("All questions asked");
// 	}
// }

// newCard();



// var newCard = function() {
// 	if (count < 3) {
// 			inquirer.prompt([
// 	      {
// 	      	type: "input",
// 	        name: "question",
// 	        message: card1.front,
// 	        choices: card1.back
// 	      },{
// 	      	type: "input",
// 	        name: "question",
// 	        message: card2.front,
// 	        choices: card2.back
// 	      }
// 	    ]).then(function(answers) {
// 	    	count++;
// 	    });

// 	}
// 	else {
// 	    console.log("All questions asked");
// 	}
// }



// function createCards() {
// 	for (i = 0; i < questions.length; i++){
// 		var card = new BasicCard(questions[i].question, questions[i].answer);
// 		preguntas.push(card.front);
// 		respuestas.push(card.back);
// 	}
// }

// function askQuestion() {
// 	for (i = 0; i < preguntas.length; i++) {

// 	}
// }

// createCards();



// var newCard = function() {
// 	if (count < 3) {
// 			inquirer.prompt([
// 	      {
// 	      	type: "input",
// 	        name: "question",
// 	        message: card1.front,
// 	        choices: card1.back
// 	      },{
// 	      	type: "input",
// 	        name: "question",
// 	        message: card2.front,
// 	        choices: card2.back
// 	      }
// 	    ]).then(function(answers) {
// 	    	count++;
// 	    });

// 	}
// 	else {
// 	    console.log("All questions asked");
// 	}
// }



// var newCard = function() {
// 	for (var i = 0; i < questions.length; i++) {
// 		var card = new BasicCard(questions[i].question, questions[i].answer);
// 	}
// 	if (count < 3) {
// 			inquirer.prompt([
// 	      {
// 	      	type: "input",
// 	        name: "question",
// 	        message: card.front,
// 	        choices: card.back
// 	      }
// 	    ]).then(function(answers) {
	    	
// 	    });
// 	}
// 	else {
// 	    console.log("All questions asked");
// 	}
// }

// function newCard() {
// 	for (var i = 0; i < questions.length; i++) {
// 		var flashcard = new BasicCard(questions[i].question, questions[i].answer);
// 		console.log();
// 	}
// }

// newCard();


// var questions = [{
// 	question: "What color does acid turn Litmus paper?",
// 	answer: "Red"
// }, {
//  	question: "What is the largest Scandinavian country?",
// 	answer: "Sweden"
// }];



// function answersCheck(input) { {
// 		if (input === preguntas[0].back) {
// 			console.log('Hurray!'); 
// 			correct++;
// 			count++;
// 			askQuestion();
// 		} else if (input !== preguntas[0].back) {
// 			console.log('Nope, that is not the answer');
// 			incorrect++;
// 			count++;
// 			askQuestion();
// 		} else if (input === '') {
// 			console.log("Nothing was entered so I've marked the answer as incorrect");
// 			incorrect++;
// 			count++;
// 		} else {
// 			console.log("All questions have been asked");
// 		}
// 	}
// }


// function createCards() {
// 	for (i = 0; i < questions.length; i++){
// 		var card = new BasicCard(questions[i].question, questions[i].answer);
// 		preguntas.push(card.front);
// 		respuestas.push(card.back);
// 	}
// }


// var card1 = new BasicCard("What color does acid turn Litmus paper?", "Red");
// var card2 = new BasicCard("What is the largest Scandinavian country?", "Sweden");
// var card3 = new BasicCard("What was Mickey Mouse's original name?", "Mortimer Mouse");
// var card4 = new BasicCard("Which metal do you get from bauxite?", "Aluminum");
// var card5 = new BasicCard("What was the name of the Benedictine monk who legend has it invented Champagne?", "Dom Perignon");
