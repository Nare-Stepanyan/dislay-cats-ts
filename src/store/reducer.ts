import * as actionTypes from "./actionTypes";

const initialState: any = {
  categories: [],
  images: [],
  category_ids: 1,
};
type InitStateType = typeof initialState;

const reducer = (
  state: InitStateType = initialState,
  action: stateAction
): InitStateType => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case actionTypes.GET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case actionTypes.GET_CATEGORY_IDS:
      return {
        ...state,
        category_ids: action.payload,
      };
  }
  return state;
};

export default reducer;
