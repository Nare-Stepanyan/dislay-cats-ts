import * as actionTypes from "./actionTypes";
import type { Action } from "redux";
import type { ThunkAction } from "redux-thunk";
import axios from "axios";
import { objectToQueryString } from "./../utils";

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
export function getImages(params: IParams): ThunkType<ReduxTypes> {
  return (dispatch) => {
    const query = objectToQueryString(params);
    return axios
      .get(`https://api.thecatapi.com/v1/images/search?${query}`)
      .then((response) => {
        dispatch({
          type: actionTypes.GET_IMAGES,
          payload: response.data,
        });
      })
      .catch((error) => {});
  };
}
