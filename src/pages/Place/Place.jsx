import '../../styles/index.scss';
import './place.scss';
import PlaceBanner from './PlaceBanner';
import PlaceJoinLabel from './PlaceJoinLabel';
import PlaceMapContainer from './PlaceMapContainer';

const Place = () => {
  const handleNavigate = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=Walewice+39,+99-423+Walewice`;

    window.open(googleMapsUrl, '_blank');
  };
  return (
    <>
      <main className="Place">
        <PlaceBanner />
        <div className="Place-container">
          <PlaceMapContainer onClick={handleNavigate} />
        </div>
        <PlaceJoinLabel />
      </main>
    </>
  );
};

export default Place;
