/* ==========================================
   MENU HAMBURGER
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* ==========================================
   TUTUP MENU SAAT LINK DIKLIK
========================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ==========================================
   NAVBAR BERUBAH SAAT SCROLL
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";
        navbar.style.transition = ".3s";

    }else{

        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});


/* ==========================================
   FADE IN SAAT SCROLL
========================================== */

const sections = document.querySelectorAll(
"section"
);

function showSection(){

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section=>{

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",showSection);

showSection();


/* ==========================================
   TAMBAHKAN CLASS FADE OTOMATIS
========================================== */

sections.forEach(section=>{

    section.classList.add("fade");

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const tujuan=document.querySelector(this.getAttribute("href"));

tujuan.scrollIntoView({

behavior:"smooth"

});

});

});

emailjs.init({
    publicKey: "H2k3mTfSh4ne7QOQl",
});
/* ==========================================
   VALIDASI FORM
========================================== */

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Silakan lengkapi semua data terlebih dahulu.");
        return;
    }

    emailjs.send(
        "service_8xp9rru",
        "template_ildn5np",
        {
            name: name,
            email: email,
            message: message
        }
    )
    .then(function () {
        alert("Pesan berhasil dikirim!");
        form.reset();
    })
    .catch(function (error) {
        console.error(error);
        alert("Pesan gagal dikirim.");
    });
});


/* ==========================================
   EFEK HOVER CARD
========================================== */

const cards = document.querySelectorAll(".portfolio-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});


/* ==========================================
   SCROLL ACTIVE MENU
========================================== */

const menuLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 120;

const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

menuLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


const words = [
    "Rahmat Agil Ramdan",
    "ラフマット・アギル・ラムダン"
];

const typing = document.getElementById("typing-name");

let wordIndex = 0;
let charIndex = words[0].length;
let deleting = false;

function typeAnimation(){

    const current = words[wordIndex];

    if(deleting){
        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
        }

        setTimeout(typeAnimation,60);

    }else{

        typing.textContent = words[wordIndex].substring(0,charIndex++);

        if(charIndex > words[wordIndex].length){

            deleting = true;
            setTimeout(typeAnimation,2000);

        }else{

            setTimeout(typeAnimation,120);

        }

    }

}

setTimeout(typeAnimation,2000);

/*=========================
 DARK MODE
==========================*/

const darkButton = document.getElementById("dark-mode-toggle");

darkButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});

/*=========================
 IMAGE POPUP
=========================*/

const images = document.querySelectorAll(".portfolio-img");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

images.forEach(img =>{

    img.addEventListener("click",()=>{

        modal.style.display="flex";
        modalImage.src=img.src;

    });

});

closeBtn.onclick=function(){

    modal.style.display="none";

}

modal.onclick=function(e){

    if(e.target===modal){

        modal.style.display="none";

    }

}