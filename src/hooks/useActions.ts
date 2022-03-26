import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "./../store/actionCreators";

export const useActions = (): typeof userActionCreators => {
  const dispatch = useDispatch();
  return bindActionCreators(userActionCreators, dispatch);
};
