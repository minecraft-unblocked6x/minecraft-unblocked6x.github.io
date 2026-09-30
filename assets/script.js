// Lightweight shared JS
(function boot(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const fullscreenButton = document.getElementById('fullscreen-button');
  const gameContainer = document.getElementById('game-frame-container');

  if (fullscreenButton && gameContainer) {
    fullscreenButton.addEventListener('click', () => {
      const request = gameContainer.requestFullscreen || gameContainer.webkitRequestFullscreen || gameContainer.msRequestFullscreen;

      if (document.fullscreenElement || document.webkitFullscreenElement) {
        const exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exit) exit.call(document);
      } else if (request) {
        request.call(gameContainer);
      }
    });
  }
})();

