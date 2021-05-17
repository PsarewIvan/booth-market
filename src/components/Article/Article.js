import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { prettyDate } from '../../common/js/prettyDate';
import './Article.scss';

const Article = ({ article, closeArticle }) => {
  return (
    <section className="article">
      <div className="article__wrapper">
        <div className="article__window">
          <button
            className="article__button"
            type="button"
            aria-label="Закрыть новость"
            onClick={closeArticle}
          ></button>
          <div className="article__slider">
            <Carousel>
              {article.photos.map((item) => (
                <img
                  className="article__slider-img"
                  src={item}
                  key={item}
                  alt="some news"
                ></img>
              ))}
            </Carousel>
          </div>
          <div className="article__addition">
            <p className="article__category">{article.category}</p>
            <time className="article__time">{prettyDate(article.date)}</time>
          </div>
          <h4 className="article__title">{article.name}</h4>
          <p className="article__text">{article.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Article;
