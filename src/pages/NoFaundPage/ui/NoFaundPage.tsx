import { useTranslation } from "react-i18next";

const NoFaundPage = () => {
  const { t } = useTranslation()
  return (
    <div className="no-faund-page">
      <div>{t('Страница не существует')}</div>
    </div>
  );
};

export default NoFaundPage;