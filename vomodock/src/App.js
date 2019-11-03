import React, { useState } from 'react';

// Components
import Timer from './Components/Timer'
import SetTimer from './Components/SetTimer'
import StartTimer from './Components/StartTimer'

function App() {

  const [ minutes, setMinutes ] = useState(0)
  const [ seconds, setSeconds ] = useState(0)

  const handleChange = (e) => {
    if(e.validity.valid){
      e.value === '' ? setMinutes(0) : setMinutes(e.value)
    }
  }

  const startCountDown = async () => {

  }

  return (
    <div className="App">
        <SetTimer minutes={minutes} handleChange={handleChange}/>
        <Timer seconds={seconds} minutes={minutes} />
        <StartTimer startCountDown={startCountDown}/>
    </div>
  );
}

export default App;
