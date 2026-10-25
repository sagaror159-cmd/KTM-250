
const demoButton = document.getElementById("demoButton");
const speedDisplay = document.getElementById("speed");
const rpmDisplay = document.getElementById("rpm");
const gearDisplay = document.getElementById("gear");
const demoNote = document.getElementById("demoNote");

let running = false;
let timer;
let step = 0;

demoButton.addEventListener("click", () => {
  if (running) {
    clearInterval(timer);
    running = false;
    demoButton.textContent = "START DEMO";
    speedDisplay.textContent = "0";
    rpmDisplay.textContent = "1200";
    gearDisplay.textContent = "N";
    demoNote.textContent = "Demo stopped.";
    return;
  }

  running = true;
  demoButton.textContent = "STOP DEMO";
  demoNote.textContent = "Demo only — not live bike data.";

  timer = setInterval(() => {
    step++;
    speedDisplay.textContent = (step * 7) % 91;
    rpmDisplay.textContent =
      (1200 + (step * 350) % 6500).toLocaleString("en-IN");
    gearDisplay.textContent = ["1", "2", "3", "4", "5", "6"][step % 6];
  }, 1000);
});

const filters = document.querySelectorAll(".filter");
const photos = document.querySelectorAll(".photo");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filters.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    photos.forEach((photo) => {
      photo.hidden =
        category !== "all" &&
        photo.dataset.category !== category;
    });
  });
});
