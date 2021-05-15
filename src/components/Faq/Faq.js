import FaqItem from './../FaqItem/FaqItem';
import './Faq.scss';

const Faq = () => {
  const ITEM = 6;

  const renderItem = (i) => {
    let k = 0;
    const result = [];
    while (k < i) {
      result.push(<FaqItem key={k} />);
      k++;
    }
    return result;
  };

  return (
    <section className="faq">
      <h2 className="faq__title">FAQ</h2>
      <p className="faq__title-digest">Почему выбирают нас?</p>
      {renderItem(ITEM)}
    </section>
  );
};

export default Faq;
