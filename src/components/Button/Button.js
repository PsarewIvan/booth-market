import './Button.scss';

export const WIDE_MOD = 'wide';
export const WIDE_FILL_MOD = 'wide-fill';

const Button = ({ name, onClick, isActive = true, type }) => {
  return (
    <button
      className={`button${` button--${type}`}`}
      disabled={!isActive}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
