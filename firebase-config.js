/* ==========================================================================
   FIREBASE CONFIGURATION & INITIALIZATION FOR NEWSLETTER & AUTH
   ========================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyB_placeholder_portfolio_key",
  authDomain: "sarwesv-portfolio.firebaseapp.com",
  projectId: "sarwesv-portfolio",
  storageBucket: "sarwesv-portfolio.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

let auth = null;
let googleProvider = null;
let db = null;

if (typeof firebase !== 'undefined') {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    auth = firebase.auth();
    googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.addScope('email');
    googleProvider.addScope('profile');
    db = firebase.firestore();
  } catch (e) {
    console.warn("Firebase Auth Notice:", e.message);
  }
}
