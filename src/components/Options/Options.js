import OptionElement from './../OptionElement/OptionElement';

const Options = ({ options, addOptionsId, removeOptionsId, optionsId }) => {
  return (
    <div className="options">
      <h4 className="options__title">Доп. опции</h4>
      <ul className="options__list">
        {options.map((item) => (
          <OptionElement
            key={item.id}
            name={item.name}
            photo={item.photo}
            cost={item.cost}
            id={item.id}
            addOptionsId={addOptionsId}
            removeOptionsId={removeOptionsId}
            optionsId={optionsId}
          />
        ))}
      </ul>
    </div>
  );
};

export default Options;
