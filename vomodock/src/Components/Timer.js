import React from 'react';

function Timer(props) {
  const { seconds, minutes } = props
  return (
    <div>
        <code>{minutes}</code>
        <code>:{seconds}</code>
    </div>
  );
}

export default Timer;
