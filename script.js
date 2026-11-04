// Default flashcard deck
const defaultCards = [
  { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
  { question: "What method is used to save data locally in browser JS?", answer: "localStorage" },
  { question: "What does DOM stand for?", answer: "Document Object Model" }
];

// Load flashcards from localStorage or fall back to defaults
let flashcards = JSON.parse(localStorage.getItem('flashcards')) || defaultCards;
let currentIndex = 0;

// DOM elements
const flashcardEl = document.getElementById('flashcard');
const questionEl = document.getElementById('card-question');
const answerEl = document.getElementById('card-answer');
const counterEl = document.getElementById('card-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const form = document.getElementById('flashcard-form');
const questionInput = document.getElementById('question-input');
const answerInput = document.getElementById('answer-input');
const resetBtn = document.getElementById('reset-btn');

function displayCard(index) {
  if (flashcards.length === 0) {
    questionEl.textContent = "No flashcards available.";
    answerEl.textContent = "Add a card below!";
    counterEl.textContent = "0 / 0";
    return;
  }
  
  // Ensure index is within bounds
  if (index >= flashcards.length) currentIndex = 0;
  if (index < 0) currentIndex = flashcards.length - 1;

  // Reset card to front view when changing cards
  flashcardEl.classList.remove('flipped');

  // Display current question and answer
  questionEl.textContent = flashcards[currentIndex].question;
  answerEl.textContent = flashcards[currentIndex].answer;
  counterEl.textContent = `${currentIndex + 1} / ${flashcards.length}`;
}

// Flip card on click
flashcardEl.addEventListener('click', () => {
  flashcardEl.classList.toggle('flipped');
});

// Next button
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex++;
  displayCard(currentIndex);
});

// Previous button
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex--;
  displayCard(currentIndex);
});

// Add new flashcard form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const newCard = {
    question: questionInput.value.trim(),
    answer: answerInput.value.trim()
  };

  flashcards.push(newCard);
  localStorage.setItem('flashcards', JSON.stringify(flashcards));
  
  form.reset();
  currentIndex = flashcards.length - 1;
  displayCard(currentIndex);
});

// Reset deck to defaults
resetBtn.addEventListener('click', () => {
  flashcards = [...defaultCards];
  localStorage.setItem('flashcards', JSON.stringify(flashcards));
  currentIndex = 0;
  displayCard(currentIndex);
});

// Initial display load
displayCard(currentIndex);