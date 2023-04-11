// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.box');
hiddenElements.forEach((el) => observer.observe(el));

//// Projects - show/hide image/image when clicked
// document.getElementById('image').style.zIndex = 1;
// function swap() {
//     document.getElementById('image').style.zIndex = -1 * document.getElementById('image').style.zIndex;
//     document.getElementById('overlay').style.zIndex = -1 * document.getElementById('overlay').style.zIndex;
//     }