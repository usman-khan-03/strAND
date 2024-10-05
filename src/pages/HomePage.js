import React, { useState } from 'react';
import './HomePage.scss';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [lectureCode, setLectureCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume validation passes
    navigate(`/game?code=${lectureCode}`);
  };

  return (
    <div className="home">
      <form className="home__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="home__input"
          placeholder="Enter Lecture Code"
          value={lectureCode}
          onChange={(e) => setLectureCode(e.target.value)}
        />
        <button type="submit" className="home__button">
          Start Game
        </button>
      </form>
    </div>
  );
}

export default HomePage;