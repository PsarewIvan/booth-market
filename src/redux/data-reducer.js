import { booths, rentalTimes, news, youTubeVideoId } from './../mock/mock-data';

const SHOWING_NEWS_NUMBER = 3;

const addNewsInShow = (latestNews, newNews) => {
  const prevNewsLength = latestNews.length;
  const nextNewsLength = newNews.length;
  const endIndex =
    nextNewsLength - prevNewsLength >= SHOWING_NEWS_NUMBER
      ? prevNewsLength + SHOWING_NEWS_NUMBER
      : nextNewsLength;

  const result = latestNews.concat(newNews.slice(prevNewsLength, endIndex));
  return result;
};

const initialNews = addNewsInShow([], news);

const initialState = {
  booths,
  rentalTimes,
  news,
  youTubeVideoId,
  renderingNews: initialNews,
  isAllNews: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { dataReducer };
