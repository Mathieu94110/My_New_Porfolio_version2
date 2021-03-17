import _ from "lodash"; //lodash permet d'importé le script
import "./main.scss";

//Select DOM Items

const menuBtn = document.querySelector(".menu-btn");

const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set Initial State Of Menu

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");

    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");

    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    //Set Menu State
    showMenu = false;
  }
}
// validate form
//<div id="error-message"></div>
//    <div class="items">
//      <label for="name" class="label">Nom</label>
//      <input id="name" type="text" class="input" />
//    </div>
//     <div class="items">
//        <label for="email">Email</label>
//        <input type="email" class="email" />
//      </div>
//      <div class="items">
//       <label for="name" class="label">Sujet</label>
//        <input id="name" type="text" class="input" />
//       </div>
//      <div class="items">
//        <label for="name" class="label">Message</label>
//        <textarea id="msg" class="text-area"></textarea>
//      </div>
//      <button class="btn">Envoyer</button>

function validateForm() {
  let name = window.document.getElementById("names").value;
  let email = window.document.getElementById("email").value;
  let error_message = window.document.getElementById("error_message");
  let text;
  error_message.style.padding = "10px";
  if (name.length < 5) {
    text = "Merci d'indiqué un Nom valide !";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "L'adresse email est incorrecte";

    error_message.innerHTML = text;
    return false;
  }
  alert("Formulaire envoyé avec succès");
  error_message.style.padding = "0px";
  return true;
}
//Skills Animations

//Rotate img_logo

$(".skills").each(function (index, element) {
  let tl = new TimelineMax({ paused: true, reversed: true });
  tl.to(this, 0.5, { scale: 1.4 });
  $(element).hover(makeItHappen, makeItHappen);

  function makeItHappen() {
    tl.reversed() ? tl.play() : tl.reverse();
  }
});
//Modal onClick opening
let box = $(".box");

let action = new TimelineMax({ paused: true, reversed: true }).to(box, 0.8, {
  x: "+=50vw",
  ease: Power0.easeNone,
});

$(".skills").click(function () {
  gsap.to(".skills", { scale: 1 });
  action.reversed() ? action.play() : action.reverse();
});

//
/*
TweenLite.set(".SlideModalBottom", { autoAlpha: 0, y: 50 });
TweenLite.set(".modalOverlay", { autoAlpha: 0 });

let quickLinksTradeBTN = document.getElementById("quickLinksTradeBTN");

quickLinksTradeBTN.onclick = function () {
  let rect = this.getBoundingClientRect();
  TweenMax.set(".modalOverlay", {
    x: rect.left,
    y: rect.top,
    height: rect.height,
    width: rect.width,
  });

  let tl = new TimelineMax();

  tl.to(".modalOverlay", 0.3, {
    height: window.innerHeight,
    width: window.innerWidth,
    x: 0,
    y: 0,
    autoAlpha: 1,
  });

  tl.to(".SlideModalBottom", 0.5, {
    autoAlpha: 1,
    y: 0,
    ease: Power1.easeInOut,
  });

  SlideModalBottomToggle = true;

  let modelBottomLabel = document.getElementById("modelBottomLabel");
  modelBottomLabel.innerHTML = "Modal Content Here";
};

modalOverlay1.onclick = function () {
  if (SlideModalBottomToggle == true) {
    TweenMax.to(".SlideNavLeft", 0.5, { x: 0, ease: Power1.easeInOut });

    TweenLite.to(".SlideNavRight", 0.5, { x: 0, ease: Power1.easeInOut });

    TweenLite.to(".SlideModalBottom", 0.4, {
      autoAlpha: 0,
      y: 50,
      ease: Power1.easeInOut,
    });

    TweenLite.to(".modalOverlay", 0.5, {
      autoAlpha: 0,
      ease: Power1.easeInOut,
    });

    slideModalBottom = false;
  } else {
  }
};
*/
