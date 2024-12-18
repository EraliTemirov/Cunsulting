const langToggle = document.getElementById("lang-toggle");
const langDropdown = document.getElementById("lang-dropdown");
const langItems = langDropdown.querySelectorAll("a");

langToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  langDropdown.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (
    !langToggle.contains(event.target) &&
    !langDropdown.contains(event.target)
  ) {
    langDropdown.classList.add("hidden");
  }
});

langItems.forEach((item) => {
  item.addEventListener("click", () => {
    langDropdown.classList.add("hidden");
  });
});
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const mobileLangToggle = document.getElementById("mobile-lang-toggle");
const mobileLangDropdown = document.getElementById("mobile-lang-dropdown");
const mobileLangItems = mobileLangDropdown.querySelectorAll("a");

mobileLangToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  mobileLangDropdown.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (
    !mobileLangToggle.contains(event.target) &&
    !mobileLangDropdown.contains(event.target)
  ) {
    mobileLangDropdown.classList.add("hidden");
  }
});

mobileLangItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileLangDropdown.classList.add("hidden");
  });
});

