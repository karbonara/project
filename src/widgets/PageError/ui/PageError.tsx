import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import { useTranslation } from "react-i18next";

interface PageError {
  className?: string;
}

export const PageError = ({ className }: PageError) => {
  const { t } = useTranslation();
  const reloadingPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t('Произошла ошибка')}</p>
      <button onClick={reloadingPage}>
        {t('Перезагрузить страницу')}
      </button>
    </div>
  )
}
