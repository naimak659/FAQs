const clickQuestion = document.querySelectorAll("#clickQuestion");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const moreDiv = document.querySelectorAll(".morediv");
const moreChild = document.querySelectorAll(".morechild");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].classList.add("hidden");
    minus[i].classList.remove("hidden");
    moreDiv[i].classList.add("h-40");
    moreDiv[i].classList.add("sm:h-20");
    moreDiv[i].classList.remove("-h-40");
    moreDiv[i].classList.remove("sm:-h-20");
    moreChild[i].classList.add("top-0");
    moreChild[i].classList.remove("-top-40");
  });
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    minus[i].classList.add("hidden");
    plus[i].classList.remove("hidden");
    moreDiv[i].classList.add("-h-40");
    moreDiv[i].classList.add("sm:-h-20");
    moreDiv[i].classList.remove("h-40");
    moreDiv[i].classList.remove("sm:h-20");
    moreChild[i].classList.remove("top-0");
    moreChild[i].classList.add("-top-40");
  });
}
