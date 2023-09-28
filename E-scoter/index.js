"use-strict";

// Responsive Nav bar
const barsResposive = document.querySelector("header .bars");
const navResponsive = document.querySelector("nav .main-ul");
const productsButton = document.querySelector(".productsButton");
const productsUl = document.querySelector(".secondary-ul");
const header = document.querySelector("header");
let navResponsiveSeen = false;
barsResposive.addEventListener("click", function (e) {
  e.preventDefault();

  if (!navResponsiveSeen) {
    navResponsive.style.transform = "scale(1) ";
    navResponsive.style.transition = " all ease .3s";
    navResponsiveSeen = true;
  } else {
    navResponsive.style.transform = "scale(0) ";
    navResponsiveSeen = false;
  }
});
let mainUlBefore = navResponsive.offsetHeight;
console.log(`Before : ${mainUlBefore / 16}rem`);
productsButton.addEventListener("click", function (e) {
  e.preventDefault();
  mainUlBefore = navResponsive.offsetHeight;
});

window.addEventListener("resize", function (e) {
  e.preventDefault();
  let currentWidth = this.window.innerWidth;
  if (currentWidth >= 860) {
    console.log("hhello");
    navResponsive.style.display = "flex";
    navResponsive.style.transform = "scale(1) ";
  } else {
    navResponsive.style.transform = "scale(0) ";
    navResponsive.style.transition = "all ease 0s ";
  }
});

// ___________Testimonials __________________________

const LeftArrow = document.querySelector(".seventhScreen .buttons .Left");
const RightArrow = document.querySelector(".seventhScreen .buttons .Right");
const Testimonials = document.querySelector(".seventhScreen .Testimonials");
const CardsNumber = document.querySelectorAll(
  ".seventhScreen .Testimonials .Card"
);
const CardOne = document.querySelector(".seventhScreen .Testimonials .Cone");
const CardTwo = document.querySelector(".seventhScreen .Testimonials .Ctwo");
const CardThree = document.querySelector(
  ".seventhScreen .Testimonials .Cthree"
);

// let CardsNumberToUse  = CardsNumber.length*21

let currentLeft = 0;
const CardFour = document.querySelector(".seventhScreen .Testimonials .Cfour");
const AllCards = [CardOne, CardTwo, CardThree, CardFour];
let current = 0;
let currentRight = 0;
RightArrow.addEventListener("click", function () {
  console.log(window.innerWidth);

  if (window.innerWidth >= 900) {
    if (current < 21) {
      current += 21;
      console.log(current);
    }
  } else if (window.innerWidth < 900 && window.innerWidth >= 600) {
    if (current < 42) {
      current += 21;
      console.log(current);
    }
  } else if (window.innerWidth < 600) {
    if (current < 63) {
      current += 21;
      console.log(current);
    }
  }

  AllCards.forEach((a) => (a.style.transform = `translateX(-${current}rem)`));
  // console.log(currentRight);
  AllCards.forEach((a) => (a.style.transition = "all ease 0.2s"));
  // console.log(`Current = ${current}`);
});

let currentPosition = LeftArrow.addEventListener("click", function () {
  if (current >= 21) {
    current -= 21;
    console.log(current);
  }

  AllCards.forEach((a) => (a.style.transform = `translateX(-${current}rem)`));
  // console.log(currentLeft);

  AllCards.forEach((a) => (a.style.transition = "all ease 0.2s"));
  // current = current - 21;
  // console.log(`Current = ${current}`);
});
