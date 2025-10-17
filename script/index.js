const elTime = document.querySelector('#user-time');

function renderTime() {
  const now = Date.now();
  if (elTime) elTime.textContent = String(now);
}
renderTime();
const timeInterval = setInterval(renderTime, 1000);


window.addEventListener('unload', () => {
  clearInterval(timeInterval);
});
