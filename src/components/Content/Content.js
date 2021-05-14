import { useState } from 'react';
import Logo from './../Logo/Logo';
import PromoVideo from './../PromoVideo/PromoVideo';
import Promo from './../Promo/Promo';
import Booths from './../Booths/Booths';
import Faq from './../Faq/Faq';
import News from './../News/News';
import Contacts from './../Contacts/Contacts';
import Map from './../Map/Map';
import Article from './../Article/Article';
import Order from './../Order/Order';

const Content = () => {
  const [isArticle, setArticle] = useState(false);
  const [isOrder, setOrder] = useState(false);

  return (
    <div className="content">
      <div className="content__logo">
        <Logo />
      </div>
      <div className="content__video">
        <PromoVideo />
      </div>
      <h1 className="content__title">
        <span className="content__title--top">Фото на</span>
        <span className="content__title--bottom">праздник</span>
      </h1>
      <p className="content__title-digest">
        Lorem ipsum dolor sit amet, consectetur{' '}
        <span className="content__title-digest--highlight">
          adipiscing elit
        </span>
        , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="content__promo">
        <Promo />
      </div>
      <div className="content__booths">
        <Booths />
      </div>
      <div className="content__faq">
        <Faq />
      </div>
      <div className="content__news">
        <News />
      </div>
      <div className="content__contacts">
        <Contacts />
      </div>
      <div className="content__map">
        <Map />
      </div>
      {isArticle && (
        <div className="content__article">
          <Article />
        </div>
      )}
      {isOrder && (
        <div className="content__order">
          <Order />
        </div>
      )}
    </div>
  );
};

export default Content;
