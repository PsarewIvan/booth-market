import { booths, rentalTimes, news, youTubeVideoId } from './../mock/mock-data';
const clonedeep = require('lodash.clonedeep');

const SHOWING_NEWS_NUMBER = 3;
const ASCENDING_METHOD = 'data/ASCENDING_METHOD';
const DESCENDING_METHOD = 'data/DESCENDING_METHOD';
const DEFAULT_SORT = 'data/DEFAULT_SORT';
const ADD_NEWS_TO_RENDER = 'data/ADD_NEWS_TO_RENDER';

const ascendingSort = (a, b) => {
  return a.cost - b.cost;
};

const descendingSort = (a, b) => {
  return b.cost - a.cost;
};

const sortingBooths = (arr, method) => {
  if (method === ASCENDING_METHOD) {
    arr.sort(ascendingSort);
  }
  if (method === DESCENDING_METHOD) {
    arr.sort(descendingSort);
  }
  return arr;
};

const addNewsInShow = (latestNews, newNews) => {
  const prevNewsLength = latestNews.length; // 3
  const nextNewsLength = newNews.length; // 20
  const endIndex =
    nextNewsLength - prevNewsLength >= SHOWING_NEWS_NUMBER
      ? prevNewsLength + SHOWING_NEWS_NUMBER
      : nextNewsLength; // 6

  const result = latestNews.concat(newNews.slice(prevNewsLength, endIndex));
  return result;
};

const initialNews = addNewsInShow([], news);
const initialSortedBooths = clonedeep(booths);

const initialState = {
  booths,
  sortedBooths: initialSortedBooths,
  rentalTimes,
  news,
  youTubeVideoId,
  renderNews: initialNews,
  isAllNews: initialNews.length > SHOWING_NEWS_NUMBER,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASCENDING_METHOD:
      return {
        ...state,
        sortedBooths: sortingBooths(clonedeep(state.booths), ASCENDING_METHOD),
      };

    case DESCENDING_METHOD:
      return {
        ...state,
        sortedBooths: sortingBooths(clonedeep(state.booths), DESCENDING_METHOD),
      };

    case DEFAULT_SORT:
      sortingBooths(state.sortedBooths, DESCENDING_METHOD);
      return {
        ...state,
        sortedBooths: clonedeep(state.booths),
      };

    case ADD_NEWS_TO_RENDER:
      const newNewsArray = addNewsInShow(state.renderNews, news);
      return {
        ...state,
        renderNews: newNewsArray,
        isAllNews: newNewsArray.length === news.length,
      };

    default:
      return state;
  }
};

const ascendingBoothsSort = () => ({
  type: ASCENDING_METHOD,
});

const descendingBoothsSort = () => ({
  type: DESCENDING_METHOD,
});

const defaultBoothSort = () => ({
  type: DEFAULT_SORT,
});

const addNews = () => ({
  type: ADD_NEWS_TO_RENDER,
});

export {
  dataReducer,
  ascendingBoothsSort,
  descendingBoothsSort,
  defaultBoothSort,
  addNews,
};
