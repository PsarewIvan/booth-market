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

  const addOptionsId = (id) => {
    setOptionsId([...optionsId, id]);
  };

  const removeOptionsId = (id) => {
    setOptionsId(optionsId.filter((i) => i !== id));
  };

  const changeRentalId = (id) => {
    setRentalId(id);
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
        <Carousel>
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
      <div className="booth__options">
        <Options
          options={options}
          addOptionsId={addOptionsId}
          removeOptionsId={removeOptionsId}
          optionsId={optionsId}
        />
      </div>
      <div className="booth__rental">
        <RentalTime
          rentalTimes={rentalTimes}
          inputName={id}
          checkedId={rentalId}
          onChangeId={changeRentalId}
        />
      </div>
      <p className="booth__cost">{`${Math.round(cost / 100)} ₽`}</p>
      <div className="booth__button">
        <Button name="Оставить заявку" onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default Booth;
