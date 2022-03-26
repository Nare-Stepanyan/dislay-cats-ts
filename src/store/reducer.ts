import * as actionTypes from "./actionTypes";

const initialState: InitState = {
  categories: [],
  images: [],
};

const reducer = (
  state: InitState = initialState,
  action: stateAction
): InitState => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      const categories: ICategory[] = [{ id: 1, name: "example" }];
      return {
        ...state,
        categories,
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
