// firebaseauth.js

// 1) Import Firebase App & Auth from CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import {
  getAuth,
  signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

// 2) Your Firebase project config
const firebaseConfig = {
  apiKey:            'AIzaSyDQwqNuIDSbaUfH_N6sy1fVZ1sZKHgbpwc',
  authDomain:        'gofit-999.firebaseapp.com',
  projectId:         'gofit-999',
  storageBucket:     'gofit-999.appspot.com',
  messagingSenderId: '655870780801',
  appId:             '1:655870780801:web:292d28dbca3e6e00b9b480'
};

// 3) Initialize Firebase & Auth
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4) Utility: show messages in your page
function showMessage(elId, message) {
  const div = document.getElementById(elId);
  div.textContent = message;
  div.style.display = 'block';
}

// 5) Handle User login form
const userForm = document.getElementById('userForm');
if (userForm) {
  userForm.addEventListener('submit', async e => {
    e.preventDefault();
    const email    = userForm.identifier.value.trim().toLowerCase();
    const password = userForm.password.value.trim();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // redirect only after successful login
      window.location.href = 'user.html';
    } catch (err) {
      showMessage('signInMessage', err.message);
    }
  });
}

// 6) Handle Trainer login form
const trainerForm = document.getElementById('trainerForm');
if (trainerForm) {
  trainerForm.addEventListener('submit', async e => {
    e.preventDefault();
    const email    = trainerForm.identifier.value.trim().toLowerCase();
    const password = trainerForm.password.value.trim();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = 'trainer.html';
    } catch (err) {
      showMessage('trainerMessage', err.message);
    }
  });
}

// 7) No auto-redirect here—login page will stay until one of the forms is submitted