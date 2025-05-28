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

  // const welcomeSectionPhotos = [
  //   'test1.jpg', //fajne
  //   'test2.jpg', //fajne
  //   'test3.jpg', // fajne
  //  'test10.jpg', // fajne - czrnobiale
  //  'test15.jpg',
  //  'test17.jpg',
  //  'test18.jpg',
  //  'test19.jpg',

  //  'test21.jpg',
  //  'test22.jpg',
  //  'test23.jpg',
  //  'test24.jpg',
  //  'test25.jpg',
  //  'test26.jpg',
  //  'test27.jpg',
  //  'test28.jpg',
  //  'test29.jpg',
  //  'test30.jpg',
  //  'test31.jpg',
  //  'test32.jpg',
  //  'test33.jpg',
  //  'test34.jpg',
  //  'test35.jpg',
  //  'test36.jpg',
  //  'test37.jpg',
  //  'test38.jpg',
  //  'test39.jpg',
  //  'test40.jpg',
  //  'test41.jpg',
   


  //   // DARIA
  //   // 'test5.jpg',
  //   // 'test6.jpg',
  //   // 'test7.jpg',
  //   // 'test8.jpg',
  //   // 'test9.jpg',



  //  // 'person.webp',
  //  // 'aukcje.webp',
  //   //'place.webp',
  //   'program.webp',
  // ];


  //selekcja v2

  // const welcomeSectionPhotos = [
   
   


  //   // DARIA
  //   // 'test5.jpg',
  //   // 'test6.jpg',
  //   // 'test7.jpg',
  //   // 'test8.jpg',
  //   // 'test9.jpg',


  //  // 'test42.jpg',

  //  'test3.jpg',
  //  'test10.jpg',
  //  'test15.jpg', //?
  //  'test17.jpg', // zegar ??
  //  'test18.jpg', // kobieta z pilka ??
  //  'test19.jpg', // pan z obrazem
  //  'test22.jpg', // para na moscie
  //  'test23.jpg', //dziewczynka
  //  'test25.jpg', // lowieckie stroje - obraz1
  //  'test26.jpg', // kobieta w lowieckim w stroju trzymajaca obraz
  //  'test28.jpg', // swiecznik
  //  'test29.jpg', // 3 osoby ze swiecznikiem
  //                        //  'test30.jpg', // czrno biale aukcje
  //  'test32.jpg', // kobieta z obraze3m
  //  'test34.jpg',


  //  // taniec
  //  'test37.jpg',
  //  'test38.jpg',
  //  'test39.jpg',


  //  'test41.jpg',

  //   'test43.png',
  //   'test44.jpg',



  
  // ];

//selekcja v3

// const welcomeSectionPhotos = [
   
   


//     // DARIA
//     // 'test5.jpg',
//     // 'test6.jpg',
//     // 'test7.jpg',
//     // 'test8.jpg',
//     // 'test9.jpg',


//    // 'test42.jpg',

//    'test3.jpg',
//    'test10.jpg',
//    'test15.jpg', //?
//    //'test17.jpg', // zegar ??
//    'test18.jpg', // kobieta z pilka ??
//    'test19.jpg', // pan z obrazem
//   // 'test22.jpg', // para na moscie
//    'test23.jpg', //dziewczynka
//    'test25.jpg', // lowieckie stroje - obraz1
//    'test26.jpg', // kobieta w lowieckim w stroju trzymajaca obraz
//    //'test28.jpg', // swiecznik
//    'test29.jpg', // 3 osoby ze swiecznikiem
//                          //  'test30.jpg', // czrno biale aukcje
//    'test32.jpg', // kobieta z obraze3m
//    'test34.jpg',


//    // taniec
//    'test37.jpg', // taniec 1
//    'test38.jpg', // taniec 2
//    'test39.jpg', // taniec 3


//    'test41.jpg', // budynek ludzie

//     'test43.png', // aukcja
//     'test44.jpg', // piwnica lowieckie stroje



  
//   ];

  // se;lekcja v4 - zmiana kolejnosci

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
