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
            question: "Which part of the computer is used for long-term storage?",
            a: "RAM",
            b: "CPU",
            c: "Hard Drive",
            d: "GPU",
            correct: "c"
        },
        {
            question: "What does AI stand for?",
            a: "Automated Input",
            b: "Artificial Intelligence",
            c: "Automated Interaction",
            d: "Artificial Interaction",
            correct: "b"
        },
        {
            question: "Which of the following is an AI application?",
            a: "Self-driving cars",
            b: "Writing with a pen",
            c: "Riding a bike",
            d: "Playing the piano",
            correct: "a"
        },
        {
            question: "Which technology allows machines to learn from experience?",
            a: "Deep Learning",
            b: "Web Development",
            c: "Mobile Computing",
            d: "Data Entry",
            correct: "a"
        },
        {
            question: "Who is known as the father of Artificial Intelligence?",
            a: "Bill Gates",
            b: "Elon Musk",
            c: "John McCarthy",
            d: "Mark Zuckerberg",
            correct: "c"
        },
        {
            question: "Which of the following is a popular AI assistant?",
            a: "Google Chrome",
            b: "Microsoft Word",
            c: "Siri",
            d: "Paint",
            correct: "c"
        },
        {
            question: "Which device can AI help to improve its performance?",
            a: "Smartphone",
            b: "Bicycle",
            c: "Television",
            d: "Microwave",
            correct: "a"
        },
        {
            question: "Which of these is a characteristic of AI?",
            a: "Can think and learn",
            b: "Cannot store information",
            c: "Can only follow fixed instructions",
            d: "Is only used for games",
            correct: "a"
        },
        {
            question: "Which of the following is NOT a benefit of AI?",
            a: "Automates tasks",
            b: "Enhances creativity",
            c: "Never makes mistakes",
            d: "Processes large amounts of data",
            correct: "c"
        }
  
    ],
    undergraduate: [
        {
            question: "Which of the following is a key concept in AI?",
            a: "Machine Learning",
            b: "Networking",
            c: "Web Design",
            d: "Database Management",
            correct: "a"
        },
        {
            question: "Which algorithm is commonly used for classification tasks?",
            a: "Linear Regression",
            b: "Decision Trees",
            c: "Bubble Sort",
            d: "Dijkstra's Algorithm",
            correct: "b"
        },
        {
            question: "What does NLP stand for in AI?",
            a: "Natural Language Processing",
            b: "Neural Language Parsing",
            c: "Network Layer Protocol",
            d: "Node Learning Process",
            correct: "a"
        },
        {
            question: "Which type of AI involves systems that can perform tasks without human intervention?",
            a: "Weak AI",
            b: "Strong AI",
            c: "Narrow AI",
            d: "Supervised AI",
            correct: "b"
        },
        {
            question: "Which of the following is a supervised learning algorithm?",
            a: "K-Means Clustering",
            b: "Support Vector Machines",
            c: "Apriori Algorithm",
            d: "Genetic Algorithms",
            correct: "b"
        },
        {
            question: "What is the goal of reinforcement learning in AI?",
            a: "Minimizing error rates",
            b: "Maximizing cumulative rewards",
            c: "Optimizing supervised learning",
            d: "Improving unsupervised classification",
            correct: "b"
        },
        {
            question: "Which technique is used to reduce overfitting in machine learning models?",
            a: "Normalization",
            b: "Regularization",
            c: "Gradient Descent",
            d: "One-hot Encoding",
            correct: "b"
        },
        {
            question: "Which of the following best describes the Turing Test?",
            a: "A test for machine intelligence",
            b: "A sorting algorithm",
            c: "An algorithm for neural networks",
            d: "A type of clustering technique",
            correct: "a"
        },
        {
            question: "Which AI technique is primarily used for image recognition?",
            a: "Reinforcement Learning",
            b: "Convolutional Neural Networks (CNN)",
            c: "K-Nearest Neighbors",
            d: "Random Forest",
            correct: "b"
        },
        {
            question: "Which of the following AI methods focuses on unsupervised learning?",
            a: "Clustering",
            b: "Classification",
            c: "Regression",
            d: "Random Forest",
            correct: "a"
        }
    ],
    professional: [
        {
            question: "Which optimization algorithm is most commonly used in training deep neural networks?",
            a: "Stochastic Gradient Descent (SGD)",
            b: "Backpropagation",
            c: "K-Means Clustering",
            d: "Breadth-First Search",
            correct: "a"
        },
        {
            question: "What is the main difference between L1 and L2 regularization in machine learning?",
            a: "L1 reduces weights to zero, L2 penalizes large weights",
            b: "L2 reduces weights to zero, L1 penalizes large weights",
            c: "L1 adds bias, L2 reduces variance",
            d: "L1 is used for classification, L2 is used for regression",
            correct: "a"
        },
        {
            question: "Which of the following is a key advantage of using Recurrent Neural Networks (RNNs)?",
            a: "Ability to handle sequential data",
            b: "Faster training than CNNs",
            c: "Less prone to overfitting",
            d: "Better for image processing tasks",
            correct: "a"
        },
        {
            question: "What problem does the 'vanishing gradient' primarily affect in deep learning?",
            a: "Training deep neural networks",
            b: "Hyperparameter tuning",
            c: "Bias-variance tradeoff",
            d: "Data augmentation",
            correct: "a"
        },
        {
            question: "Which method is used to train Generative Adversarial Networks (GANs)?",
            a: "Minimax optimization",
            b: "Reinforcement learning",
            c: "Backpropagation",
            d: "Gradient boosting",
            correct: "a"
        },
        {
            question: "In AI, what does the term 'attention mechanism' refer to?",
            a: "A technique to focus on specific parts of input data",
            b: "A method for improving model accuracy",
            c: "A process of adding layers to neural networks",
            d: "A form of regularization",
            correct: "a"
        },
        {
            question: "Which of the following is a commonly used loss function in binary classification tasks?",
            a: "Cross-Entropy Loss",
            b: "Mean Squared Error",
            c: "Hinge Loss",
            d: "Huber Loss",
            correct: "a"
        },
        {
            question: "Which type of learning algorithm is most suited for environments with sparse rewards?",
            a: "Reinforcement Learning",
            b: "Supervised Learning",
            c: "Unsupervised Learning",
            d: "Transfer Learning",
            correct: "a"
        },
        {
            question: "What is the key principle behind the Transformer architecture in NLP models?",
            a: "Self-attention mechanism",
            b: "Backpropagation",
            c: "Convolutional layers",
            d: "Gradient boosting",
            correct: "a"
        },
        {
            question: "Which of the following best describes the concept of 'transfer learning' in AI?",
            a: "Using a pre-trained model on a new task",
            b: "Combining multiple models for better accuracy",
            c: "Training AI models with minimal data",
            d: "Learning from a few-shot data set",
            correct: "a"
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


