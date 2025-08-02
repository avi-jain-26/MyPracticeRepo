import React from 'react';

function EvenPlayers({players}) {
  return (
    <ul>
      <li>Second: {players[1]}</li>
      <li>Fourth: {players[3]}</li>
      <li>Sixth: {players[5]}</li>
    </ul>
  );
}

export default EvenPlayers;
