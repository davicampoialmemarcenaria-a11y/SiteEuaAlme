import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="language-switcher">
      <button
        className={i18n.language === "en" ? "active" : ""}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>

      <span>|</span>

      <button
        className={i18n.language === "pt" ? "active" : ""}
        onClick={() => i18n.changeLanguage("pt")}
      >
        PT
      </button>

      <span>|</span>

      <button
        className={i18n.language === "es" ? "active" : ""}
        onClick={() => i18n.changeLanguage("es")}
      >
        ES
      </button>
    </div>
  );
}