import * as actionTypes from "./actionTypes";

export function addCategory(category: ICategory) {
  const action: CategoryAction = {
    type: actionTypes.ADD_CATEGORY,
    category,
  };
  return (dispatch: DispatchTypeCategory) => {
    dispatch(action);
  };
}
export function getImages(images: IImages[]) {
  const action: ImagesAction = {
    type: actionTypes.GET_IMAGES,
    images,
  };
  return (dispatch: DispatchTypeImages) => {
    dispatch(action);
  };
}
