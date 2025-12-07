// Данные для переключения языков
const translations = {
    ru: {
        subtitle: "СЕРВИС",
        title: "GRAND THE AUTO",
        description: "Профессиональный автосервис в городе Almere. Диагностика • Ремонт • Обслуживание."
    },
    nl: {
        subtitle: "SERVICE",
        title: "GRAND THE AUTO",
        description: "Professionele autoservice in Almere. Diagnose • Reparatie • Onderhoud."
    },
    en: {
        subtitle: "SERVICE",
        title: "GRAND THE AUTO",
        description: "Professional car service in Almere. Diagnostics • Repair • Maintenance."
    }
};

// Автоопределение языка
window.onload = () => {
    const userLang = navigator.language.slice(0, 2);
    if (translations[userLang]) {
        setLanguage(userLang);
    }
};

function setLanguage(lang) {
    document.getElementById("subtitle").innerText = translations[lang].subtitle;
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
}
