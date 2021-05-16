import React from 'react';
import { connect } from 'react-redux';
import { changeRental } from './../../redux/order-reducer';
import BoothSize from '../BoothSize/BoothSize';
import RentalTime from './../RentalTime/RentalTime';
import Phone from './../Phone/Phone';
import Button from './../Button/Button';
import './Order.scss';

const Order = ({
  name,
  size,
  boothCost,
  options,
  totalCost,
  rentalTimes,
  changeRental,
  rentalId,
  closeOrder,
}) => {
  console.log();
  return (
    <section className="order">
      <div className="order__wrapper">
        <div className="order__window" role="dialog" aria-modal="true">
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
              boothCost / 100
            )} ₽`}</p>
          </div>
          <div className="order__rental">
            <RentalTime
              rentalTimes={rentalTimes}
              inputName="order-rental"
              checkedId={rentalId}
              onChangeId={changeRental}
              type="select"
            />
          </div>
          {!options.length && (
            <ul className="order__options">
              {options.map((item) => (
                <li className="order__options-item">
                  <span className="order__option-name">{item.name}</span>
                  <span className="optionCost">{`${Math.round(
                    item.cost / 100
                  )} ₽`}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="order__total">
            <span className="order__total-text">Итого:</span>
            <span className="order__total-cost">{`${Math.round(
              totalCost / 100
            )} ₽`}</span>
          </div>
          <div className="order__phone">
            <Phone />
          </div>
          <div className="order__button-accept">
            <Button name="Отправить заявку" onClick={closeOrder} />
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  name: state.order.name,
  size: state.order.size,
  boothCost: state.order.boothCost,
  options: state.order.options,
  totalCost: state.order.totalCost,
  rentalTimes: state.data.rentalTimes,
  rentalId: state.order.rentalId,
});

export default connect(mapStateToProps, { changeRental })(Order);
