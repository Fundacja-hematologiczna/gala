import { Card } from '../../components/Card/Card';
import { useTranslation } from 'react-i18next';

const HomeCards = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: 'card4-icon.svg',
      title: 'MAIN_PAGE.ATTRACTIONS_BODY',
      description: 'MAIN_PAGE.ATTRACTIONS_TITLE',
      buttonLabel: 'MAIN_PAGE.ATTRACTIONS_BUTTON',
      navigateTo: '/program',
      backgroundColor: '#E5E9CD',
    },
    {
      icon: 'waza.svg',
      title: 'MAIN_PAGE.PALACE_BODY',
      description: 'MAIN_PAGE.PALACE_TITLE',
      buttonLabel: 'MAIN_PAGE.PALACE_BUTTON',
      navigateTo: '/miejsce',
      backgroundColor: '#99ADAA',
      scale: '1.1',
    },
    {
      icon: 'card6-icon.svg',
      title: 'MAIN_PAGE.PLACE_BODY',
      description: 'MAIN_PAGE.PLACE_TITLE',
      buttonLabel: 'MAIN_PAGE.PLACE_BUTTON',
      navigateTo: '/miejsce',
      backgroundColor: '#F3F2F2',
    },
  ];

  return (
    <section className="Home__cards">
      <div className="Home__cards-container">
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
    </section>
  );
};

export default HomeCards;
