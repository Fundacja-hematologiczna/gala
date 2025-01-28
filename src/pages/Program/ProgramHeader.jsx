import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button/Button';

const ProgramHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="Program-container">
      <div className="Program__topContainer">
        <div className="Program__topContainer-content">
          <h1 className="Program__topContainer-title">
            {t('PROGRAM.HEADER_TITLE')}
          </h1>
          <p className="Program__topContainer-description">
            {t('PROGRAM.HEADER_BODY')}{' '}
          </p>
          <div className="Program__topContainer-button">
            <Button
              buttonLabel={t('PROGRAM.HEADER_BUTTON')}
              backgroundColor={'#B7C274'}
              navigateTo={'/rejestracja'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramHeader;
