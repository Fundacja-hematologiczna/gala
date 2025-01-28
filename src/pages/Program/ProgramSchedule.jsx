import { useTranslation } from 'react-i18next';
import { schedule } from './Program.data';

const ProgramSchedule = () => {
  const { t } = useTranslation();

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
              <p className="Program__agenda-description">{t(activity.title)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSchedule;
