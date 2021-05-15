import { prettyDate } from './../../common/prettyDate';
import './NewsItem.scss';

const NewsItem = ({ name, category, date, photo, digest, showArticle, id }) => {
  const handleNewsClick = () => {
    showArticle(id);
  };

  return (
    <li className="news-item" onClick={handleNewsClick}>
      <h3 className="news-item__title">{name}</h3>
      <p className="news-item__category">{category}</p>
      <img className="news-item__img" src={photo} alt="some news"></img>
      <p className="new-item__digest">{digest}</p>
      <time dateTime={date}>{prettyDate(date)}</time>
    </li>
  );
};

export default NewsItem;
