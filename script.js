// Questions for different levels
const quizzes = {
    school: [
        {
            question: "What is the brain of the computer?",
            a: "RAM",
            b: "CPU",
            c: "Hard Drive",
            d: "Motherboard",
            correct: "b"
        },
        {
            question: "What does GUI stand for?",
            a: "Graphical User Interface",
            b: "General User Interface",
            c: "Graphical Utility Interface",
            d: "General Utility Interface",
            correct: "a"
        },
        {
            question: "What is an example of an input device?",
            a: "Monitor",
            b: "Printer",
            c: "Keyboard",
            d: "Speakers",
            correct: "c"
        },
        {
            question: "Which software is used to create presentations?",
            a: "MS Word",
            b: "MS Excel",
            c: "MS PowerPoint",
            d: "MS Access",
            correct: "c"
        },
        {
            question: "What is the function of the operating system?",
            a: "Manage hardware and software",
            b: "Create documents",
            c: "Run programs",
            d: "Store data",
            correct: "a"
        },
        {
            question: "What is the shortcut key for copying text?",
            a: "Ctrl + X",
            b: "Ctrl + V",
            c: "Ctrl + C",
            d: "Ctrl + A",
            correct: "c"
        },
        {
            question: "Which one of these is a web browser?",
            a: "Windows",
            b: "Excel",
            c: "Chrome",
            d: "Word",
            correct: "c"
        },
        {
            question: "What does HTML stand for?",
            a: "Hyper Text Markup Language",
            b: "Hyperlink Text Markup Language",
            c: "High Text Markup Language",
            d: "Hypertext Multiple Language",
            correct: "a"
        },
        {
            question: "What is the function of a printer?",
            a: "Store data",
            b: "Process data",
            c: "Print documents",
            d: "Send data",
            correct: "c"
        },
        {
            question: "Which key is used to open the task manager?",
            a: "Ctrl + T",
            b: "Ctrl + Alt + Delete",
            c: "Ctrl + Shift + Esc",
            d: "Ctrl + Shift + T",
            correct: "b"
        }
    ],
    undergraduate: [
        {
            question: "What is the primary function of an operating system?",
            a: "Manage hardware resources",
            b: "Create software applications",
            c: "Manage user data",
            d: "Perform calculations",
            correct: "a"
        },
        {
            question: "What does CPU stand for?",
            a: "Central Processing Unit",
            b: "Central Programming Unit",
            c: "Computer Processing Unit",
            d: "Computer Programming Unit",
            correct: "a"
        },
        {
            question: "What is the function of RAM in a computer?",
            a: "Store permanent data",
            b: "Process data",
            c: "Provide temporary storage",
            d: "Manage external devices",
            correct: "c"
        },
        {
            question: "Which of the following is a programming language?",
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "XML",
            correct: "c"
        },
        {
            question: "What is an algorithm?",
            a: "A programming language",
            b: "A step-by-step procedure for solving a problem",
            c: "A type of software",
            d: "A hardware component",
            correct: "b"
        },
        {
            question: "What is a database management system?",
            a: "A system to manage computer hardware",
            b: "A system to manage data and databases",
            c: "A system to manage user interfaces",
            d: "A system to manage network resources",
            correct: "b"
        },
        {
            question: "Which of the following is a popular database software?",
            a: "Word",
            b: "Excel",
            c: "Access",
            d: "PowerPoint",
            correct: "c"
        },
        {
            question: "What is an IDE?",
            a: "Integrated Development Environment",
            b: "Integrated Data Editor",
            c: "Interactive Data Environment",
            d: "Integrated Design Editor",
            correct: "a"
        },
        {
            question: "Which language is known for web development?",
            a: "Java",
            b: "Python",
            c: "JavaScript",
            d: "C++",
            correct: "c"
        },
        {
            question: "What does URL stand for?",
            a: "Uniform Resource Locator",
            b: "Uniform Resource Link",
            c: "Universal Resource Locator",
            d: "Universal Resource Link",
            correct: "a"
        }
    ],
    professional: [
        {
            question: "Who is considered the father of modern computer science?",
            a: "Alan Turing",
            b: "John von Neumann",
            c: "Charles Babbage",
            d: "Ada Lovelace",
            correct: "a"
        },
        {
            question: "What is a neural network in artificial intelligence?",
            a: "A network of neurons in the brain",
            b: "A type of database",
            c: "A network of interconnected nodes designed to simulate the human brain",
            d: "A type of network protocol",
            correct: "c"
        },
        {
            question: "Which programming language is used for Android app development?",
            a: "Swift",
            b: "Java",
            c: "C#",
            d: "Ruby",
            correct: "b"
        },
        {
            question: "What is the main purpose of blockchain technology?",
            a: "Data encryption",
            b: "Data storage",
            c: "Decentralized transaction management",
            d: "Data analysis",
            correct: "c"
        },
        {
            question: "What is the function of a compiler?",
            a: "Translate source code into machine code",
            b: "Manage system resources",
            c: "Store data",
            d: "Execute instructions",
            correct: "a"
        },
        {
            question: "What is cloud computing?",
            a: "Computing on physical servers",
            b: "Storing data in local drives",
            c: "Using remote servers to store, manage, and process data",
            d: "Performing computations on a single computer",
            correct: "c"
        },
        {
            question: "What is an API?",
            a: "Application Programming Interface",
            b: "Automated Programming Interface",
            c: "Advanced Programming Interface",
            d: "Application Programming Instruction",
            correct: "a"
        },
        {
            question: "What does SQL stand for?",
            a: "Structured Query Language",
            b: "Simple Query Language",
            c: "Sequential Query Language",
            d: "Structured Question Language",
            correct: "a"
        },
        {
            question: "Which technology is used for web development to create dynamic web pages?",
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "SQL",
            correct: "c"
        },
        {
            question: "What is a 'cookie' in web development?",
            a: "A type of database",
            b: "A small piece of data stored by the browser",
            c: "A programming language",
            d: "A web server",
            correct: "b"
        }
    ]
};

