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
  var name = window.document.getElementById("names").value;
  var email = window.document.getElementById("email").value;
  var error_message = window.document.getElementById("error_message");
  var text;
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
