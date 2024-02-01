const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];
//находим элементы

const headerContainer = document.querySelector('#header');

const listContainer = document.querySelector('#list');

const submitBtn = document.querySelector('button');



//переменные игры

let score = 0; //количество правильных ответов

let questionIndex = 0; //номер вопроса

clearPage();
showQuestion();
submitBtn.onclick = checkedAnswer;


 function clearPage() {
headerContainer.innerHTML='';
listContainer.innerHTML='';
};

function showQuestion(){

	//вопрос
	

	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex] ['question'])

	headerContainer.innerHTML = title
	
//вариант ответа
let answerNumber = 1


	for (answerText of questions[questionIndex] ['answers']){
	

		const questionTemplate =
		 `<li>
		<label>
			<input value="%number%" type="radio" class="answer" name="answer" />
			<span>%answer%</span>
		</label>
	</li>`;


	let answerHTML = questionTemplate
	                                .replace ('%answer%', answerText )
	                                 .replace('%number%', answerNumber)

	listContainer.innerHTML += answerHTML;
	answerNumber++;
	}
}

function checkedAnswer() {

//находим кнопку

	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

	console.log(checkedRadio)

	//если ответ не выбран - ничего не делаем, выходим из функции

	if(!checkedRadio){
		submitBtn.blur();
		return
	}
	 const userAnswer = parseInt(checkedRadio.value)

	 //если ответ верный - увеличиваем счет

	
	 if (userAnswer === questions[questionIndex]['correct']){
		score++;
	 }

	 if(questionIndex!= questions.length -1){
     questionIndex++;
     clearPage();
	 showQuestion(); 
	 }
	 else{
		clearPage();
		showResults();
	 }
	}
	 function showResults() {
		const resultTemplate = `
		<h2 class="title">%title%</h2>
		<h3 class="summary">%message%</h3>
		<p class="result">%result%</p>
		`;


let title, message;
		//варианты заголовков и текста

		

		if( score===questions.length){
			title="Поздравляем!"
			message = "Вы ответили верно на все вопросы!"
		}
	  else if(score === (questions.length/100)*50){
		title="Неплохой результат"
		message = "Вы ответили на половину вопросов!"
	 }
	 else{title="Стоит постараться"
	      message = "Вы ответили на меньше половины вопросов!"

	 }

let result = `${score} из ${questions.length}`;

const finalMessage= resultTemplate
                                 .replace('%title%', title)
								 .replace('%message%', message)
								 .replace('%result%', result)

								 headerContainer.innerHTML=finalMessage
	 submitBtn.blur();
	 submitBtn.innerText = 'начать заново';
	 submitBtn.onclick=()=>location.reload();
	 }
		

