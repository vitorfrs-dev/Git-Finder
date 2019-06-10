import React from 'react';
import ReposContainer from './components/ReposContainer';
import Navbar from './components/Navbar';
import FavoriteReposContainer from './components/FavoriteReposContainer';

function App() {
  return (
    <div>
       <Navbar />
        <ReposContainer />
        <FavoriteReposContainer />
    </div>
    
  );
}

export default App;
