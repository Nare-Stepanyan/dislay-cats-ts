import * as actionTypes from "./actionTypes";
import type { Action } from "redux";
import type { ThunkAction } from "redux-thunk";
import axios from "axios";

export type ThunkType<T extends Action> = ThunkAction<
  Promise<void> | void,
  InitState,
  unknown,
  T
>;
export function addCategory(): ThunkType<ReduxTypes> {
  return (dispatch) => {
    return axios
      .get("https://api.thecatapi.com/v1/categories")
      .then((response) => {
        dispatch({
          type: actionTypes.ADD_CATEGORY,
          payload: response.data,
        });
      })
      .catch((error) => {});
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
