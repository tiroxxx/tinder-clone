import './cards.css';
import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import axios from '../../Axios';

export default function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('./users');
      setPeople(request.data);
    }

    fetchData()
  }, []);


  function swiped(direction, nameToDelete) {
    console.log(`removing ${nameToDelete}`);
  }

  function outOfFrame(name) {
    console.log(`${name} left the screen`);
  }

  return (
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
            style={{ backgroundImage: `url(${person.img})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
