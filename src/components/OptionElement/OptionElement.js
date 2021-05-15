import './OptionElement.scss';

const OptionElement = ({
  name,
  photo,
  cost,
  addOptionsId,
  removeOptionsId,
  optionsId,
  id,
}) => {
  const handleInputChange = () => {
    const indexId = optionsId.indexOf(id);
    if (indexId === -1) {
      addOptionsId(id);
    } else {
      removeOptionsId(id);
    }
  };
  return (
    <li className="option-element">
      <label className="option-element__label">
        <img className="option-element__img" src={photo} alt="some option" />
        <span className="option-element__name">{name}</span>
        <span className="option-element__cost">{`от ${Math.round(
          cost / 100
        )}₽`}</span>
        <input type="checkbox" onChange={handleInputChange} />
      </label>
    </li>
  );
};

export default OptionElement;
