import NewsItem from './../NewsItem/NewsItem';
import Button from './../Button/Button';
import './News.scss';

const News = ({ isAllNews, renderNews, showArticle, addNews }) => {
  return (
    <section className="news">
      <h2 className="news__title">Новости</h2>
      <p className="news__title-digest">Почему выбирают нас?</p>
      {renderNews.length !== 0 && (
        <ul className="news__list">
          {renderNews.map((item) => (
            <NewsItem
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category}
              date={item.date}
              photo={item.photos[0]}
              digest={item.digest}
              showArticle={showArticle}
            />
          ))}
        </ul>
      )}
      <div className="news__button">
        <Button name="Показать еще" isActive={!isAllNews} onClick={addNews} />
      </div>
    </section>
  );
};

export default News;
