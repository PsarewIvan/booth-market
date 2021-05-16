import { booths, rentalTimes } from './../mock/mock-data';

const CHANGE_ORDER = 'CHANGE_ORDER';
const CHANGE_OPTIONS = 'CHANGE_OPTIONS';
const CHANGE_RENTAL = 'CHANGE_RENTAL';

const getCurrentItem = (id, array) => {
  for (let item of array) {
    if (item.id === id) return item;
  }
};

const getTotalCost = (options, boothCost, rentalValue) => {
  let optionsCost = 0;
  options.forEach((item) => {
    optionsCost += Number(item.cost);
  });

  return boothCost * rentalValue + optionsCost;
};

const getOptions = (boothId, optionsId) => {
  const currentOptions = [];
  if (!optionsId) return currentOptions;

  let currentBooth;
  for (let item of booths) {
    if (item.id === boothId) currentBooth = item;
  }

  for (let item of currentBooth.options) {
    if (optionsId.includes(item.id)) currentOptions.push(item);
  }

  return currentOptions;
};

const initialState = {
  id: null,
  name: null,
  size: null,
  boothCost: null,
  boothCostWithRental: null,
  options: [],
  rentalId: rentalTimes[0].id,
  totalCost: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ORDER:
      const booth = getCurrentItem(action.id, booths);
      return {
        ...state,
        name: booth.name,
        size: booth.size,
        boothCost: booth.cost,
        boothCostWithRental: booth.cost,
        totalCost: getTotalCost(
          state.options,
          booth.cost,
          getCurrentItem(state.rentalId, rentalTimes).value
        ),
      };

    case CHANGE_OPTIONS:
      const options = getOptions(action.boothId, action.optionsId);
      return {
        ...state,
        options: options,
        boothCostWithRental: state.boothCost,
        totalCost: getTotalCost(
          options,
          state.boothCost,
          getCurrentItem(state.rentalId, rentalTimes).value
        ),
      };

    case CHANGE_RENTAL:
      const rentalValue = getCurrentItem(action.id, rentalTimes).value;
      return {
        ...state,
        rentalId: action.id,
        boothCostWithRental: state.boothCost * rentalValue,
        totalCost: getTotalCost(state.options, state.boothCost, rentalValue),
      };

    default:
      return state;
  }
};

const changeOrder = (id) => ({
  type: CHANGE_ORDER,
  id,
});

const changeOptions = (optionsId, boothId) => ({
  type: CHANGE_OPTIONS,
  optionsId,
  boothId,
});

const changeRental = (id) => ({
  type: CHANGE_RENTAL,
  id,
});

export { orderReducer, changeOrder, changeOptions, changeRental };
