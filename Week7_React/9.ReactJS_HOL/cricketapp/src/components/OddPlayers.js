import React from 'react';

function OddPlayers({players}) {
  return (
    <ul>
      <li>First: {players[0]}</li>
      <li>Third: {players[2]}</li>
      <li>Fifth: {players[4]}</li>
    </ul>
  );
}

export default OddPlayers;
