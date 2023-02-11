import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  }

  return (
    <Button onClick={toggle}>{t('Перевод')}</Button>
  );
};

export default LangSwitcher;