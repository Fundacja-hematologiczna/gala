import './card.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const propTypes = {
  iconLink: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  navigateTo: PropTypes.string,
  scale: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export const Card = ({
  iconLink,
  title,
  description,
  buttonLabel,
  navigateTo,
  scale,
  backgroundColor,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <>
      <div className="Card" style={{ backgroundColor: backgroundColor }}>
        <img
          className="Card-image"
          src={iconLink}
          style={{ scale: scale }}
          alt=""
        />

        <div className="Card-textWrapper">
          <h3 className="Card-title">{title}</h3>
          <p className="Card-description">{description}</p>
        </div>

        <button className="Card-button" onClick={handleClick}>
          <span>{buttonLabel}</span>
        </button>
      </div>
    </>
  );
};

Card.propTypes = propTypes;
