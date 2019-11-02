import React from 'react';

function SetTimer(props) {
    const { minutes, handleChange } = props
  return (
    <div>
        <code>SetTimer ..</code>
        {minutes}
        <br />
        <input placeholder="Set Seconds" onChange={(e) => handleChange(e.target.value)}/>
    </div>
  );
}

export default SetTimer;
