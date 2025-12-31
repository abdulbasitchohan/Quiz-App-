
const IntroBox = document.querySelector(".intro");
const startBtn = document.getElementById("start-Btn");
const main = document.querySelector("main");
const NextBtn = document.getElementById("NextBtn");
const StopBtn = document.getElementById("StopBtn");
const Ques = document.getElementById("Ques");
const optionList = document.getElementById("option-list");
const resultBox = document.getElementById("result");

let quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup",
            "None of these"
        ],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used for paragraph?",
        options: ["<div>", "<p>", "<span>", "<a>"],
        correct: "<p>"
    },
    {
        question: "HTML is used for?",
        options: ["Styling", "Structure", "Logic", "Database"],
        correct: "Structure"
    }
];

let index = 0;
let score = 0;

startBtn.addEventListener("click", () => {
    IntroBox.style.display = "none";
    main.style.display = "block";
    loadQuestion();
});

function loadQuestion() {
    Ques.textContent = quizData[index].question;
    optionList.innerHTML = "";

    quizData[index].options.forEach(option => {
        let li = document.createElement("li");

        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "option";
        radio.value = option;

        let span = document.createElement("span");
        span.textContent = option;

        li.append(radio, span);
        optionList.appendChild(li);
    });
}

NextBtn.addEventListener("click", () => {
    let selected = document.querySelector("input[name='option']:checked");

    if (!selected) {
        alert("Please select an option");
        return;
    }

    if (selected.value === quizData[index].correct) {
        score++;
    }

    index++;

    if (index < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    main.style.display = "none";
    resultBox.style.display = "block";
    resultBox.innerHTML = `
        <h2>Quiz Completed</h2>
        <p>Your Score: ${score} / ${quizData.length}</p>
    `;
}

StopBtn.addEventListener("click", () => {
    IntroBox.style.display = "block";
    main.style.display = "none";
    resultBox.style.display = "none";
    index = 0;
    score = 0;
});
