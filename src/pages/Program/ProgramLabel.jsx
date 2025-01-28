import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button/Button';

const ProgramLabel = () => {
  const { t } = useTranslation();

  return (
    <section className="Place__greenLabel">
      <div className="Place__greenLabel-container">
        <p className="Place__greenLabel-topText">{t('PROGRAM.JOIN_TITLE')}</p>
        <p className="Place__greenLabel-botText">{t('PROGRAM.JOIN_BODY')}</p>
        <div className="Place__greenLabel-button">
          <Button
            buttonLabel={t('PROGRAM.JOIN_BUTTON')}
            backgroundColor={'#FFFFFF'}
            navigateTo={'/about'}
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramLabel;
