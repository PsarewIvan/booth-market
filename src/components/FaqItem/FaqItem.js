import './FaqItem.scss';

const FaqItem = () => {
  const handleDetailsChange = (evt) => {
    console.log(evt);
  };
  return (
    <details className="faq-item" onClick={handleDetailsChange}>
      <summary className="faq-item__title">
        Какой реквизит идет в комплекте?
      </summary>
      <p className="faq-item__text">
        Какой то текст для заголовка Какой то текст для заго Какой то текст для
        заголовка Какой то текст для загоКакой то текст для заголовка Какой то
        текст для заго Какой то текст для заголовка Какой то текст для загоКакой
        то текст для заголовка Какой то текст для заго
      </p>
    </details>
  );
};

export default FaqItem;
