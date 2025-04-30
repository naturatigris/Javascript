const quizData = JSON.parse(localStorage.getItem("quizData")) || [];
  let currentQuestionIndex = 0;
  let score = 0;
  
  
  const questionText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");
  const nextBtn = document.getElementById("nextBtn");
  const scoreDisplay = document.getElementById("scoreDisplay");
   
    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
      
        optionsList.innerHTML = ""; // Clear previous options
      
        currentQuestion.options.forEach((option) => {
          const li = document.createElement("li");
          li.textContent = option;
          
          li.addEventListener("click", () => {
            const allOptions = optionsList.querySelectorAll("li");
            allOptions.forEach((item) => item.classList.remove("selected"));
      
            li.classList.add("selected");
      
            handleOptionClick(option);
          });
      
          optionsList.appendChild(li);
        });
      }
      
  
  function handleOptionClick(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    const options = optionsList.querySelectorAll("li");
    options.forEach((option) => {
      option.style.pointerEvents = "none"; 
    });
  
    nextBtn.style.display = "block"; 
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
      nextBtn.style.display = "none"; 
    } else {
      showResults();
    }
  });
  
  function showResults() {
    questionText.textContent = "Quiz Completed!";
    optionsList.innerHTML = "";
    scoreDisplay.textContent = `Your score: ${score} / ${quizData.length}`;
    nextBtn.style.display = "none"; 
  }
  
  loadQuestion();

  nextBtn.style.display = "none"; 
  

