const Button = ({ name, onClick, isActive = true }) => {
  return (
    <button className="button" disabled={!isActive} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
