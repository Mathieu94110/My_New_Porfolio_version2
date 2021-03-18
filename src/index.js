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

$(".skills_img").each(function (index, element) {
  let tl = new TimelineMax({ paused: true, reversed: true });
  tl.to(this, 0.5, { scale: 1.4 });
  $(element).hover(makeItHappen, makeItHappen);

  function makeItHappen() {
    tl.reversed() ? tl.play() : tl.reverse();
  }
});

//Modal html/css/js onClick opening left to right
let container_one = document.getElementById("skills_one");
let html = document.getElementById("skills_img_one");
let box = document.getElementById("box_one");
let skills_background_one = document.getElementById("skills_one");
//converts viewport units to pixels (like "50vw" or "20vh" into pixels)
function toPX(value) {
  return (
    (parseFloat(value) / 100) *
    (/vh/gi.test(value) ? window.innerHeight : window.innerWidth)
  );
}
/////
CSSPlugin.defaultTransformPerspective = 300;
let timeline = new TimelineLite({ paused: true });
timeline
  .set(box, { x: "0vw", visibility: "visible", zIndex: 2 })
  .to(skills_background_one, 0.1, {
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.3)",
  })
  .to(box, { x: toPX("50vw") })
  .to(box, { rotationX: "360" })
  .staggerFrom(
    "ul.text_content>li",
    0.5,
    {
      opacity: 0,
      cycle: {
        x: function (i) {
          return (i + 1) * 50;
        },
        ease: function (i) {
          return Back.easeOut.config(i * 0.3);
        },
      },
    },
    0.1
  );

/*
  .to("ul.text_content>li", {
    duration: 0.5,
    delay: 4,
    scale: 0,
    stagger: 0.5,
  });*/
//animate out 3 seconds later

let counter = 0;
html.onclick = () => {
  ++counter;

  if (counter % 2 === 0) {
    timeline.reverse();
  } else {
    timeline.restart();
  }
};
container_one.addEventListener("mouseleave", (e) => {
  timeline.reverse();
});
//
////Modal Sass onClick opening  right to left
let container_two = document.getElementById("skills_two");
let htmlTwo = document.getElementById("skills_img_two");
let boxTwo = document.getElementById("box_two");
let skills_background_two = document.getElementById("skills_two");
let timelineTwo = new TimelineLite({ paused: true });
timelineTwo
  .set(boxTwo, { x: "50vw", visibility: "visible", zIndex: 2 })
  .to(skills_background_two, 0.1, {
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.3)",
  })
  .to(boxTwo, 0.6, { x: toPX("0vw") })
  .to(boxTwo, 1, { rotationX: "360" })
  .staggerFrom(
    "ul.text_content_two>li",
    0.5,
    {
      opacity: 0,
      cycle: {
        x: function (i) {
          return (i + 1) * 50;
        },
        ease: function (i) {
          return Back.easeOut.config(i * 0.3);
        },
      },
    },
    0.1
  );
//animate out 3 seconds later

htmlTwo.onclick = () => {
  ++counter;

  if (counter % 2 === 0) {
    timelineTwo.reverse();
  } else {
    timelineTwo.restart();
  }
};
container_two.addEventListener("mouseleave", (e) => {
  timelineTwo.reverse();
});
//
////Modal React onClick opening   left to Left
let container_three = document.getElementById("skills_three");
let htmlThree = document.getElementById("skills_img_three");
let boxThree = document.getElementById("box_three");
let skills_background_three = document.getElementById("skills_three");
//converts viewport units to pixels (like "50vw" or "20vh" into pixels)

CSSPlugin.defaultTransformPerspective = 300;
let timelineThree = new TimelineLite({ paused: true });
timelineThree
  .set(boxThree, { x: "0vw", visibility: "visible", zIndex: 2 })
  .to(skills_background_three, 0.1, {
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.3)",
  })
  .to(boxThree, 0.6, { x: toPX("50vw") })
  .to(boxThree, 1, { rotationX: "360" })
  .staggerFrom(
    "ul.text_content_three>li",
    0.5,
    {
      opacity: 0,
      cycle: {
        x: function (i) {
          return (i + 1) * 50;
        },
        ease: function (i) {
          return Back.easeOut.config(i * 0.3);
        },
      },
    },
    0.1
  );
//animate out 3 seconds later

