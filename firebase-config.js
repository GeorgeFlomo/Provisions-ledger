// ============================================================
// Provisions Ledger — shared database connection
// ============================================================
// This is what makes every device (the shop PC, your phone, a
// second computer, etc.) see the SAME live inventory, sales and
// staff data. Without it filled in, each device would only see
// its own local copy.
//
// SETUP (about 5 minutes, free):
//   1. Go to https://console.firebase.google.com and sign in
//      with any Google account.
//   2. Click "Add project", give it any name, finish the wizard.
//   3. In the left sidebar, click "Build" > "Firestore Database"
//      > "Create database". Choose "Start in test mode" and pick
//      any location close to you.
//   4. Back on the project Overview page, click the "</>" (Web)
//      icon to register a web app. Give it any nickname.
//   5. Firebase will show you a firebaseConfig object. Copy those
//      values into the object below, replacing the placeholders.
//   6. Save this file, then open index.html (or reload it if it
//      was already open).
//
// Do this once. From then on, copy this whole folder (index.html,
// bundle.js and this file together) to every device you want
// sharing the same live data — you do NOT need to repeat the
// Firebase setup for each device, just reuse the same three files.
//
// Note on security: the test-mode database rules Firebase suggests
// above allow anyone with these keys to read and write the data.
// That's fine for a small internal tool, but don't publish this
// file anywhere public. If you want it locked down further, edit
// your Firestore security rules in the Firebase console.
// ============================================================

window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
