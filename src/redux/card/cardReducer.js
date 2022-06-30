const cardReducer = (
  state = JSON.parse(localStorage.getItem("productCard")) || [],
  action
) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return addToCard(action.product, state);
    case "REMOVE_FROM_CARD":
      return removeFromCard(action.product, state);
    case "DEC_PRODUCT_COUNt":
      return decProductcount(action.product, state);
    case "RESET_CARD":
      return resetCard();
    default:
      return state;
  }
};

const addToCard = (product, state) => {
  let found = (element) => element.id === product.id;

  if (state.some(found)) {
    var index = state.findIndex((element) => element.id == product.id);
    state[index].count++;
    state = [...state];
  } else {
    product.count = 1;
    state = state.concat(product);
  }
  return setToLocaStorage(state);
};

const decProductcount = (product, state) => {
  var index = state.findIndex((element) => element.id == product.id);
  if (state[index].count == 1) {
    state.splice(index, 1);
    state = [...state];
  } else {
    state[index].count--;
    state = [...state];
  }
  return setToLocaStorage(state);
};
const removeFromCard = (product, state) => {
  var index = state.findIndex((element) => element.id == product.id);
  state[index].count = 0;
  state.splice(index, 1);
  state = [...state];
  return setToLocaStorage(state);
};

const setToLocaStorage = (state) => {
  localStorage.setItem("productCard", JSON.stringify(state));
  return state;
};
const resetCard = () => {
  localStorage.removeItem("productCard");
  return [];
};
export default cardReducer;