htmlThree.onclick = () => {
  ++counter;

  if (counter % 2 === 0) {
    timelineThree.reverse();
  } else {
    timelineThree.restart();
  }
};
container_three.addEventListener("mouseleave", (e) => {
  timelineThree.reverse();
});
//

////Modal Redux onClick opening  Right to Left
let container_four = document.getElementById("skills_four");
let htmlFour = document.getElementById("skills_img_four");
let boxFour = document.getElementById("box_four");
let skills_background_four = document.getElementById("skills_four");
let timelineFour = new TimelineLite({ paused: true });
timelineFour
  .set(boxFour, { x: "50vw", visibility: "visible", zIndex: 2 })
  .to(skills_background_four, 0.1, {
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.3)",
  })
  .to(boxFour, 0.6, { x: toPX("0vw") })
  .to(boxFour, 1, { rotationX: "360" })
  .staggerFrom(
    "ul.text_content_four>li",
    0.5,
    {
      opacity: 0,
      cycle: {
        x: function (i) {
          return (i + 1) * 50;
        },
        ease: function (i) {
          return Back.easeOut.config(i * 0.3);
        },
      },
    },
    0.1
  );
//animate out 3 seconds later
htmlFour.onclick = () => {
  ++counter;

  if (counter % 2 === 0) {
    timelineFour.reverse();
  } else {
    timelineFour.restart();
  }
};
container_four.addEventListener("mouseleave", (e) => {
  timelineFour.reverse();
});
//
////Modal Typescript onClick opening   Left to Right
let container_five = document.getElementById("skills_five");
let htmlFive = document.getElementById("skills_img_five");
let boxFive = document.getElementById("box_five");
let skills_background_five = document.getElementById("skills_five");
//converts viewport units to pixels (like "50vw" or "20vh" into pixels)

CSSPlugin.defaultTransformPerspective = 300;
let timelineFive = new TimelineLite({ paused: true });
timelineFive
  .set(boxFive, { x: "0vw", visibility: "visible", zIndex: 2 })
  .to(skills_background_five, 0.1, {
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.3)",
  })
  .to(boxFive, 0.6, { x: toPX("50vw") })
  .to(boxFive, 1, { rotationX: "360" })
  .staggerFrom(
    "ul.text_content_five>li",
    0.5,
    {
      opacity: 0,
      cycle: {
        x: function (i) {
          return (i + 1) * 50;
        },
        ease: function (i) {
          return Back.easeOut.config(i * 0.3);
        },
      },
    },
    0.1
  );
//animate out 3 seconds later
htmlFive.onclick = () => {
  ++counter;

  if (counter % 2 === 0) {
    timelineFive.reverse();
  } else {
    timelineFive.restart();
  }
};
container_five.addEventListener("mouseleave", (e) => {
  timelineFive.reverse();
});
//

////Modal Webpack onClick opening  Right to Left
let container_six = document.getElementById("skills_six");
let htmlSix = document.getElementById("skills_img_six");
let boxSix = document.getElementById("box_six");
let skills_background_six = document.getElementById("skills_six");
let timelineSix = new TimelineLite({ paused: true });
timelineSix
  .set(boxSix, { x: "50vw", visibility: "visible", zIndex: 2 })
  .to(skills_background_six, 0.1, {
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.3)",
  })
  .to(boxSix, 0.6, { x: toPX("0vw") })
  .to(boxSix, 1, { rotationX: "360" })
  .staggerFrom(
    "ul.text_content_six>li",
    0.5,
    {
      opacity: 0,
      cycle: {
        x: function (i) {
          return (i + 1) * 50;
        },
        ease: function (i) {
          return Back.easeOut.config(i * 0.3);
        },
      },
    },
    0.1
  );
//animate out 3 seconds later
htmlSix.onclick = () => {
  ++counter;

  if (counter % 2 === 0) {
    timelineSix.reverse();
  } else {
    timelineSix.restart();
  }
};
container_six.addEventListener("mouseleave", (e) => {
  timelineSix.reverse();
});
//
/*
//Modal onClick opening
let box = $(".box");

let action = new TimelineMax({ paused: true, reversed: true }).to(box, 0.8, {
  x: "+=50vw",
  ease: Power0.easeNone,
});

$(".skills").click(function () {
  gsap.to(".skills", { scale: 1 });
  action.reversed() ? action.play() : action.reverse();
});*/

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
