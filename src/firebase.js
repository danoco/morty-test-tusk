// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

//не робить з env взагалі ніяк може я щось не розумію

const firebaseConfig = {
  apiKey: 'AIzaSyBVb51qcRRJB654SW0k7e92zxyT-LWn4mY',
  authDomain: 'test-rick-f9f69.firebaseapp.com',
  projectId: 'test-rick-f9f69',
  storageBucket: 'test-rick-f9f69.appspot.com',
  messagingSenderId: '306918353990',
  appId: '1:306918353990:web:d2ff716822377b3b6e6e47',
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
