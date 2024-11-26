import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './klauzula.scss';

const Klauzula = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="Klauzula">
        <div className="container">
          <h1 className="Klauzula-title">{t('CLAUSE.TITLE')}</h1>
          <section>
            <h2>{t('CLAUSE.HEAD')}</h2>
            <p>{t('CLAUSE.HEAD_PART_1')}</p>
            <p>{t('CLAUSE.HEAD_PART_2')}</p>
          </section>
          <section>
            <ol>
              <li>{t('CLAUSE.SECTION_1')}</li>
              <li>
                {t('CLAUSE.SECTION_2')}
                <ul>
                  <li>{t('CLAUSE.SECTION_2_SUBSECTIONS.SUBSECTION_1')}</li>
                  <li>{t('CLAUSE.SECTION_2_SUBSECTIONS.SUBSECTION_2')}</li>
                  <li>{t('CLAUSE.SECTION_2_SUBSECTIONS.SUBSECTION_3')}</li>
                  <li>{t('CLAUSE.SECTION_2_SUBSECTIONS.SUBSECTION_4')}</li>
                </ul>
              </li>
              <li>{t('CLAUSE.SECTION_3')}</li>
              <li>{t('CLAUSE.SECTION_4')}</li>
              <li>{t('CLAUSE.SECTION_5')}</li>
              <li>{t('CLAUSE.SECTION_6')}</li>
              <li>{t('CLAUSE.SECTION_7')}</li>
              <li>{t('CLAUSE.SECTION_8')}</li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
};

export default Klauzula;
