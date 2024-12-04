import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './regulamin.scss';

const Regulamin = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="Regulamin">
        <div className="container x">
          <h1 className="Regulamin-title">{t('TERMS.TITLE')}</h1>
          <section>
            <h2 className="Regulamin-text--bold">{t('TERMS.HEAD')}</h2>

            <h3 className="Regulamin-text">{t('TERMS.PARAGRAPH_1.TITLE')}</h3>
            <ol>
              <li>{t('TERMS.PARAGRAPH_1.PARAGRAPH_SECTIONS.SECTION_1')}</li>
              <li>{t('TERMS.PARAGRAPH_1.PARAGRAPH_SECTIONS.SECTION_2')}</li>
              <li>{t('TERMS.PARAGRAPH_1.PARAGRAPH_SECTIONS.SECTION_3')}</li>
              <li>{t('TERMS.PARAGRAPH_1.PARAGRAPH_SECTIONS.SECTION_4')}</li>
              <li>{t('TERMS.PARAGRAPH_1.PARAGRAPH_SECTIONS.SECTION_5')}</li>
            </ol>
          </section>

          <section>
            <h3>{t('TERMS.PARAGRAPH_2.TITLE')}</h3>

            <ol>
              <li>
                {t('TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_1.TITLE')}
                <ul>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_1.PARAGRAPH_SECTIONS.SECTION_1',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_1.PARAGRAPH_SECTIONS.SECTION_2',
                    )}
                  </li>
                </ul>
              </li>
              <li>{t('TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_2')}</li>
              <li>{t('TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_3')}</li>
              <li>{t('TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_4')}</li>
              <li>
                {t('TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_5.TITLE')}
                <ul>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_1',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_2',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_2.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_3',
                    )}
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h3>{t('TERMS.PARAGRAPH_3.TITLE')}</h3>
            <ol>
              <li>{t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_1')}</li>
              <li>{t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_2')}</li>
              <li>{t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_3')}</li>
              <li>{t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_4')}</li>
              <li>
                {t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_5.TITLE')}
                <ul>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_1',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_2',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_3',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_4',
                    )}
                  </li>
                </ul>
              </li>
              <li>{t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_6')}</li>
              <li>
                {t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_7.TITLE')}
                <ul>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_7.PARAGRAPH_SECTIONS.SECTION_1',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_7.PARAGRAPH_SECTIONS.SECTION_2',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_7.PARAGRAPH_SECTIONS.SECTION_3',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_7.PARAGRAPH_SECTIONS.SECTION_4',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_7.PARAGRAPH_SECTIONS.SECTION_5',
                    )}
                  </li>
                </ul>
              </li>
              <li>{t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_8')}</li>
              <li>{t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_9')}</li>
              <li>{t('TERMS.PARAGRAPH_3.PARAGRAPH_SECTIONS.SECTION_10')}</li>
            </ol>
          </section>

          <section>
            <h3>{t('TERMS.PARAGRAPH_4.TITLE')}</h3>
            <ol>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_1')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_2')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_3')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_4')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_5')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_6')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_7')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_8')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_9')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_10')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_11')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_12')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_13')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_14')}</li>
              <li>{t('TERMS.PARAGRAPH_4.PARAGRAPH_SECTIONS.SECTION_15')}</li>
            </ol>
          </section>

          <section>
            <h3>{t('TERMS.PARAGRAPH_5.TITLE')}</h3>

            <ol>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_1')}</li>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_2')}</li>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_3')}</li>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_4')}</li>
              <li>
                {t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_5.TITLE')}
                <ul>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_1',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_2',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_3',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_4',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_5.PARAGRAPH_SECTIONS.SECTION_5',
                    )}
                  </li>
                </ul>
              </li>

              <li>
                {t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_6.TITLE')}
                <ul>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_6.PARAGRAPH_SECTIONS.SECTION_1',
                    )}
                  </li>
                  <li>
                    {t(
                      'TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_6.PARAGRAPH_SECTIONS.SECTION_2',
                    )}
                  </li>
                </ul>
              </li>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_7')}</li>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_8')}</li>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_9')}</li>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_10')}</li>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_11')}</li>
              <li>{t('TERMS.PARAGRAPH_5.PARAGRAPH_SECTIONS.SECTION_12')}</li>
            </ol>
          </section>

          <section>
            <h3>{t('TERMS.PARAGRAPH_6.TITLE')}</h3>
            <ol>
              <li>{t('TERMS.PARAGRAPH_6.PARAGRAPH_SECTIONS.SECTION_1')}</li>
              <li>{t('TERMS.PARAGRAPH_6.PARAGRAPH_SECTIONS.SECTION_2')}</li>
              <li>{t('TERMS.PARAGRAPH_6.PARAGRAPH_SECTIONS.SECTION_3')}</li>
              <li>{t('TERMS.PARAGRAPH_6.PARAGRAPH_SECTIONS.SECTION_4')}</li>
            </ol>
          </section>

          <section>
            <p>{t('TERMS.ATTACHMENT.TITLE')}</p>
            <h2>{t('TERMS.ATTACHMENT.INFO_TITLE')}</h2>
            <p>{t('TERMS.ATTACHMENT.INFO_BODY')}</p>
          </section>

          <section>
            <h2>{t('TERMS.ATTACHMENT.CLAUSE.TITLE')}</h2>
            <p>{t('TERMS.ATTACHMENT.CLAUSE.BODY')}</p>

            <ol>
              <li>{t('TERMS.ATTACHMENT.CLAUSE.SECTIONS.SECTION_1')}</li>
              <li>{t('TERMS.ATTACHMENT.CLAUSE.SECTIONS.SECTION_2')}</li>
              <li>{t('TERMS.ATTACHMENT.CLAUSE.SECTIONS.SECTION_3')}</li>
              <li>{t('TERMS.ATTACHMENT.CLAUSE.SECTIONS.SECTION_4')}</li>
              <li>{t('TERMS.ATTACHMENT.CLAUSE.SECTIONS.SECTION_5')}</li>
              <li>{t('TERMS.ATTACHMENT.CLAUSE.SECTIONS.SECTION_6')}</li>
              <li>{t('TERMS.ATTACHMENT.CLAUSE.SECTIONS.SECTION_7')}</li>
              <li>{t('TERMS.ATTACHMENT.CLAUSE.SECTIONS.SECTION_8')}</li>
            </ol>
          </section>

          <section>
            <h2>{t('TERMS.ATTACHMENT.EXAMPLE.TITLE')}</h2>
            <p>{t('TERMS.ATTACHMENT.EXAMPLE.BODY')}</p>

            <ol>
              <li>{t('TERMS.ATTACHMENT.EXAMPLE.SECTIONS.SECTION_1')}</li>
              <li>{t('TERMS.ATTACHMENT.EXAMPLE.SECTIONS.SECTION_2')}</li>
              <li>{t('TERMS.ATTACHMENT.EXAMPLE.SECTIONS.SECTION_3')}</li>
              <li>{t('TERMS.ATTACHMENT.EXAMPLE.SECTIONS.SECTION_4')}</li>
              <li>{t('TERMS.ATTACHMENT.EXAMPLE.SECTIONS.SECTION_5')}</li>
              <li>{t('TERMS.ATTACHMENT.EXAMPLE.SECTIONS.SECTION_6')}</li>
            </ol>

            <p>&nbsp;</p>
            <p>………………………………………………………………………………</p>
            <p>{t('TERMS.ATTACHMENT.EXAMPLE.SIGN')}</p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Regulamin;
