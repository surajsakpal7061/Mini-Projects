let AllQuestions = [
  {
    "id": 1,
    "question": "What does HTML stand for?",
    "options": [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Mark Language",
      "Home Tool Markup Language"
    ],
    "answer": "Hyper Text Markup Language"
  },
  {
    "id": 2,
    "question": "Which language is used to style web pages?",
    "options": [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    "answer": "CSS"
  },
  {
    "id": 3,
    "question": "Which keyword is used to declare a variable in JavaScript?",
    "options": [
      "var",
      "define",
      "variable",
      "letvar"
    ],
    "answer": "var"
  },
  {
    "id": 4,
    "question": "Which method is used to add an element to the end of an array in JavaScript?",
    "options": [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    "answer": "push()"
  },
  {
    "id": 5,
    "question": "Which symbol is used for strict equality in JavaScript?",
    "options": [
      "==",
      "=",
      "===",
      "!="
    ],
    "answer": "==="
  },
  {
    "id": 6,
    "question": "Which technology is used to manage packages in Node.js?",
    "options": [
      "npm",
      "git",
      "webpack",
      "babel"
    ],
    "answer": "npm"
  },
  {
    "id": 7,
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Application Process Integration",
      "Advanced Programming Interface",
      "Application Program Internet"
    ],
    "answer": "Application Programming Interface"
  },
  {
    "id": 8,
    "question": "Which database is commonly used with the MERN stack?",
    "options": [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Oracle"
    ],
    "answer": "MongoDB"
  },
  {
    "id": 9,
    "question": "Which React hook is used to manage state?",
    "options": [
      "useEffect",
      "useState",
      "useContext",
      "useRef"
    ],
    "answer": "useState"
  },
  {
    "id": 10,
    "question": "Which HTTP method is generally used to retrieve data from a server?",
    "options": [
      "POST",
      "PUT",
      "GET",
      "DELETE"
    ],
    "answer": "GET"
  }
]



const question = document.getElementById('question');
const options = document.getElementById('options');
const next = document.getElementById('next')
const Score = document.getElementById('score')
const btn0 = document.getElementById('option-1');
const btn1 = document.getElementById('option-2');
const btn2 = document.getElementById('option-3');
const btn3 = document.getElementById('option-4');

let btn = [btn0, btn1, btn2, btn3]

let score = 0;
let questionIndex = 0;
let selectedAns = "";
let currrentQuestion;

console.log(btn[0])

function quizQuestion() {
  currrentQuestion = AllQuestions[questionIndex];
  question.textContent = currrentQuestion.question;
  for (let i = 0; i < 4; i++) {
    btn[i].textContent = currrentQuestion.options[i]
  }
}

quizQuestion()

options.addEventListener('click', (e) => {
  selectedAns = e.target.textContent;
})

next.addEventListener('click', () => {

  if (questionIndex < AllQuestions.length - 1) {
    checkans()
    questionIndex++
    quizQuestion()
  }

})


function checkans() {
  console.log(currrentQuestion.answer)
  if (currrentQuestion.answer === selectedAns) {
    console.log("correctans")
    score = score + 1
    Score.textContent = score;
    console.log("output")
  }
}


