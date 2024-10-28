import './button.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const propTypes = {
  buttonLabel: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  navigateTo: PropTypes.string.isRequired,
  border: PropTypes.string,
  arrow: PropTypes.bool,
};

const defaultProps = {
  color: '#000000',
  arrow: false,
};

export const Button = ({
  buttonLabel,
  backgroundColor,
  color = '#000000',
  navigateTo,
  border,
  arrow = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <>
      <button
        className="Button"
        onClick={handleClick}
        style={{
          backgroundColor: backgroundColor,
          border: border,
          color: color,
        }}>
        <div className="Button__label">
          <p>{buttonLabel}</p>
          {arrow && <div className="Button__label-arrow" />}
        </div>
      </button>
    </>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
