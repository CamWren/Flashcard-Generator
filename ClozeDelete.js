var inquirer = require("inquirer");

var i = 0;
var preguntas = [];
var respuestas = [];

var ClozeCard = function(text, cloze) {
		this.text = text;
		this.cloze = cloze;
}

var questions = [{
	cloze: "{{c1::Red}}...is the color acid turns Litmus paper.",
}, {
 	cloze: "{{c2::Sweden}}...is the largest Scandinavian country.",
}, {
 	cloze: "{{c3::Mortimer Mouse}}...was Mickey Mouse's original name.",
}, {
 	cloze: "{{c4::Aluminum}}...is the metal you get from bauxite.",
}, {
 	cloze: "{{c5::Dom Perignon}}...was the name of the Benedictine monk who legend has it invented Champagne.",
}];


var card1 = new ClozeCard("...is the color acid turns Litmus paper.", "{{c1::Red}}");