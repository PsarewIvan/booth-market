import './OptionElement.scss';

const OptionElement = ({
  name,
  photo,
  cost,
  addOptions,
  removeOptions,
  optionsId,
  id,
}) => {
  const handleInputChange = () => {
    const indexId = optionsId.indexOf(id);
    if (indexId === -1) {
      addOptions(id, cost);
    } else {
      removeOptions(id, cost);
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
