import React from 'react';

function StartTimer(props) {
  const { startCountDown } = props
  return (
    <div>
        <button onClick={() => startCountDown()}>Start Timer</button>
    </div>
  );
}

export default StartTimer;
