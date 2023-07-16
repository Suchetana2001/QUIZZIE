const quizDB= [
   {
    question: "Q1: Number of primitive data types in Java are?",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    ans: "ans3"
   },
   {
    question: "Q2: What is the size of float and double in java?",
    a: "32 & 64",
    b: "32 & 32",
    c: "64 & 32",
    d: "64 & 64",
    ans: "ans1"
   },
   {
    question: "Q3: When is the object created with new keyword?",
    a:"at run time",
    b:"at compile time",
    c:"depends on the code",
    d:"none",
    ans:"ans1"
   },
   {
    question: "Q4: In which of the following is toString() method defined?",
    a:"java.lang.Object",
    b:"java.lang.String",
    c:"java.lang.util",
    d:"none",
    ans:"ans1"
   },
   {
    question: "Q5: What is Runnable?",
    a:"abstract class",
    b:"interface",
    c:"method",
    d:"class",
    ans:"ans2"
   }
];

const question=document.querySelector('.question');

const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion = () => {
    const questionList=quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
         }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false );
}

submit.addEventListener('click',()=>{

    const questionList=quizDB[questionCount];
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
   
    if(checkedAnswer === questionList.ans){
        score++;
    }; 

    questionCount++;

    deselectAll();
    
    if(questionCount<quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
            <h3>You Scored ${score}/${quizDB.length} 🤩</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});



