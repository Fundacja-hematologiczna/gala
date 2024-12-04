import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button/Button';

const PlaceJoinLabel = () => {
  const { t } = useTranslation();

  return (
    <section className="Place__greenLabel">
      <div className="Place__greenLabel-container">
        <p className="Place__greenLabel-topText">{t('PLACE.JOIN_TITLE')}</p>
        <p className="Place__greenLabel-botText">{t('PLACE.JOIN_BODY')}</p>
        <div className="Place__greenLabel-button">
          <Button
            buttonLabel={t('PLACE.JOIN_BUTTON')}
            backgroundColor={'#FFFFFF'}
            navigateTo={'/about'}
          />
        </div>
      </div>
    </section>
  );
};

export default PlaceJoinLabel;
