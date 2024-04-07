const humberger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

humberger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

/* ============================================= Tabs ============================================= */
const tabs = document.querySelectorAll(".tabs__wrap ul li");
const all = document.querySelectorAll(".item__wrap");
const foods = document.querySelectorAll(".food");
const snakcs = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    /* triger tabs menu */
    const tabVal = tab.getAttribute("data-tabs");
    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabVal === "food") {
      foods.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal === "snack") {
      snakcs.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal === "beverage") {
      beverages.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

/* ========================== Dark Light Theme ================================= */
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") === "dark") {
  darkMode();
} else {
  lightMode();
}
themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") === "light") {
    darkMode();
  } else {
    lightMode();
  }
});
function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

/* ======================= Show Scrol Up ================================ */
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);
/* ======================= Change Background Header ======================= */
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondaryColor");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
};
window.addEventListener("scroll", scrollHeader);

/* =================== Scrol Section Active Link ============================ */
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav__link");

  let current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (this.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};

window.addEventListener("scroll", activeLink);

/* =========== Scrol Reveal Animation ============================= */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home__image");
sr.reveal(".home__content", { origin: "bottom" });

sr.reveal(".category__card", { interval: 300 });

sr.reveal(".promo__card-1", { origin: "left" });
sr.reveal(".promo__card-2", { origin: "right" });

sr.reveal(".about__img", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });

sr.reveal(".menu__items", { origin: "left" });

sr.reveal(".customer__review", { origin: "right" });
sr.reveal(".contact", { origin: "right" });

sr.reveal("#footer");
