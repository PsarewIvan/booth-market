// import { data, balance, subscriptions } from './mock-data';

// const CHANGE_PLAN = 'CHANGE_PLAN';

const initialState = {
  id: null,
  name: null,
  size: null,
  boothCost: null,
  options: null,
  totalCost: null,
  rentalTime: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CHANGE_PLAN:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

export { orderReducer };
