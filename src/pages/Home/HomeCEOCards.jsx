import { useTranslation } from 'react-i18next';
import { Card } from '../../components/Card/Card';

const HomeCEOCards = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: 'card1-icon.svg',
      title: 'MAIN_PAGE.CHARITY_AUCTION_BODY',
      description: 'MAIN_PAGE.CHARITY_AUCTION_TITLE',
      buttonLabel: 'MAIN_PAGE.CHARITY_AUCTION_BUTTON',
      navigateTo: '/Auction',
      backgroundColor: '#B7C274',
      scale: '100%',
    },
    {
      icon: 'Card2-icon.webp',
      title: 'MAIN_PAGE.DONORS_BODY',
      description: 'MAIN_PAGE.DONORS_TITLE',
      buttonLabel: 'MAIN_PAGE.DONORS_BUTTON',
      navigateTo: '/contributors',
      backgroundColor: '#E5E9CD',
      scale: '160%',
    },
    {
      icon: 'card3-icon.svg',
      title: 'MAIN_PAGE.VOLUNTEERS_BODY',
      description: 'MAIN_PAGE.VOLUNTEERS_TITLE',
      buttonLabel: 'MAIN_PAGE.VOLUNTEERS_BUTTON',
      navigateTo: '/rejestracja',
      backgroundColor: '#99ADAA',
      scale: '100%',
    },
  ];

  return (
    <div className="Home__section2__cards">
      {cards.map((card) => (
        <Card
          key={card.title}
          iconLink={card.icon}
          title={t(card.title)}
          description={t(card.description)}
          buttonLabel={t(card.buttonLabel)}
          navigateTo={card.navigateTo}
          backgroundColor={card.backgroundColor}
          scale={card.scale}
        />
      ))}
    </div>
  );
};

export default HomeCEOCards;
