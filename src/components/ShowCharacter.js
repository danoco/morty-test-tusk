import React from 'react';
import { Link } from 'react-router-dom';
import './ShowCharacter.css';

function ShowCharacter({ characters }) {
  const renderedItem = characters.map((character) => {
    return (
      <Link
        to={`${character.id}`}
        key={character.id}
        className='main__items-inner'
      >
        <img
          className='main__items-img'
          src={character.image}
          alt='character'
        />
        <h2 className='main__items-title'>{character.name}</h2>
        <p className='main__items-name'>{character.species}</p>
      </Link>
    );
  });

  return <div className='main__items container'>{renderedItem}</div>;
}

export default ShowCharacter;
