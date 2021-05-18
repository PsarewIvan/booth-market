import './Button.scss';

export const WIDE_MOD = 'wide';
export const WIDE_FILL_MOD = 'wide-fill';

const Button = ({ name, onClick, isActive = true, type }) => {
  return (
    <>
      {isActive && (
        <button className={`button${` button--${type}`}`} onClick={onClick}>
          {name}
        </button>
      )}
    </>
  );
};

export default Button;
