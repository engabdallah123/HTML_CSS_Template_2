
// pricing
let pricingSection = document.querySelector("#Pricing");
let num = document.querySelectorAll(".pricing .head span");

let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= pricingSection.offsetTop) {
    if (!started) {
      num.forEach((e) => {
        startCount(e);
      });
    }
    started = true;
  }
});

function startCount(ele) {
  let pricing = ele.dataset.pricing;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent === pricing) {
      clearInterval(count);
    }
  }, 1000 / pricing);
}

// our skills
let skillSection = document.querySelector(".skills");
let span = document.querySelectorAll(".skills span");

window.onscroll = function () {
  if (window.scrollY >= skillSection.offsetTop) {
    span.forEach((e) => {
      e.style.width = e.dataset.progress;
    });
  }
};
