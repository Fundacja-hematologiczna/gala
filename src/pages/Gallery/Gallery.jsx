import '../../styles/index.scss';
import './gallery.scss';
import { useState, useEffect } from 'react';
import { getImages } from '../../api/services';

const Gallery = () => {
  const [isActive, setIsActive] = useState('2022');
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImages()
      .then((data) => {
        const gallery = data;

        setImages(gallery);
        setLoading(false);
      })
      .catch((e) => {
        console.log('error:', e);
      });
  }, []);

  const handleClick = (year) => {
    setIsActive(year);
  };

  return (
    <>
      <main className="Gallery">
        <div className="Gallery-container">
          <div className="Gallery__topContainer">
            <div className="Gallery__topContainer-greenLayer"></div>

            <h1 className="Gallery__topContainer-title">Galeria</h1>
            <p className="Gallery__topContainer-description">
              Gala Charytatywna w Walewicach to już tradycyjnie festiwal
              pięknych serc. Każda odsłona gromadzi liczne grono osób pragnących
              wspierać pacjentów chorób hematologicznych i ich rodziny.
              <p>
                Zajrzyj do fotorelacji, by poczuć tę moc dobra i wyjątkową
                atmosferę Gali.
              </p>
            </p>
            <div className="Gallery__topContainer-content"></div>
          </div>
        </div>

        <section className="Gallery__pictures">
          <div className="container">
            <div className="Gallery__pictures__buttons">
              <button
                onClick={() => handleClick('2022')}
                className={`Gallery__pictures__buttons-button ${isActive === '2022' ? 'Gallery__pictures__buttons-button--active' : ''}`}>
                2022
              </button>
              <button
                onClick={() => handleClick('2023')}
                className={`Gallery__pictures__buttons-button ${isActive === '2023' ? 'Gallery__pictures__buttons-button--active' : ''}`}>
                2023
              </button>
              <button
                onClick={() => handleClick('2024')}
                className={`Gallery__pictures__buttons-button ${isActive === '2024' ? 'Gallery__pictures__buttons-button--active' : ''}`}>
                2024
              </button>
            </div>

            <div className="Gallery__pictures__grid">
              {!loading &&
                images[isActive].map((image) => (
                  <div className="Gallery__pictures__grid-item " key={image}>
                    <img
                      src={image}
                      alt={`image-${image.id}`}
                      className="itemek"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
