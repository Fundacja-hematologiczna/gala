/* eslint-disable react/prop-types */

const PlaceMapContainer = ({ onClick }) => {
  return (
    <div className="Place-map-container">
      <div className="Place__map">
        <div className="Place__map-card">
          <h2 className="Place__map-card-title">
            III Gala Charytatywna odbędzie się w Pałacu Walewskich w Walewicach
          </h2>

          <div className="Place__map-card-description">
            <p className="Place__map-card-descriptionBold">Miejsce:</p>
            <p>Pałac i Stadnina Koni w Walewicach</p>
            <p data-empty>&nbsp;</p>
            <p className="Place__map-card-descriptionBold">Adres:</p>
            <p>Walewice 39</p>
            <p>99-423 Walewice</p>
            <p data-empty>&nbsp;</p>
            <p>
              <span className="Place__map-card-descriptionBold">Telefon: </span>
              730-118-500{' '}
            </p>
            <p data-empty>&nbsp;</p>
            <p className="Place__map-card-descriptionBold">Email:</p>
            <p>kontakt@fundacja.hematologiczna.org</p>
          </div>
        </div>

        <div className="Place__map-img" onClick={onClick} />
      </div>
    </div>
  );
};

export default PlaceMapContainer;
