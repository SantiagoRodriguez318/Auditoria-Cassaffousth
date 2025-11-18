const langToggleBtn = document.getElementById("langToggle");

// Obtener idioma guardado o usar español
let currentLang = localStorage.getItem("lang") || "es";

// Aplicar idioma al cargar la página
applyTranslations(currentLang);
updateToggleButton();

// Evento toggle
langToggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("lang", currentLang);
  applyTranslations(currentLang);
  updateToggleButton();
});

// Cambia el texto del botón (ES/EN)
function updateToggleButton() {
  langToggleBtn.textContent = currentLang === "es" ? "EN" : "ES";
}

function applyTranslations(language) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });

  // Traducción de placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[language][key]) {
      element.placeholder = translations[language][key];
    }
  });
}

