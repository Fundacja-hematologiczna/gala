import { useTranslation } from 'react-i18next';
import './backToTop.scss';

const BackToTop = () => {
  const { t } = useTranslation();

  return (
    <div className="BackToTop">
      <button
        className="BackToTop__button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('FOOTER.BACK_TO_TOP')}
        title={t('FOOTER.BACK_TO_TOP')}>
        <img className="BackToTop__array" src="/toTopButton.svg" alt="To top" />
      </button>
    </div>
  );
};

export default BackToTop;
