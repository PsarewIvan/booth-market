import { booths, rentalTimes, news, youTubeVideoId } from './../mock/mock-data';
const clonedeep = require('lodash.clonedeep');

const SHOWING_NEWS_NUMBER = 3;
const ASCENDING_METHOD = 'ASCENDING_METHOD';
const DESCENDING_METHOD = 'DESCENDING_METHOD';
const DEFAULT_SORT = 'DEFAULT_SORT';

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
const initialSortedBooths = clonedeep(booths);

const initialState = {
  booths,
  sortedBooths: initialSortedBooths,
  rentalTimes,
  news,
  youTubeVideoId,
  renderingNews: initialNews,
  isAllNews: false,
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

export {
  dataReducer,
  ascendingBoothsSort,
  descendingBoothsSort,
  defaultBoothSort,
};
