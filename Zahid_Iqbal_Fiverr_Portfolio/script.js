/* =========================================================
   Zahid.dev — Portfolio interactions
   EDIT THESE TWO LINKS BEFORE PUBLISHING
   ========================================================= */

const PORTFOLIO_LINKS = {
  fiverr: "https://www.fiverr.com/yourusername",
  github: "https://github.com/yourusername"
};

document.querySelectorAll("[data-fiverr-link]").forEach((link) => {
  link.href = PORTFOLIO_LINKS.fiverr;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelectorAll("[data-github-link]").forEach((link) => {
  link.href = PORTFOLIO_LINKS.github;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Sticky header state
const header = document.querySelector(".site-header");

const handleHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", handleHeader, { passive: true });
handleHeader();

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open menu");
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => observer.observe(element));

// Small terminal-style typing effect
const typingTarget = document.getElementById("typing-text");
const terminalMessages = [
  "clean_dataset()",
  "run_eda()",
  "train_model()",
  "deploy_api()",
  "ship_to_client()"
];

let messageIndex = 0;

function typeMessage(message) {
  if (!typingTarget) return;

  typingTarget.textContent = "";
  let index = 0;

  const timer = setInterval(() => {
    typingTarget.textContent += message[index];
    index += 1;

    if (index >= message.length) {
      clearInterval(timer);

      setTimeout(() => {
        messageIndex = (messageIndex + 1) % terminalMessages.length;
        typeMessage(terminalMessages[messageIndex]);
      }, 1800);
    }
  }, 55);
}

typeMessage(terminalMessages[0]);

// Footer year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
