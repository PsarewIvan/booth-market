import RentalTimeElement from './../RentalTimeElement/RentalTimeElement';
import './RentalTime.scss';

const RentalTime = ({
  rentalTimes,
  inputName,
  checkedId,
  changeRental,
  type,
}) => {
  const handleSelectChange = (evt) => {
    changeRental(evt.target.value);
  };

  return (
    <>
      {type === 'select' ? (
        <div className="rental-time rental-time--select">
          <select
            className="rental-time__select"
            onChange={handleSelectChange}
            value={checkedId}
          >
            {rentalTimes.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        <div className="rental-time">
          <p className="rental-time__title">Укажите время аренды</p>
          <div className="rental-time__list">
            {rentalTimes.map((item) => (
              <RentalTimeElement
                key={item.id}
                id={item.id}
                name={item.name}
                value={item.value}
                inputName={`rental-${inputName}`}
                changeRental={changeRental}
                checked={checkedId === item.id}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RentalTime;
