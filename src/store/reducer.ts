import * as actionTypes from "./actionTypes";

const initialState: any = {
  categories: [],
  images: [],
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
      const images: IImages[] = [];
      return {
        ...state,
        images,
      };
  }
  return state;
};

export default reducer;
