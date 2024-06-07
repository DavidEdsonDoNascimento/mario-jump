const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

const marioJump = () => {
  mario.classList.add("jump-mario");
  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
}

const gameOver = (marioPosition, pipePosition) => {
  pipe.style.animation = 'none';
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = 'none';
  mario.style.bottom = `${marioPosition}px`;

  const cloudsPosition = clouds.offsetLeft;
  clouds.style.animation = 'none';
  clouds.style.left = `${cloudsPosition}px`;

  mario.src = '../imgs/game-over.png';
  mario.style.width = '80px';
  mario.style.marginLeft = '50px';
}

const checkLoop = setInterval(() => {
  // getting the position to the left of the pipe for checking
  const pipePosition = pipe.offsetLeft;

  const marioPosition = +window.getComputedStyle(mario)
    .bottom.replace('px', '');;

  // game over when touching the pipe
  if ((pipePosition > 0 && pipePosition <= 120) && marioPosition < 80) {
    gameOver(
      marioPosition, 
      pipePosition,
    );
    clearInterval(checkLoop);
  }
}, 10);

document.addEventListener("keyup", marioJump);
document.addEventListener("touchstart", marioJump);