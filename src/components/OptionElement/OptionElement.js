import { useState } from 'react';
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
  const [isChecked, toggleChecked] = useState(false);

  const handleInputChange = () => {
    const indexId = optionsId.indexOf(id);
    if (indexId === -1) {
      addOptions(id, cost);
      toggleChecked(true);
    } else {
      removeOptions(id, cost);
      toggleChecked(false);
    }
  };
  return (
    <li className="option-element">
      <label
        className={`option-element__label ${
          isChecked ? 'option-element__label--checked' : ''
        }`}
        tabIndex="0"
      >
        <img className="option-element__img" src={photo} alt="some option" />
        <span className="option-element__text">
          <span className="option-element__name">{name}</span>
          <span className="option-element__cost">{`от ${Math.round(
            cost / 100
          )}₽`}</span>
        </span>
        <input
          className="option-element__input"
          type="checkbox"
          onChange={handleInputChange}
        />
      </label>
    </li>
  );
};

export default OptionElement;
