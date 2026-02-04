// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  var leaderboard = new LeaderboardManager('https://script.google.com/macros/s/AKfycbwbWGvDVof2KlUkNwOPfqDLvb8uTsgo7UsLlhmGl8jQ7F3G8lqUrnWDxPG4yf90i0O1/exec');
  window.gameLeaderboard = leaderboard;
  leaderboard.createPermanentLeaderboard();

});
