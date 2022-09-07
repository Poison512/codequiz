var time = 60;
function setTimer() {
  setInterval(function () {
    var timer = document.getElementById("time-display");
    if (time > 0 && i < 5) {
      time = time - 1;
      timer.textContent = "Time Remaining: " + time;
    }
  }, 1000);
}

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function endQuiz() {
    clearInterval(setTimer);
  
var questionDisplay = document.getElementById("question-id");
    questionDisplay.style.display = "none";
}
const questions = [
  {
    question: 'How Many Wheels Are On A BMX',
    answers: [
      { text: '2', correct: true },
      { text: '4', correct: false },
      { text: '3', correct: false },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'What Year Was Matt Hoffman Born?',
    answers: [
      { text: '1972', correct: true },
      { text: '1927', correct: false },
      { text: '1729', correct: false },
      { text: '1297', correct: false }
    ]
  },
  {
    question: 'Where Did BMX Originate',
    answers: [
      { text: 'Texas', correct: false },
      { text: 'California', correct: true },
      { text: 'Utah', correct: false },
      { text: 'Montana', correct: false }
    ]
  },
  {
    question: 'Is BMX The Best Sport Ever',
    answers: [
      { text: 'no', correct: false },
      { text: 'YES', correct: true }
    ]
  }
]