import React from 'react';
import Flashcards from '../components/Flashcards/Flashcards';
<<<<<<< HEAD
import './DashboardPage.scss';

=======
import '../components/Dashboard/Dashboard.scss';
>>>>>>> 5bbc76d (Save uncommitted changes before pulling)
function DashboardPage() {
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Your Dashboard</h2>
      <div className="dashboard__sections">
        {/* User history and performance metrics can be added here */}
        <Flashcards />
      </div>
    </div>
  );
}

export default DashboardPage;
