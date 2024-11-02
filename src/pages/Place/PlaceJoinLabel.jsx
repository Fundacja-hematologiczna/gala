import { Button } from '../../components/Button/Button';

const PlaceJoinLabel = () => {
  return (
    <section className="Place__greenLabel">
      <div className="Place__greenLabel-container">
        <p className="Place__greenLabel-topText">
          Chcesz do nas dołączyć,
          <br /> ale nie wiesz jak?
        </p>
        <p className="Place__greenLabel-botText">
          Formularz przeprowadzi Cię przez proces rejestracji.
        </p>
        <div className="Place__greenLabel-button">
          <Button
            buttonLabel={'Zgłoś swój udział'}
            backgroundColor={'#FFFFFF'}
            navigateTo={'/about'}
          />
        </div>
      </div>
    </section>
  );
};

export default PlaceJoinLabel;
