const question_con=document.getElementById("questionContainer2");
const addQuestionBtn = document.getElementById("addQuestionBtn");
const questionFormContainer = document.getElementById("questionFormContainer");
const questionForm = document.getElementById("questionForm");
const cancelBtn = document.getElementById("cancelBtn");

const quizData = JSON.parse(localStorage.getItem("quizData")) || [];
function display_questions() {
    quizData.forEach((currentQuestion) => {
      const questionContainer = document.createElement("div");
      questionContainer.classList.add("question-block");

      const questionElem = document.createElement("p");
      questionElem.textContent = currentQuestion.question;
      questionContainer.appendChild(questionElem);

      const optionsList = document.createElement("ul");
      currentQuestion.options.forEach((option) => {
        const li = document.createElement("li");
        li.textContent = option;
        optionsList.appendChild(li);
      });
      questionContainer.appendChild(optionsList);

      const answerElem = document.createElement("p");
      answerElem.textContent = `Answer: ${currentQuestion.correctAnswer}`;
      questionContainer.appendChild(answerElem);

      question_con.appendChild(questionContainer);
    });
  }

if (question_con) {
  
    display_questions();
  }
  function openForm() {
    questionFormContainer.style.display = "block"; 
  }
  
  function closeForm() {
    questionFormContainer.style.display = "none"; 
    questionForm.reset(); 
  }
  function addQuestion(event) {
    event.preventDefault(); // Prevent form submission
  
    const question = document.getElementById("questionInput").value;
    const options = [
      document.getElementById("option1").value,
      document.getElementById("option2").value,
      document.getElementById("option3").value,
      document.getElementById("option4").value
    ];
    const correctAnswer = document.getElementById("correctAnswer").value;
    
    quizData.push({ question, options, correctAnswer });
    localStorage.setItem("quizData", JSON.stringify(quizData));

    display_questions();
  
    closeForm();

  }
  
  if (addQuestionBtn) {
    addQuestionBtn.addEventListener("click", openForm);
  }
  
  if (cancelBtn) {
    cancelBtn.addEventListener("click", closeForm);
  }
  
  if (questionForm) {
    questionForm.addEventListener("submit", addQuestion);
  }
  
  
  
  