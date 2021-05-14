import { booths, rentalTimes, news, youTubeVideoId } from './../mock/mock-data';

const initialState = {
  booths,
  rentalTimes,
  news,
  youTubeVideoId,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { dataReducer };
