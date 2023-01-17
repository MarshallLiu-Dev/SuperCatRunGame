const cat = document.querySelector(".cat");
const tijolo = document.querySelector(".tijolo");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!cat.classList.contains("jump")) {
    cat.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      cat.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

setInterval(() => {
  let catBottom = parseInt(
    window.getComputedStyle(cat).getPropertyValue("bottom")
  );
  let tijoloLeft = parseInt(
    window.getComputedStyle(tijolo).getPropertyValue("left")
  );

  if (tijoloLeft > 40 && tijoloLeft < 270 && catBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;

  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);