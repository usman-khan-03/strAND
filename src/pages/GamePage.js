import React, { useState, useEffect } from 'react';
import GameGrid from '../components/GameGrid/GameGrid';
import { useLocation } from 'react-router-dom';
import axios from '../services/api';
import './GamePage.scss';
import '../components/GameGrid/GameGrid.scss';

function GamePage() {
  const [gridData, setGridData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const lectureCode = new URLSearchParams(location.search).get('code');
    axios.get(`/grid/${lectureCode}`).then((response) => {
      setGridData(response.data);
    });
  }, [location]);

  return (
    <div className="game-page">
      {gridData ? (
        <GameGrid gridData={gridData} />
      ) : (
        <p>Loading the game grid...</p>
      )}
    </div>
  );
}

export default GamePage;
