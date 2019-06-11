import React from 'react';
import ReposContainer from './components/ReposContainer';
import Navbar from './components/Navbar';
import FavoriteReposContainer from './components/FavoriteReposContainer';
import { Button } from '@material-ui/core';
import ViewContainer from './components/ViewContainer';

function App() {
  
  return (
    <div>
       <Navbar />
       <ViewContainer />
    </div>
    
  );
}

export default App;
