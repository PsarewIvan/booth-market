import { prettyDate } from '../../common/js/prettyDate';
import './NewsItem.scss';

const NewsItem = ({ name, category, date, photo, digest, showArticle, id }) => {
  const handleNewsClick = () => {
    showArticle(id);
  };

  return (
    <li className="news-item" onClick={handleNewsClick}>
      <div className="news-item__description">
        <h3 className="news-item__title">{name}</h3>
        <p className="news-item__category">{category}</p>
        <p className="news-item__digest">{digest}</p>
        <time className="news-item__time" dateTime={date}>
          {prettyDate(date)}
        </time>
      </div>
      <div className="news-item__img-wrapper">
        <img className="news-item__img" src={photo} alt="some news"></img>
      </div>
    </li>
  );
};

export default NewsItem;
