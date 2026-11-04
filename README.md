# Flashcard Study App

A lightweight, fully interactive web application built with vanilla **HTML**, **CSS**, and **JavaScript** designed to help you study efficiently, flip through custom flashcards with smooth 3D animations, and manage your own study decks directly in your browser.

---

## 🚀 Features

* **3D Card Flipping Animation:** Smooth CSS perspective and `rotateY` transitions that let you physically "flip" a card to reveal the answer on click.
* **Deck Navigation:** Simple Next and Previous controls to cycle through your study cards with real-time counter tracking.
* **Custom Flashcard Creator:** Add your own custom questions and answers to the deck using a clean input form.
* **Persistent Local Storage:** All custom-added flashcards are saved directly in your browser's `localStorage` so they remain intact across browser refreshes.
* **Default Deck Reset:** Quickly reset back to the default study set whenever needed.

---

## 🛠️ Tech Stack

* **Markup:** HTML5
* **Styling:** CSS3 (Flexbox, 3D transforms, smooth transitions, dark-mode styling)
* **Logic:** Vanilla JavaScript (ES6+, DOM manipulation, LocalStorage API)

---

## 📂 Project Structure

```text
FlashcardApp/
├── index.html    # Main HTML structure and UI layout
├── style.css     # Styling, dark mode design, and 3D card flip animations
└── script.js     # Core navigation logic, card flipping, and localStorage handling