// JavaScript to handle the quiz logic
let currentQuiz = 0;
let score = 0;
let selectedQuiz = quizzes.school; // Default to school level

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const quizTitle = document.getElementById('quiz-title');
const startButton = document.createElement('button');

// Event listeners for level selection
document.getElementById('school-level').addEventListener('click', () => loadLevel('school'));
document.getElementById('undergraduate-level').addEventListener('click', () => loadLevel('undergraduate'));
document.getElementById('professional-level').addEventListener('click', () => loadLevel('professional'));

// Add start quiz button
function addStartQuizButton() {
    startButton.textContent = 'Start Quiz';
    startButton.id = 'start-btn';
    startButton.style.display = 'block';
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        loadQuiz();
    });
    quizContainer.appendChild(startButton);
}

// Load questions based on selected level
function loadLevel(level) {
    currentQuiz = 0;
    score = 0;
    selectedQuiz = quizzes[level];
    quizTitle.textContent = `${level.charAt(0).toUpperCase() + level.slice(1)} Quiz`;
    quizContainer.innerHTML = ''; // Clear previous content
    addStartQuizButton();
}

// Load quiz questions
function loadQuiz() {
    const currentQuizData = selectedQuiz[currentQuiz];
    quizContainer.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <div class="options">
            <label>
                <input type="radio" name="answer" value="a"> ${currentQuizData.a}
            </label>
            <label>
                <input type="radio" name="answer" value="b"> ${currentQuizData.b}
            </label>
            <label>
                <input type="radio" name="answer" value="c"> ${currentQuizData.c}
            </label>
            <label>
                <input type="radio" name="answer" value="d"> ${currentQuizData.d}
            </label>
        </div>
    `;
    nextButton.style.display = 'block'; // Show the next button
    quizContainer.appendChild(nextButton);
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

nextButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === selectedQuiz[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < selectedQuiz.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `<h2>You finished the quiz! Your score is ${score} out of ${selectedQuiz.length}.</h2>`;
            nextButton.style.display = 'none';
            scoreDisplay.textContent = '';
        }
    }
});


