import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import './CharacterItemInfo.css';

function CharacterItemInfo() {
  const [characterById, setCharacterById] = useState(null);
  const { id } = useParams();

  const fetchCharacterById = async (id) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    console.log(response.data);
    setCharacterById(response.data);
  };

  useEffect(() => {
    fetchCharacterById(id && 1);
  }, []);

  return (
    <div className='character-info'>
      <Link to={'/'}>
        <button className='character-info-btn'>
          <AiOutlineArrowLeft className='btn-arrow' /> GO BACK
        </button>
      </Link>

      {characterById && (
        <div className='character-info__inner'>
          <img
            className='character-info-img'
            src={characterById.image}
            alt='character'
          />
          <h2 className='character-info-title'>{characterById.name}</h2>
          <p className='character-info-text'>Informations</p>
          <ul className='character-info__data-list'>
            <li className='character-info__data-item'>
              <p className='character-info__data-title'> Gender</p>
              <p className='character-info__data-text'>
                {characterById.gender}
              </p>
            </li>
            <li className='character-info__data-item'>
              <p className='character-info__data-title'>Status</p>
              <p className='character-info__data-text'>
                {characterById.status}
              </p>
            </li>
            <li className='character-info__data-item'>
              <p className='character-info__data-title'>Specie</p>
              <p className='character-info__data-text'>
                {characterById.species}
              </p>
            </li>
            <li className='character-info__data-item'>
              <p className='character-info__data-title'>Origin</p>
              <p className='character-info__data-text'>
                {characterById.origin.name}
              </p>
            </li>
            <li className='character-info__data-item'>
              <p className='character-info__data-title'>Type</p>
              <p className='character-info__data-text'>
                {characterById.type || 'Unknown'}
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CharacterItemInfo;
