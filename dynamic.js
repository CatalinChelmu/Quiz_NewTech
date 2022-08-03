var questions = [
	{
		question: "What is 2*5?",
		choices: [2, 5, 10, 15, 20],
		correctAnswer: 10,
	},
	{
		question: "What is 3*6?",
		choices: [3, 6, 9, 12, 18],
		correctAnswer: 4,
	},
	{
		question: "What is 8*9?",
		choices: [72, 99, 108, 134, 156],
		correctAnswer: 0,
	},
	{
		question: "What is 1*7?",
		choices: [4, 5, 6, 7, 8],
		correctAnswer: 3,
	},
	{
		question: "What is 8*8?",
		choices: [20, 30, 40, 50, 64],
		correctAnswer: 4,
	},
];
let currentQAnswer = 0;

function layout(quiz) {
	let questionSection = document.querySelector(".quiz_section");
	let questionParagraph = document.createElement("p");
	questionParagraph.innerText = quiz.question;
	questionSection.appendChild(questionParagraph);

	let radioArray = [];
	radioArray = quiz.choices;
	for (let i = 0; i < radioArray.length; i++) {
		let radioButton = document.createElement("input");
		radioButton.type = "radio";
		radioButton.value = radioArray[i];
		radioButton.name = "Answers";

		let label = document.createElement("p");
		label.innerText = radioArray[i];
		label.style.display = "inline-block";

		questionSection.appendChild(label);
		questionSection.appendChild(radioButton);
	}
}

let nextButton = document.querySelector("#nextQ");
nextButton.addEventListener("click", answerAndNext);

function answerAndNext() {
	let radioButton = [];
	radioButton = document.getElementsByTagName("input");
	for (let i = 0; i < radioButton.length; i++) {
		if (radioButton[i].checked) {
			if (radioButton[i].value == questions[currentQAnswer].correctAnswer) {
				console.log("Correct");
			} else console.log("Wrong");
		}
	}
	currentQAnswer++;

	removeElements(document.getElementsByTagName("input"));
	removeElements(document.getElementsByTagName("p"));
	layout(questions[currentQAnswer]);
}

function removeElements(elements) {
	while (elements.length > 0) {
		elements[0].remove();
	}
}

layout(questions[0]);
