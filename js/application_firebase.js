// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  
  // Function to initialize leaderboard (with duplicate prevention)
  function initializeLeaderboard() {
    // Check if leaderboard already exists
    if (window.gameLeaderboard) {
      console.log('Leaderboard already initialized, skipping...');
      return;
    }
    
    // Check if permanent leaderboard HTML already exists
    if (document.querySelector('.permanent-leaderboard')) {
      console.log('Leaderboard HTML already exists, skipping...');
      return;
    }
    
    console.log('Initializing leaderboard...');
    var leaderboard = new FirebaseLeaderboardManager();
    window.gameLeaderboard = leaderboard;
    leaderboard.createPermanentLeaderboard();
  }
  
  // Wait for Firebase to be ready before creating leaderboard
  if (window.firebaseReady) {
    // Firebase is already ready
    initializeLeaderboard();
  } else {
    // Wait for Firebase ready event (only once)
    window.addEventListener('firebaseReady', initializeLeaderboard, { once: true });
  }
});