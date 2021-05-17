import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
  changeOrder,
  changeOptions,
  changeRental,
} from './../../redux/order-reducer';
import {
  ascendingBoothsSort,
  descendingBoothsSort,
  defaultBoothSort,
  addNews,
} from './../../redux/data-reducer';
import Logo from './../Logo/Logo';
import PromoVideo from './../PromoVideo/PromoVideo';
import Promo from './../Promo/Promo';
import Booths from './../Booths/Booths';
import Faq from './../Faq/Faq';
import News from './../News/News';
import Article from './../Article/Article';
import Order from './../Order/Order';
import './Content.scss';

const Content = ({
  videoId,
  sortedBooths,
  rentalTimes,
  isAllNews,
  renderNews,
  changeOrder,
  changeOptions,
  changeRental,
  ascendingBoothsSort,
  descendingBoothsSort,
  defaultBoothSort,
  addNews,
}) => {
  const [isArticleShowing, setArticleShowing] = useState(false);
  const [isOrderShowing, setOrderShowing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [orderElement, setOrderElement] = useState(null);
  const [articleElement, setArticleElement] = useState(null);

  const orderRef = useRef(null);
  const articleRef = useRef(null);
  const scrollIgnore = (el) => {
    while (el && el !== document.body) {
      if (el.dataset.scroll === 'ignore') {
        return true;
      }

      el = el.parentElement;
    }
  };

  useEffect(() => {
    setOrderElement(orderRef.current);
    setArticleElement(articleRef.current);
  }, [orderRef, articleRef]);

  const showArticle = (id) => {
    for (let item of renderNews) {
      if (item.id === id) {
        disableBodyScroll(articleElement, {
          allowTouchMove: scrollIgnore,
        });
        setCurrentArticle(item);
        setArticleShowing(true);
        break;
      }
    }
  };

  const closeArticle = () => {
    enableBodyScroll(articleElement);
    setArticleShowing(false);
  };

  const showOrder = (boothId, optionsId, rentalId) => {
    disableBodyScroll(orderElement, {
      allowTouchMove: scrollIgnore,
    });
    changeOrder(boothId);
    changeOptions(optionsId, boothId);
    changeRental(rentalId);
    setOrderShowing(true);
  };

  const closeOrder = () => {
    enableBodyScroll(orderElement);
    setOrderShowing(false);
  };

  return (
    <>
      <main className="content">
        <div className="content__logo">
          <Logo />
        </div>
        <div className="content__video">
          <PromoVideo videoId={videoId} />
        </div>
        <h1 className="content__title">
          <span className="content__title--top">Фото на</span>
          <br />
          <span className="content__title--bottom">праздник</span>
        </h1>
        <p className="content__title-digest">
          Lorem ipsum dolor sit amet, consectetur{' '}
          <a className="content__title-digest--link" href="/mock-link">
            adipiscing elit
          </a>
          , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="content__promo">
          <Promo />
        </div>
        <div className="content__booths">
          <Booths
            sortedBooths={sortedBooths}
            rentalTimes={rentalTimes}
            showOrder={showOrder}
            ascendingBoothsSort={ascendingBoothsSort}
            descendingBoothsSort={descendingBoothsSort}
            defaultBoothSort={defaultBoothSort}
          />
        </div>
        <div className="content__faq">
          <Faq />
        </div>
        <div className="content__news">
          <News
            renderNews={renderNews}
            isAllNews={isAllNews}
            showArticle={showArticle}
            addNews={addNews}
          />
        </div>
      </main>
      <div ref={articleRef}>
        {isArticleShowing && (
          <Article article={currentArticle} closeArticle={closeArticle} />
        )}
      </div>
      <div ref={orderRef}>
        {isOrderShowing && <Order closeOrder={closeOrder} />}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  videoId: state.data.youTubeVideoId,
  sortedBooths: state.data.sortedBooths,
  rentalTimes: state.data.rentalTimes,
  renderNews: state.data.renderNews,
  isAllNews: state.data.isAllNews,
});

export default connect(mapStateToProps, {
  changeOrder,
  changeOptions,
  changeRental,
  ascendingBoothsSort,
  descendingBoothsSort,
  defaultBoothSort,
  addNews,
})(Content);
