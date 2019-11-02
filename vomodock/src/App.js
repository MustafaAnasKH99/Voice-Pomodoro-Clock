import React, { useState } from 'react';

// Components
import Timer from './Components/Timer'
import SetTimer from './Components/SetTimer'
import StartTimer from './Components/StartTimer'

function App() {

  const [ minutes, setMinutes ] = useState(0)
  const [ seconds, setSeconds ] = useState(0)

  const handleChange = (e) => {
    setMinutes(e)
  }

  return (
    <div className="App">
        <SetTimer minutes={minutes} handleChange={handleChange}/>
        <Timer seconds={seconds} minutes={minutes} />
        <StartTimer />
    </div>
  );
}

export default App;
