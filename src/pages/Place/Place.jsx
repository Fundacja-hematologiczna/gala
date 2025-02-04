import '../../styles/index.scss';
import './place.scss';
import PlaceBanner from './PlaceBanner';
import PlaceJoinLabel from './PlaceJoinLabel';
import PlaceMapContainer from './PlaceMapContainer';

const Place = () => {
  return (
    <>
      <main className="Place">
        <PlaceBanner />
        <div className="Place-container">
          <PlaceMapContainer />
        </div>
        <PlaceJoinLabel />
      </main>
    </>
  );
};

export default Place;
