import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import BoothSize from '../BoothSize/BoothSize';
import Options from './../Options/Options';
import RentalTime from './../RentalTime/RentalTime';
import Button from './../Button/Button';
import './Booth.scss';

const Booth = ({
  name,
  photos,
  cost,
  size,
  options,
  rentalTimes,
  id,
  showOrder,
}) => {
  const [optionsId, setOptionsId] = useState([]);
  const [rentalId, setRentalId] = useState(rentalTimes[0].value);
  const [boothCost, setBoothCost] = useState(cost);
  const [totalCost, setTotalCost] = useState(cost);

  const addOptions = (id, cost) => {
    setOptionsId([...optionsId, id]);
    setTotalCost(Number(totalCost) + Number(cost));
  };

  const removeOptions = (id, cost) => {
    setOptionsId(optionsId.filter((i) => i !== id));
    setTotalCost(Number(totalCost) - Number(cost));
  };

  const changeRental = (id, value) => {
    setRentalId(id);
    const optionsCost = totalCost - boothCost;
    const newBoothCost = cost * value;
    setBoothCost(newBoothCost);
    setTotalCost(Number(newBoothCost) + Number(optionsCost));
  };

  const onButtonClick = () => {
    showOrder(id, optionsId, rentalId);
  };

  return (
    <div className="booth">
      <h3 className="booth__title">{name}</h3>
      <div className="booth__sizes">
        <BoothSize size={size} />
      </div>
      <div className="booth__slider">
        <div className="booth__slider-wrapper">
          <Carousel
            showStatus={false}
            showThumbs={false}
            // infiniteLoop
            centerMode
            centerSlidePercentage={86.7}
            emulateTouch
          >
            {photos.map((item) => (
              <img
                className="booth__slider-img"
                src={item}
                key={item}
                alt="some booth"
              ></img>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="booth__options">
        <Options
          options={options}
          addOptions={addOptions}
          removeOptions={removeOptions}
          optionsId={optionsId}
        />
      </div>
      <div className="booth__rental">
        <RentalTime
          rentalTimes={rentalTimes}
          inputName={id}
          checkedId={rentalId}
          changeRental={changeRental}
        />
      </div>
      <p className="booth__cost">{`${Math.round(totalCost / 100)} ₽`}</p>
      <div className="booth__button">
        <Button name="Оставить заявку" onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default Booth;
