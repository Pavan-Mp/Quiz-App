 const questions = [
    {
        question : "which is the largest animal in the world ?",
        answers :[
            {text:"shark", correct:"flase"},
            {text:"Blue whale", correct:"true"},
            {text:"Elephant", correct:"flase"},
            {text:"Giraffe", correct:"flase"},
        ]
    },
    {
        question : "which is the smallest animal in the world ?",
        answers :[
            {text:"dog", correct:"flase"},
            {text:"Mouse", correct:"true"},
            {text:"bat", correct:"flase"},
            {text:"cat", correct:"flase"},
        ]   
    },
    {
        question : "which is the smallest continant animal in the world ?",
        answers :[
            {text:"asia", correct:"flase"},
            {text:"Australia", correct:"true"},
            {text:"India", correct:"flase"},
            {text:"Africa", correct:"flase"},
        ]
    },
    {
        question : "which is the largest rever in the below option ?",
        answers :[
            {text:"kaveri", correct:"flase"},
            {text:"nail", correct:"true"},
            {text:"gangaa", correct:"flase"},
            {text:"yamuna", correct:"flase"},
        ]
    },
    {
        question : "which is the NO1 cricket team in the world ?",
        answers :[
            {text:"australia", correct:"flase"},
            {text:"India", correct:"true"},
            {text:"westindees", correct:"flase"},
            {text:"pakistan", correct:"flase"},
        ]
    },
    {
        question : "which is the cleanest animal in the world ?",
        answers :[
            {text:"shark", correct:"flase"},
            {text:"Pig", correct:"true"},
            {text:"Lion", correct:"flase"},
            {text:"cat", correct:"flase"},
        ]
    },
    {
        question : "which is the most used  languege in the world ?",
        answers :[
            {text:"turkies", correct:"flase"},
            {text:"English", correct:"true"},
            {text:"Spanish", correct:"flase"},
            {text:"french", correct:"flase"},
        ]
    },
    {
        question : "which country  has the largest population in the world ?",
        answers :[
            {text:"india", correct:"flase"},
            {text:"Chaina", correct:"true"},
            {text:"Japan", correct:"flase"},
            {text:"Australia", correct:"flase"},
        ]
    },
    {
        question : "which is the Richest country  in the world ?",
        answers :[
            {text:"shrilanka", correct:"flase"},
            {text:"Russia", correct:"true"},
            {text:"india", correct:"flase"},
            {text:"pakistan", correct:"flase"},
        ]
    },
    {
        question : "which is the smallest country in the world ?",
        answers :[
            {text:"Shrilanka", correct:"flase"},
            {text:"Vatican City", correct:"true"},
            {text:"Chaina", correct:"flase"},
            {text:"Nauru", correct:"flase"},
        ]
    }
 ]

  const questionElement = document.getElementById("question");

   const  answerButtons = document.getElementById("answer-buttons");

   const  nextButton = document.getElementById("next-btn");
   
    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
         currentQuestionIndex = 0;
         score = 0;
         nextButton.innerHTML = "next"
        showQuestion();
    }

    function  showQuestion(){
    
         resetState();

        let currentQuetion = questions[currentQuestionIndex];
        let questionNo= currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuetion.question;

   currentQuetion.answers.forEach( answer =>{
   const button = document.createElement("button");
   button.innerHTML = answer.text;
   button.classList.add("btn");
   answerButtons.appendChild(button);
   if(answer.correct){
    button.dataset.correct = answer.correct;
   }
  button.addEventListener("click",selectAnswer)

});
    }

    function resetState(){
        nextButton.style.display= "none"
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild)
        }
    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
             score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
    
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true"
    });
      nextButton.style.display = "block"
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = `you scored ${score} out of ${questions.length} ! `
        nextButton.innerHTML = "play again";
        nextButton.style.display = "block"
    }

    function handleNextButton(){
      currentQuestionIndex++;
      if(currentQuestionIndex < questions.length){
        showQuestion();
      }else{
        showScore();
      }
    }

    nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex < questions.length){
             handleNextButton();
        }else{
            startQuiz()
        }
    });
    startQuiz();