const questions = [
    {
        question: "What is input device that controls a cursor in a display?",
        answers: [
            { text: "Mouse", correct: true },
            { text: "Mousepad", correct: false },
            { text: "Keyboard", correct: false },
            { text: "Monitor", correct: false },
        ]
    },
    {
        question: "It is used to connect to a computer to generate sound, which is one of the most common output devices?",
        answers: [
            { text: "Speaker", correct: true },
            { text: "Microphone", correct: false },
            { text: "Graphics Card", correct: false },
            { text: "Motherboard", correct: false },
        ]
    },
    {
        question: "It is a device that allows a computer to keep running for at least a short time when the primary power source is lost?",
        answers: [
            { text: "Ups", correct: true },
            { text: "Cpu", correct: false },
            { text: "Hdd/Sdd", correct: false },
            { text: "Power Supply", correct: false },
        ]
    },
    {
        question: "Which component is considered the brain of the computer?",
        answers: [
            { text: "Hard Drive", correct: false },
            { text: "RAM", correct: false },
            { text: "CPU", correct: true },
            { text: "Graphics Card", correct: false },
        ]
    },
    {
        question: "What does RAM stand for?",
        answers: [
            { text: "Random Access Memory", correct: true },
            { text: "Read Access Memory", correct: false },
            { text: "Run All Memory", correct: false },
            { text: "Rapid Access Machine", correct: false },
        ]
    },
    {
        question: "Which storage device is fastest?",
        answers: [
            { text: "HDD", correct: false },
            { text: "SSD", correct: true },
            { text: "DVD", correct: false },
            { text: "Blu-Ray", correct: false },
        ]
    },
    {
        question: "What does GPU stand for?",
        answers: [
            { text: "Graphics Processing Unit", correct: true },
            { text: "General Purpose Unit", correct: false },
            { text: "Global Positioning Unit", correct: false },
            { text: "Ground Processing Unit", correct: false },
        ]
    },
    {
        question: "Which technology is used to connect devices wirelessly?",
        answers: [
            { text: "Ethernet", correct: false },
            { text: "USB", correct: false },
            { text: "Bluetooth", correct: true },
            { text: "HDMI", correct: false },
        ]
    },
    {
        question: "Which software is used for creating documents?",
        answers: [
            { text: "Microsoft Excel", correct: false },
            { text: "Microsoft Word", correct: true },
            { text: "Adobe Photoshop", correct: false },
            { text: "Visual Studio", correct: false },
        ]
    },
    {
        question: "Which is NOT an operating system?",
        answers: [
            { text: "Windows", correct: false },
            { text: "Linux", correct: false },
            { text: "Android", correct: false },
            { text: "Google Chrome", correct: true },
        ]
    },
    {
        question: "What is used to protect a computer network from unauthorized access?",
        answers: [
            { text: "Firewall", correct: true },
            { text: "Antivirus", correct: false },
            { text: "Malware", correct: false },
            { text: "Spam Filter", correct: false },
        ]
    },
    {
        question: "What does HTTP stand for?",
        answers: [
            { text: "HyperText Transfer Protocol", correct: true },
            { text: "High Transfer Text Protocol", correct: false },
            { text: "Hyper Transfer Text Program", correct: false },
            { text: "HyperText Transfer Program", correct: false },
        ]
    },
    {
        question: "Which device is used to take photographs?",
        answers: [
            { text: "Scanner", correct: false },
            { text: "Printer", correct: false },
            { text: "Camera", correct: true },
            { text: "Monitor", correct: false },
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Machine Language", correct: false },
            { text: "HyperTool Markup Language", correct: false },
            { text: "HyperTech Markup Language", correct: false },
        ]
    },
    {
        question: "Which device is used to store data permanently?",
        answers: [
            { text: "RAM", correct: false },
            { text: "Hard Drive", correct: true },
            { text: "CPU", correct: false },
            { text: "Cache", correct: false },
        ]
    },
    {
        question: "Which device is used to input data into a computer?",
        answers: [
            { text: "Monitor", correct: false },
            { text: "Keyboard", correct: true },
            { text: "Speaker", correct: false },
            { text: "Printer", correct: false },
        ]
    },
    {
        question: "Which of the following is a type of computer software?",
        answers: [
            { text: "Hardware", correct: false },
            { text: "Operating System", correct: true },
            { text: "Motherboard", correct: false },
            { text: "RAM", correct: false },
        ]
    },
    {
        question: "Which part of a computer is considered the heart of the computer?",
        answers: [
            { text: "CPU", correct: true },
            { text: "Hard Drive", correct: false },
            { text: "RAM", correct: false },
            { text: "Graphics Card", correct: false },
        ]
    },
    {
        question: "What is the main function of the motherboard?",
        answers: [
            { text: "Store data", correct: false },
            { text: "Connect all parts of the computer", correct: true },
            { text: "Process data", correct: false },
            { text: "Generate sound", correct: false },
        ]
    },
    {
        question: "It contains the major component of the computer?",
        answers: [
            { text: "Computer Case", correct: true },
            { text: "Motherboard", correct: false },
            { text: "Power Supply", correct: false },
            { text: "CPU", correct: false },
        ]
    }      
];    

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Move to the next question
    } else {
        showScore(); // All questions are answered, show the score
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton(); // Go to next question or display score
    } else {
        startQuiz(); // Restart the quiz
    }
});

startQuiz();
