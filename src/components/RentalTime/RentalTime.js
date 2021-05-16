import RentalTimeElement from './../RentalTimeElement/RentalTimeElement';

const RentalTime = ({ rentalTimes, inputName, checkedId, changeRental }) => {
  return (
    <div className="rental-time">
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
  );
};

export default RentalTime;
