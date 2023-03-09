import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AiOutlineSearch } from 'react-icons/ai';

import { Dna } from 'react-loader-spinner';

import ShowCharacter from './ShowCharacter';
import './CharactersMainPage.css';

function CharactersMainPage() {
  const [characters, setCharacters] = useState(null);
  const [searchItem, setSearchItem] = useState(
    localStorage.getItem('name') || ''
  );

  const fetchCharacters = async (searchItem) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchItem}`
      );
      console.log(response.data.results);
      const responseSortData = response.data.results.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setCharacters(responseSortData);
    } catch (error) {
      if (error) localStorage.removeItem('name');
    }
  };

  useEffect(() => {
    if (searchItem) {
      localStorage.setItem('name', searchItem);
    } else {
      localStorage.removeItem('name');
    }
    fetchCharacters(localStorage.getItem('name') || searchItem);
  }, [searchItem]);

  return (
    <>
      {characters ? (
        <div className='main container'>
          <img
            className='main-img'
            src='/images/main-img.png'
            alt='Rick and Morty'
          />
          <form className='main-inner'>
            <input
              className='main-input'
              placeholder='Filter by name...'
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <AiOutlineSearch className='main-icon' />
          </form>
          <ShowCharacter characters={characters} />
        </div>
      ) : (
        <div className='loading-spinner'>
          Loading...{' '}
          <Dna
            visible={true}
            height='80'
            width='80'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper'
          />
        </div>
      )}
    </>
  );
}

export default CharactersMainPage;
