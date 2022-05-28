let bias = 0;
const biasChange = 270;
const sliderLine = document.querySelector(".team-list");
const next = document.querySelector(".next");
const back = document.querySelector(".back");

next.addEventListener("click", function () {
  bias += biasChange;
  if (bias === biasChange * 4) {
    bias = 0;
  }
  sliderLine.style.left = -bias + "px";
});

back.addEventListener("click", function () {
  bias -= biasChange;
  if (bias < 0) {
    bias = biasChange * 3;
  }
  sliderLine.style.left = -bias + "px";
});
