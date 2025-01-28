import '../../styles/index.scss';
import './place.scss';
import PlaceBanner from './PlaceBanner';
import PlaceJoinLabel from './PlaceJoinLabel';
import PlaceMapContainer from './PlaceMapContainer';

const Place = () => {
  const handleNavigate = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Museum+in+Niebor%C3%B3w+and+Arkadia/@52.0665926,20.0676499,709m/data=!3m2!1e3!4b1!4m6!3m5!1s0x471be10fdcefffff:0x51df7d606291ae13!8m2!3d52.0665893!4d20.0702248!16s%2Fg%2F1yl46fdc_?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D`;

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
