const MIN_DURATION = 10;

function makeSnowflake() {
  const snowflake = document.createElement("div");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;

  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random() * window.screen.width}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;

  document.body.appendChild(snowflake);

  setTimeout(() => {
    document.body.removeChild(snowflake);
  }, (duration + delay) * 1000);
}

function generateSnowflakes() {
  setInterval(makeSnowflake, 100);
}

generateSnowflakes();

export { makeSnowflake };