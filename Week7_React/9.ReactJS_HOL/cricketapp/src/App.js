
import React from 'react';
import { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

const IndianTeam = [
  'Virat Kohli', 'Rohit Sharma', 'Shubman Gill',
  'KL Rahul', 'Shreyas Iyer', 'Hardik Pandya'
];

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>FLAG</button>

      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 />
        </div>
      ) : (
        <div>
          <h1>Odd Players</h1>
          <OddPlayers players={IndianTeam} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers players={IndianTeam} />
          <hr />
          <div>
            <h1>List of Indian Players Merged:</h1>
            <ListofIndianPlayers IndianPlayers={IndianPlayers} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;