const firebaseConfig = {
    apiKey: "AIzaSyBEUEKrOEBm3RjxIPdk25zNfkqZHYXMCWA",
    authDomain: "getmo-79b09.firebaseapp.com",
    databaseURL: "https://getmo-79b09-default-rtdb.firebaseio.com",
    projectId: "getmo-79b09",
    storageBucket: "getmo-79b09.firebasestorage.app",
    messagingSenderId: "567309235300",
    appId: "1:567309235300:web:5259a832d651d3362b5b71",
    measurementId: "G-R3DCF9PDEB"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to Firebase services - make them global
window.database = firebase.database();
window.auth = firebase.auth();

// Track Firebase ready state
window.firebaseReady = false;

// Anonymous authentication for basic user tracking
window.auth.signInAnonymously()
  .then(function() {
    console.log("Firebase authenticated successfully");
    window.firebaseReady = true;
    // Trigger custom event when Firebase is ready
    window.dispatchEvent(new Event('firebaseReady'));
  })
  .catch(function(error) {
    console.error("Firebase auth error:", error);
  });