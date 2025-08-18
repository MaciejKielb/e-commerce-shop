import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCKAoRPr17zRqDjn6aP3-n8SEPA20Ee-4s',
  authDomain: 'maciej-e-commerce.firebaseapp.com',
  projectId: 'maciej-e-commerce',
  storageBucket: 'maciej-e-commerce.firebasestorage.app',
  messagingSenderId: '200331449501',
  appId: '1:200331449501:web:f82b50e0956dd6403fb074',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
