import React from 'react';
import { connect } from 'react-redux';
import { changeRental } from './../../redux/order-reducer';
import InputMask from 'react-input-mask';
import BoothSize from '../BoothSize/BoothSize';
import RentalTime from './../RentalTime/RentalTime';
import Button, { WIDE_FILL_MOD } from './../Button/Button';
import './Order.scss';

const Order = ({
  name,
  size,
  boothCostWithRental,
  options,
  totalCost,
  rentalTimes,
  changeRental,
  rentalId,
  closeOrder,
}) => {
  return (
    <section className="order" data-scroll="ignore">
      <div
        className="order__wrapper"
        role="dialog"
        aria-modal="true"
        data-scroll="ignore"
      >
        <h4 className="order__title">Ваша заявка</h4>
        <button
          className="order__button-close"
          type="button"
          aria-label="Закрыть окно"
          onClick={closeOrder}
        ></button>
        <div className="order__content">
          <p className="order__item">
            <span className="order__name">{name}</span>
            <span className="order__size">
              <BoothSize size={size} />
            </span>
          </p>
          <p className="order__item-cost">{`${Math.round(
            boothCostWithRental / 100
          )} ₽`}</p>
        </div>
        <div className="order__rental">
          <RentalTime
            rentalTimes={rentalTimes}
            inputName="order-rental"
            checkedId={rentalId}
            changeRental={changeRental}
            type="select"
          />
        </div>
        {options.length !== 0 ? (
          <ul className="order__options">
            {options.map((item) => (
              <li className="order__options-item" key={item.id}>
                <span className="order__option-name">{item.name}</span>
                <span className="optionCost">{`${Math.round(
                  item.cost / 100
                )} ₽`}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="order__total">
          <span className="order__total-text">Итого:</span>
          <span className="order__total-cost">{`${Math.round(
            totalCost / 100
          )} ₽`}</span>
        </div>
        <div className="order__phone">
          <InputMask
            mask="+7 (999) 999-99-99"
            placeholder="+7 (000) 000 00 00"
            className="order__phone-input"
          />
          <button className="order__phone-button">Позвоните мне</button>
        </div>
        <div className="order__button-accept">
          <Button
            name="Отправить заявку"
            onClick={closeOrder}
            type={WIDE_FILL_MOD}
          />
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  name: state.order.name,
  size: state.order.size,
  boothCostWithRental: state.order.boothCostWithRental,
  options: state.order.options,
  totalCost: state.order.totalCost,
  rentalTimes: state.data.rentalTimes,
  rentalId: state.order.rentalId,
});

export default connect(mapStateToProps, { changeRental })(Order);
