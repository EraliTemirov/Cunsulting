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


const head = document.head;
const newMeta = document.createElement("meta");
newMeta.name = "keywords";
newMeta.id = `meta-${lang}`;

if (lang === "en") {
  newMeta.content =
    "Public procurement consulting, B2G sales optimization, Tender participation strategy, Government contract support, Procurement process improvement";
} else if (lang === "ru") {
  newMeta.content =
    "Госзакупки оптимизация, Услуги B2G, Участие в тендерах, Консалтинговые услуги для госзакупок, Анализ тендерных предложений, Оптимизация закупочных процедур";
} else if (lang === "uz") {
  newMeta.content =
    "Davlat xaridlari optimizatsiyasi, B2G bozoriga kirish, Tenderda ishtirok etish, Konsalting xizmatlari davlat uchun, Xaridlarni tahlil qilish";
}

head.appendChild(newMeta);

document.documentElement.setAttribute("lang", lang);