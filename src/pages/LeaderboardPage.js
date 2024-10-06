import React, { useState, useEffect } from 'react';
import axios from '../services/api';
<<<<<<< HEAD
import './LeaderboardPage.scss';
=======
import '../components/Leaderboard/Leaderboard.scss';
>>>>>>> 5bbc76d (Save uncommitted changes before pulling)

function LeaderboardPage() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [filter, setFilter] = useState('time');

  useEffect(() => {
    axios.get('/leaderboard').then((response) => {
      setLeaderboardData(response.data);
    });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    // Optionally re-fetch or sort data based on filter
  };

  return (
    <div className="leaderboard">
      <h2 className="leaderboard__title">Leaderboard</h2>
      <select
        className="leaderboard__filter"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="time">Time Taken</option>
        <option value="attempts">Number of Attempts</option>
        <option value="course">Course</option>
      </select>
      <table className="leaderboard__table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>{filter.charAt(0).toUpperCase() + filter.slice(1)}</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData
            .sort((a, b) => a[filter] - b[filter])
            .map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user[filter]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderboardPage;
