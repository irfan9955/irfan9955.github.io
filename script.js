//Typing-text.
var typed = new Typed(".auto-type", {
   strings: ["Java Backend Developer.","Problem Solver." ],
   typeSpeed: 150,
   backSpeed: 150,
   loop: true
})
//-----------Navbar--------------------------------
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
   header.classList.toggle("sticky", this.window.scrollY>0); 
})


// --------------GitHub-Calender--------------------
var username = "irfan9955";
GitHubCalendar(".calendar", "irfan9955", { responsive: true });

// ---------Menu responsive-------

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navlist.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('bx-x');
   navlist.classList.remove('active');
}