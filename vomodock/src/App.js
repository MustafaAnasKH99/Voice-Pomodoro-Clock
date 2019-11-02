import React from 'react';

// Components
import Timer from './Components/Timer'
import SetTimer from './Components/SetTimer'
import StartTimer from './Components/StartTimer'

function App() {
  return (
    <div className="App">
        <SetTimer />
        <Timer />
        <StartTimer />
    </div>
  );
}

export default App;
