import React, { useState } from 'react';
import './Flashcards.scss';

function Flashcards() {
  const [flashcards, setFlashcards] = useState([
    // Example data
    { term: 'Polymorphism', definition: 'The ability of a programming language to present the same interface for several different underlying data types.' },
    // More flashcards...
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  const handleNext = () => {
    setShowDefinition(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="flashcards">
      <div className="flashcards__card" onClick={() => setShowDefinition(!showDefinition)}>
        <div className={`flashcards__content ${showDefinition ? 'flashcards__content--flipped' : ''}`}>
          <div className="flashcards__front">
            {flashcards[currentIndex].term}
          </div>
          <div className="flashcards__back">
            {flashcards[currentIndex].definition}
          </div>
        </div>
      </div>
      <button className="flashcards__button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Flashcards;
