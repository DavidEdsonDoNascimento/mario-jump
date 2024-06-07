const mario = document.querySelector(".mario");

const marioJump = () => {
  mario.classList.add("jump-mario");
  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
}

document.addEventListener("keyup", marioJump);
document.addEventListener("touchstart", marioJump);