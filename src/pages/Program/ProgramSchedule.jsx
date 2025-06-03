import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as contentful from 'contentful';

const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const contentfulLocaleMap = {
  PL: 'pl-PL', // 'PL' z i18n mapuje na 'pl-PL' w Contentful
  ENG: 'en-GB', // 'ENG' z i18n mapuje na 'en-GB' w Contentful
};

const ProgramSchedule = () => {
  const { t, i18n } = useTranslation();
  const [schedule, setSchedule] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const contentfulLocale = contentfulLocaleMap[i18n.language] || 'pl-PL';

    client
      .getEntries({
        content_type: 'fundacjaGala',
        order: 'fields.id',
        locale: contentfulLocale,
      })
      .then((response) => {
        const fetchedSchedule = response.items.map((item) => ({
          id: item.fields.id,
          start: item.fields.start,
          end: item.fields.end,
          title: item.fields.title,
        }));
        setSchedule(fetchedSchedule);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(
          'Błąd podczas pobierania harmonogramu z Contentful:',
          err,
        );
        setError(
          'Nie udało się załadować harmonogramu. Spróbuj ponownie później.',
        );
        setIsLoading(false);
      });
  }, [i18n.language]);

  if (isLoading) {
    return (
      <section className="Program__agenda">
        <div className="Program__agenda-container">
          <p>{t('loading_schedule')}</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="Program__agenda">
        <div className="Program__agenda-container">
          <p className="error-message">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="Program__agenda">
      <div className="Program__agenda-container">
        <h2 className="Program__agenda-title">{t('PROGRAM.AGENDA_TITLE')}</h2>
        <div className="Program__agenda-list">
          {schedule.map((activity) => (
            <div className="Program__agenda-row" key={activity.id}>
              <div className="Program__agenda-time ">
                {activity.start} &#8212; {activity.end}
              </div>
              <p className="Program__agenda-description">{activity.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSchedule;
