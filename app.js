const hamburger= document.querySelector(".hamburger");
const navLinks= document.querySelector(".main-nav ul");
const links= document.querySelector(".main-nav ul li");

hamburger.addEventListener("click", ()=>{
	navLinks.classList.toggle("open");
});