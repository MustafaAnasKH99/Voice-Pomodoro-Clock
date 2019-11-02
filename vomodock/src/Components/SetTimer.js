import React from 'react';

function SetTimer(props) {
    const { minutes, handleChange } = props
  return (
    <div>
        <code>SetTimer ..</code>
        <br />
        <input type="text" pattern="[0-9]*" placeholder="Set Minutes" onChange={(e) => handleChange(e.target)}/>
    </div>
  );
}

export default SetTimer;
