// import '../../styles/index.scss';
// import './program.scss';
// import { Button } from '../../components/Button/Button.jsx';
// import { useTranslation } from 'react-i18next';

// const Program = () => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <main className="Program">
//         <div className="Program-container">
//           <div className="Program__topContainer">
//             <div className="Program__topContainer-content">
//               <h1 className="Program__topContainer-title">
//                 {t('PROGRAM.HEADER_TITLE')}
//               </h1>
//               <p className="Program__topContainer-description">
//                 {t('PROGRAM.HEADER_BODY')}{' '}
//               </p>
//               <div className="Program__topContainer-button">
//                 <Button
//                   buttonLabel={t('PROGRAM.HEADER_BUTTON')}
//                   backgroundColor={'#B7C274'}
//                   navigateTo={'/about'}
//                 />
//               </div>
//             </div>
//           </div>

//           <section className="Program__agenda">
//             <div className="Program__agenda-container">
//               <h2 className="Program__agenda-title">
//                 {t('PROGRAM.AGENDA_TITLE')}
//               </h2>
//               <div className="Program__agenda-list">
//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time ">10:30 - 12:30</div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.1')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time Program__agenda-time--gray">
//                     10:30 - 12:30
//                   </div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.2')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time ">10:30 - 12:30</div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.3')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time Program__agenda-time--gray">
//                     10:30 - 12:30
//                   </div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.4')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time ">10:30 - 12:30</div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.5')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time Program__agenda-time--gray">
//                     14:30 - 15:00
//                   </div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.6')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time ">14:45 - 15:00</div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.7')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time Program__agenda-time--gray">
//                     15:00 - 15:30
//                   </div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.8')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time ">15:30 - 15:45</div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.9')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time Program__agenda-time--gray">
//                     15:45 - 16:15
//                   </div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.10')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time ">16:15 - 16:30</div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.11')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time Program__agenda-time--gray">
//                     16:30 - 17:00
//                   </div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.12')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time ">17:00 - 17:15</div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.13')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time Program__agenda-time--gray">
//                     17:15 - 17:30
//                   </div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.14')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time ">17:30 - 18:00</div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.15')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time Program__agenda-time--gray">
//                     18:00 - 18:30
//                   </div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.16')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time ">18:30 - 21:00</div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.17')}
//                   </p>
//                 </div>

//                 <div className="Program__agenda-row">
//                   <div className="Program__agenda-time Program__agenda-time--gray">
//                     21:00 - 02:00
//                   </div>
//                   <p className="Program__agenda-description">
//                     {t('PROGRAM.SCHEDULE.18')}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         <section className="Place__greenLabel">
//           <div className="Place__greenLabel-container">
//             <p className="Place__greenLabel-topText">
//               {t('PROGRAM.JOIN_TITLE')}
//             </p>
//             <p className="Place__greenLabel-botText">
//               {t('PROGRAM.JOIN_BODY')}
//             </p>
//             <div className="Place__greenLabel-button">
//               <Button
//                 buttonLabel={t('PROGRAM.JOIN_BUTTON')}
//                 backgroundColor={'#FFFFFF'}
//                 navigateTo={'/about'}
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Program;

import '../../styles/index.scss';
import './program.scss';
import { Button } from '../../components/Button/Button.jsx';
import { useTranslation } from 'react-i18next';

const Program = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="Program">
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
                  navigateTo={'/about'}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="Program__agenda">
          <div className="Program__agenda-container">
            <h2 className="Program__agenda-title">
              {t('PROGRAM.AGENDA_TITLE')}
            </h2>
            <div className="Program__agenda-list">
              <div className="Program__agenda-row">
                <div className="Program__agenda-time ">10:30 - 12:30</div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.1')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time Program__agenda-time--gray">
                  10:30 - 12:30
                </div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.2')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time ">10:30 - 12:30</div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.3')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time Program__agenda-time--gray">
                  10:30 - 12:30
                </div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.4')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time ">10:30 - 12:30</div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.5')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time Program__agenda-time--gray">
                  14:30 - 15:00
                </div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.6')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time ">14:45 - 15:00</div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.7')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time Program__agenda-time--gray">
                  15:00 - 15:30
                </div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.8')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time ">15:30 - 15:45</div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.9')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time Program__agenda-time--gray">
                  15:45 - 16:15
                </div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.10')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time ">16:15 - 16:30</div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.11')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time Program__agenda-time--gray">
                  16:30 - 17:00
                </div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.12')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time ">17:00 - 17:15</div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.13')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time Program__agenda-time--gray">
                  17:15 - 17:30
                </div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.14')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time ">17:30 - 18:00</div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.15')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time Program__agenda-time--gray">
                  18:00 - 18:30
                </div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.16')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time ">18:30 - 21:00</div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.17')}
                </p>
              </div>

              <div className="Program__agenda-row">
                <div className="Program__agenda-time Program__agenda-time--gray">
                  21:00 - 02:00
                </div>
                <p className="Program__agenda-description">
                  {t('PROGRAM.SCHEDULE.18')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="Place__greenLabel">
          <div className="Place__greenLabel-container">
            <p className="Place__greenLabel-topText">
              {t('PROGRAM.JOIN_TITLE')}
            </p>
            <p className="Place__greenLabel-botText">
              {t('PROGRAM.JOIN_BODY')}
            </p>
            <div className="Place__greenLabel-button">
              <Button
                buttonLabel={t('PROGRAM.JOIN_BUTTON')}
                backgroundColor={'#FFFFFF'}
                navigateTo={'/about'}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Program;
