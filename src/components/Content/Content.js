import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
  changeOrder,
  changeOptions,
  changeRental,
} from './../../redux/order-reducer';
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
  booths,
  rentalTimes,
  isAllNews,
  renderingNews,
  changeOrder,
  changeOptions,
  changeRental,
}) => {
  const [isArticleShowing, setArticleShowing] = useState(false);
  const [isOrderShowing, setOrderShowing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [orderElement, setOrderElement] = useState(null);
  const [articleElement, setArticleElement] = useState(null);

  const orderRef = useRef(null);
  const articleRef = useRef(null);

  useEffect(() => {
    setOrderElement(orderRef.current);
    setArticleElement(articleRef.current);
  }, [orderRef, articleRef]);

  const showArticle = (id) => {
    for (let item of renderingNews) {
      if (item.id === id) {
        disableBodyScroll(articleElement);
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
    disableBodyScroll(orderElement);
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
            booths={booths}
            rentalTimes={rentalTimes}
            showOrder={showOrder}
          />
        </div>
        <div className="content__faq">
          <Faq />
        </div>
        <div className="content__news">
          <News
            renderingNews={renderingNews}
            isAllNews={isAllNews}
            showArticle={showArticle}
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
  booths: state.data.booths,
  rentalTimes: state.data.rentalTimes,
  renderingNews: state.data.renderingNews,
  isAllNews: state.data.isAllNews,
});

export default connect(mapStateToProps, {
  changeOrder,
  changeOptions,
  changeRental,
})(Content);
