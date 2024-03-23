const quizData = [
    {
        question: "რომელი ცხოველი გიყვარს ყველაზე მეტად?",
        a: "კატა",
        b: "კატა :3",
        c: "კატა >:3",
        d: "კატა /⁠ᐠ⁠｡⁠ꞈ⁠｡⁠ᐟ⁠\ ",
        correct: "a", 
        correct: "b",
        correct: "c",
        correct: "d",
    },
    {
        question: "გამოთვალე: 2 + 3,1 x3 – 0,8x2 თუ x = -1",
        a: "0,1",
        b: "0,100000000000000000000000000000",
        c: "у меня лапки :3",
        d: "-1,9",
        correct: "c",
        correct: "d",
    },
    {
        question: "მიაუ მიაუ!",
        a: "რაა?",
        b: "არ მიყვარს კატები",
        c: "აუ ისევ ეს კატები რააა...",
        d: "მიაუ მიაუ მიაუ >:3",
        correct: "d",
    },
    {
        question: "ცუდია თუ უბრალოდ აუცილებელია დანაშაულის ჩადენა თქვენი მშიერი ბავშვისთვის?",
        a: "ე...",
        b: "-_-",
        c: "მიშველეთ",
        d: "მარტო კატისთვის შეიძლება!!! ;3",
        correct: "d",

    },
    {
        question: "ვიცი, რომ უბრალოდ უნდა დაგვემატა კითხვები, მაგრამ ვიფიქრე, რომ არ არის ასე საინტერესო ;Р",
        a: "ოხ ნატალი!!!",
        b: "ვაიმე...",
        c: "მოგკლავ",
        d: "ბინას გიყიდი და აღარ იქნები ბომჟი",
        correct: "d",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})