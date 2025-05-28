/* eslint-disable react-hooks/exhaustive-deps */
import './home.scss';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { HomeWelcome } from './HomeWelcome.jsx';
import { HomeWelcomeMobile } from './HomeWelcomeMobile.jsx';
import HomeCEOInfo from './HomeCEOInfo.jsx';
import { HomeDonate } from './HomeDonate.jsx';
import HomeCards from './HomeCards.jsx';
import HomePartners from './HomePartners.jsx';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (navigateTo) => {
    navigate(navigateTo, { replace: true });
  };

  const welcomeSectionPhotos = [
    '/WelcomeGallery/welcome-img-02.webp',
    '/WelcomeGallery/welcome-img-03.webp',
    '/WelcomeGallery/welcome-img-04.webp',
    '/WelcomeGallery/welcome-img-05.webp',
    '/WelcomeGallery/welcome-img-06.webp',
    '/WelcomeGallery/welcome-img-07.webp',
    '/WelcomeGallery/welcome-img-08.webp',
    '/WelcomeGallery/welcome-img-09.webp',
    '/WelcomeGallery/welcome-img-10.webp',
    '/WelcomeGallery/welcome-img-11.webp',
    '/WelcomeGallery/welcome-img-12.webp',
    '/WelcomeGallery/welcome-img-13.webp',
    '/WelcomeGallery/welcome-img-14.webp',
    '/WelcomeGallery/welcome-img-15.webp',
  ];

  const [photoChanging, setPhotoChanging] = useState(true);
  const [welcomeSectionImage1, setWelcomeSectionImage1] = useState(0);
  const [welcomeSectionImage2, setWelcomeSectionImage2] = useState(1);

  useEffect(() => {
    const changePhoto = setInterval(() => {
      setPhotoChanging((prev) => !prev);

      setTimeout(() => {
        photoChanging
          ? setWelcomeSectionImage1(
              (prev) => (prev + 2) % welcomeSectionPhotos.length,
            )
          : setWelcomeSectionImage2(
              (prev) => (prev + 2) % welcomeSectionPhotos.length,
            );
      }, 3000);
    }, 10000);

    return () => clearInterval(changePhoto);
  }, [photoChanging]);

  return (
    <>
      <main className="Home">
        <HomeWelcome
          photoChanging={photoChanging}
          welcomeSectionPhotos={welcomeSectionPhotos}
          welcomeSectionImage1={welcomeSectionImage1}
          welcomeSectionImage2={welcomeSectionImage2}
        />
        <HomeWelcomeMobile />
        <HomeCEOInfo />
        <HomeDonate onClick={handleClick} />
        <HomeCards />
        <section className="Home-atrakcje">
          <div className="Home-atrakcje-img">
            <img src={t('MAIN_PAGE.IMAGE')} alt="" />
          </div>
        </section>
        <HomePartners />
      </main>
    </>
  );
};

export default Home;
