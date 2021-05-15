import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <p className="contacts__title-digest">Мы всегда доступны для вас</p>
      <div className="contacts__element">
        <p className="contacts__element-text">Телефон</p>
        <a
          className="contacts__element-description"
          href="tel:+7 (495) 123-45-67"
        >
          +7 (495) 123-45-67
        </a>
      </div>
      <div className="contacts__element">
        <p className="contacts__element-text">Адрес</p>
        <p className="contacts__element-description">
          109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с
          улицы Люблинская
        </p>
      </div>
      <div className="contacts__element">
        <p className="contacts__element-text">Почта</p>
        <a className="contacts__element-description" href="mailto:Info@test.ru">
          Info@test.ru
        </a>
      </div>
    </div>
  );
};

export default Contacts;
