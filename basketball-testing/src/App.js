import React, { useState } from 'react';

import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  let [points, setPoints] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
