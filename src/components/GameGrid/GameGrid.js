import React, { useState } from 'react';
import './GameGrid.scss';

function GameGrid({ gridData }) {
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  const handleCellClick = (rowIndex, colIndex) => {
    // Logic to handle cell selection and word validation
  };

  return (
    <div className="game-grid">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="game-grid__row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`game-grid__cell ${
                selectedCells.some(
                  (cell) => cell.row === rowIndex && cell.col === colIndex
                )
                  ? 'game-grid__cell--selected'
                  : ''
              }`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameGrid;
