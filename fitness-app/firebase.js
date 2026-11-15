// firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getAuth }        from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { getFirestore }   from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';
import { getStorage }     from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyDQwqNuIDSbaUfH_N6sy1fVZ1sZKHgbpwc",
  authDomain: "gofit-999.firebaseapp.com",
  projectId: "gofit-999",
  storageBucket: "gofit-999.firebasestorage.app",
  messagingSenderId: "655870780801",
  appId: "1:655870780801:web:292d28dbca3e6e00b9b480"
};

const app      = initializeApp(firebaseConfig);
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);
