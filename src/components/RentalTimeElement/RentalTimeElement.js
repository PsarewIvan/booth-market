import './RentalTimeElement.scss';

const RentalTimeElement = ({
  name,
  value,
  inputName,
  id,
  checked,
  changeRental,
}) => {
  const handleInputChange = () => {
    changeRental(id, value);
  };
  return (
    <label className="rental-time-element">
      {name}
      <input
        className="rental-time-element__input"
        type="radio"
        name={inputName}
        value={value}
        checked={checked}
        onChange={handleInputChange}
      />
    </label>
  );
};

export default RentalTimeElement;
