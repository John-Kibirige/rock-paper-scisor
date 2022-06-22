const intro = document.querySelector(".intro");
const playBtn = document.querySelector(".play");

const playSection = document.querySelector(".play-section");
const results = document.querySelector(".results");
const records = document.querySelector(".records");

playBtn.addEventListener("click", (e) => {
   e.preventDefault();
   intro.classList.add("remove");
});
