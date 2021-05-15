import './Promo.scss';

const Promo = () => {
  return (
    <section className="promo">
      <ul className="promo__list">
        <li className="promo__element">
          Безлимитная
          <br />
          печать фото
        </li>
        <li className="promo__element">
          Фотореквизит
          <br />в наличии
        </li>
        <li className="promo__element">
          Фотоотчет в<br />
          электронном виде
        </li>
        <li className="promo__element">
          Цены
          <br />
          ниже рынка
        </li>
      </ul>
    </section>
  );
};

export default Promo;
