// ===============================
// EVENTRA PREMIUM MAIN SCRIPT
// ===============================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});

// ===============================
// MOBILE MENU
// ===============================

const hamburger =
document.querySelector(".hamburger");

const navMenu =
document.querySelector(".nav-menu");

if(hamburger){

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");

navMenu.classList.toggle("active");

});

}

document
.querySelectorAll(".nav-menu a")
.forEach(link => {

link.addEventListener("click", () => {

hamburger.classList.remove("active");

navMenu.classList.remove("active");

});

});

// ===============================
// FAQ
// ===============================

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const answer =
question.nextElementSibling;

document
.querySelectorAll(".faq-answer")
.forEach(item => {

if(item !== answer){

item.style.maxHeight = null;

}

});

if(answer.style.maxHeight){

answer.style.maxHeight = null;

}
else{

answer.style.maxHeight =
answer.scrollHeight + "px";

}

});

});

// ===============================
// SCROLL ANIMATION
// ===============================

const fadeElements =
document.querySelectorAll(
".service-card,.step,.vendor-box,.why-card,.testimonial"
);

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.15
});

fadeElements.forEach(element => {

element.classList.add("fade-up");

observer.observe(element);

});

// ===============================
// TESTIMONIAL AUTO SLIDER
// ===============================

const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function rotateTestimonials(){

if(testimonials.length === 0) return;

testimonials.forEach(card => {

card.style.display = "none";

});

testimonials[testimonialIndex]
.style.display = "block";

testimonialIndex++;

if(testimonialIndex >= testimonials.length){

testimonialIndex = 0;

}

}

if(testimonials.length > 0){

rotateTestimonials();

setInterval(
rotateTestimonials,
4000
);

}

// ===============================
// NAVBAR SHADOW
// ===============================

window.addEventListener("scroll", () => {

const header =
document.querySelector(".header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 25px rgba(0,0,0,.25)";

}
else{

header.style.boxShadow =
"none";

}

});

// ===============================
// COUNTER ANIMATION
// ===============================

const counters =
document.querySelectorAll(".stat-card h3");

const speed = 100;

const countObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter =
entry.target;

const target =
parseInt(
counter.innerText.replace(/\D/g,'')
);

let count = 0;

const updateCount = () => {

const increment =
target / speed;

if(count < target){

count += increment;

counter.innerText =
Math.floor(count) + "+";

requestAnimationFrame(updateCount);

}
else{

counter.innerText =
target + "+";

}

};

updateCount();

countObserver.unobserve(counter);

}

});

});

counters.forEach(counter => {

countObserver.observe(counter);

});

// ===============================
// SMOOTH SCROLL
// ===============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});