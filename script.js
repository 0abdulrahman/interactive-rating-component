const lis = document.querySelectorAll("ul li");
const submitBtn = document.querySelector("#submit");
const ratingSection = document.querySelector(".rating");
const thanksSection = document.querySelector(".thanks");
const rateInfo = document.querySelector("#selected-rate");
let score;

lis.forEach((el) => {
  el.addEventListener("click", () => {
    lis.forEach((el) => {
      el.removeAttribute("class");
    });
    el.setAttribute("class", "selected");
    score = el.innerText;
  });
});

submitBtn.addEventListener("click", () => {
  if (score) {
    ratingSection.style.display = "none";
    thanksSection.style.display = "flex";
    rateInfo.innerHTML = `You selected ${score} out of 5`;
  } else {
    return false;
  }
});
