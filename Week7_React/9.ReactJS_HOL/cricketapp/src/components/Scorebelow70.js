import React from 'react';

const players = [
  { name: 'Virat', score: 95 },
  { name: 'Rohit', score: 88 },
  { name: 'Hardik', score: 65 },
  { name: 'Gill', score: 45 },
  { name: 'Bumrah', score: 99 },
  { name: 'Rahul', score: 50 },
  { name: 'Surya', score: 72 },
  { name: 'Kuldeep', score: 33 },
  { name: 'Shami', score: 90 },
  { name: 'Pant', score: 61 },
  { name: 'Jadeja', score: 85 }
];

function Scorebelow70() {
  const below70 = players.filter(p => p.score <= 70);

  return (
    <ul>
      {below70.map((item, idx) => (
        <li key={idx}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </ul>
  );
}

export default Scorebelow70;
