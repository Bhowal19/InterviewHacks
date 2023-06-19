// script.js
document.addEventListener('DOMContentLoaded', () => {
    const questionElements = document.querySelectorAll('.question');
    questionElements.forEach((questionElement) => {
      questionElement.addEventListener('click', () => {
        const answerElement = questionElement.nextElementSibling;
        answerElement.classList.toggle('active');
      });
    });
  });
  