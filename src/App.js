import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from './firebase';

import { Dna } from 'react-loader-spinner';

import CharactersMainPage from './components/CharactersMainPage';
import CharacterItemInfo from './components/CharacterItemInfo';

function App() {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user != null) {
        return setUser(user);
      }

      signInWithPopup(auth, googleAuthProvider)
        .then((credentials) => setUser(credentials))
        .catch((e) => console.error(e));
    });

    return unsub;
  }, [auth]);

  return user != null ? (
    <Routes>
      <Route path='/' element={<CharactersMainPage />} />
      <Route path='/:id' element={<CharacterItemInfo />} />
    </Routes>
  ) : (
    <div className='loading-spinner'>
      Loading...(allow to popup)
      <Dna
        visible={true}
        height='80'
        width='80'
        ariaLabel='dna-loading'
        wrapperStyle={{}}
        wrapperClass='dna-wrapper'
      />
    </div>
  );
}

export default App;
