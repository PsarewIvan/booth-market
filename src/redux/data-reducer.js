import { booths, rentalTimes, news } from './../mock/mock-data';

const initialState = {
  booths,
  rentalTimes,
  news,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { dataReducer };
