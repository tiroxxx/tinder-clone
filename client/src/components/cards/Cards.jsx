import './cards.css';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

export default function Cards() {
  const [people, setPeople] = useState([
    {
      name: 'elo musk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
    },
    {
      name: 'elo musk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
    },
    {
      name: 'elo musk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
    },
  ]);

  function swiped(direction, nameToDelete) {
    console.log(`removing ${nameToDelete}`);
  }

  function outOfFrame(name) {
    console.log(`${name} left the screen`);
  }

  return (
    <div className="cards">
      <div className="card-container">
        {people.map((person, index) => (
          <TinderCard
            className="swipe"
            key={index}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
              <div
              className="card"
              style={{ backgroundImage: `url(${person.url})`}}>
                  <h3>{person.name}</h3>
              </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
