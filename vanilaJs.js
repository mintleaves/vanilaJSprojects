// //  01. RANDOM BACKGROUND
// const colorLists = [
//   "red",
//   "lemon",
//   "pink",
//   "white",
//   "yellow",
//   "blue",
//   "green",
//   "silver",
//   "purple",
//   "orange",
// ];

// const mainContainer = document.getElementById("main_container");
// const bgColorName = document.getElementById("bg_color_name");
// const bgColorBtn = document.getElementById("bg_color_btn");

// function getRandomColors(colors) {
//   let randomBgColor = Math.floor(Math.random() * colorLists.length);

//   return colors[randomBgColor];
// }

// bgColorBtn.addEventListener("click", function () {
//   const result = getRandomColors(colorLists);
//   bgColorName.innerText = result;
//   console.log(result);
//   mainContainer.style.backgroundColor = result;
// });

// 02. OUR REVIEWS
const reviewLeftBtn = document.getElementById("left_arrow_btn");
const reviewRightBtn = document.getElementById("right_arrow_btn");

function Review(profileImg, name, profession, description) {
  this.profileImg = profileImg;
  this.name = name;
  this.profession = profession;
  this.description = description;
}

const personOne = new Review(
  "images/img1.jpg",
  "Fahmida Rahman",
  "Software Engineer",
  "Software engineering is a branch of computer science that uses engineering principles to design, develop, test, and maintain software systems. Software engineers use programming languages, platforms, and architectures to create software that is reliable, efficient, and user-friendly, and that solves real-world problems. Software can be used for many purposes, including communication, entertainment, and business, and is an integral part of daily life in today's digital world."
);

const personTwo = new Review(
  "images/img2.jpg",
  "Bilkis Ara Moly",
  "Senior Stuff Nurse",
  "Nursing is a healthcare profession that focuses on the health and well-being of individuals, families, and communities. Nurses work with doctors and other healthcare workers to help patients recover from illness, prevent disease, and maintain optimal health. They also help with end-of-life needs and support family members who are grieving."
);

const personThree = new Review(
  "images/img3.jpg",
  "Push Leo",
  "Web Developer",
  "A web developer is a professional who uses programming languages to build and maintain websites for clients. They are responsible for the design and construction of websites, ensuring that they look good, run smoothly, and meet user expectations. Web developers typically use multiple coding languages to perform different tasks, including HTML, CSS, JavaScript, PHP, Ruby, C/C++, and Python."
);

const reviews = [personOne, personTwo, personThree];
let currentReviewIndex = 0;

// console.log(reviews);
const profileImage = document.getElementById("review_img");
const reviewName = document.getElementById("review_name");
const reviewProfession = document.getElementById("review_profession");
const reviewDescription = document.getElementById("review_description");

function displayReview(index) {
  profileImage.src = reviews[index].profileImg;
  reviewName.textContent = reviews[index].name;
  reviewProfession.textContent = reviews[index].profession;
  reviewDescription.textContent = reviews[index].description;
}

reviewRightBtn.addEventListener("click", function() {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  displayReview(currentReviewIndex);
});
reviewLeftBtn.addEventListener("click", function() {
  currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
  displayReview(currentReviewIndex);
});

displayReview(currentReviewIndex);

document.addEventListener("DOMContentLoaded", function() {
  const reviewContainer = document.querySelector(".review_container");
  const surpriseBtn = document.getElementById("surprise_btn");

  surpriseBtn.addEventListener("click", function() {
    reviewContainer.classList.toggle("animate");
  });
});