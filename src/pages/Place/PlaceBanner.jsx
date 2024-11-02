const PlaceBanner = () => {
  return (
    <div className="Place__topContainer">
      <div className="Place__topContainer-greenScreen">
        <div className="Place__topContainer-content">
          <h1 className="Place__topContainer-title">Miejsce wydarzenia </h1>
          <p className="Place__topContainer-description">
            Pałac i stadnina znajdują się w malowniczej miejscowości Walewice,
            położonej w centralnej Polsce,
            <br /> w województwie łódzkim. To historyczne miejsce jest oddalone
            około 50 km na północny wschód od Łodzi - to około godzinna podróż
            autem. <br /> Z centrum Łodzi można także dotrzeć do Walewic
            podróżując początkowo pociągiem do Łowicza, a stamtąd taksówką do
            Pałacu.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceBanner;
