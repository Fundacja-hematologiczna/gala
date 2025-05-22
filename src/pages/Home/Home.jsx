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

  // const welcomeSectionPhotos = [
  //   'VIDEO.webp',
  //   'aukcje.webp',
  //   'place.webp',
  //   'program.webp',
  // ];

  const welcomeSectionPhotos = [
    'test1.jpg', //fajne
    'test2.jpg', //fajne
    'test3.jpg', // fajne
   'test10.jpg', // fajne - czrnobiale
   'test15.jpg',
   'test17.jpg',
   'test18.jpg',
   'test19.jpg',

   'test21.jpg',
   'test22.jpg',
   'test23.jpg',
   'test24.jpg',
   'test25.jpg',
   'test26.jpg',
   'test27.jpg',
   'test28.jpg',
   'test29.jpg',
   'test30.jpg',
   'test31.jpg',
   'test32.jpg',
   'test33.jpg',
   'test34.jpg',
   'test35.jpg',
   'test36.jpg',
   'test37.jpg',
   'test38.jpg',
   'test39.jpg',
   'test40.jpg',
   'test41.jpg',
   


    // DARIA
    // 'test5.jpg',
    // 'test6.jpg',
    // 'test7.jpg',
    // 'test8.jpg',
    // 'test9.jpg',



   // 'person.webp',
   // 'aukcje.webp',
    //'place.webp',
    'program.webp',
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
