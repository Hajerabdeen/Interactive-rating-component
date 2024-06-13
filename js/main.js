const mainContainer = document.querySelector(".main-container");
const secContainer = document.querySelector(".sec-container");
const btnSubmit = document.getElementById("Submit");
const btnRerate = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

btnSubmit.addEventListener("click", () => {
  secContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});

btnRerate.addEventListener("click", () => {
  secContainer.classList.add("hidden");
  mainContainer.classList.remove("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
