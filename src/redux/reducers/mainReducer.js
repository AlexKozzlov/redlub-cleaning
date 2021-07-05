import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { menuBattonCliked, checkBoxCliked } from "../actions/mainAction";

const isOpenMenu = createReducer(false, {
  [menuBattonCliked]: (state, { payload }) => !state,
});
const homeOrOffise = createReducer("home", {
  [checkBoxCliked]: (state, { payload }) => {
    if (state === "home") {
      return "offise";
    }
    if (state === "offise") {
      return "home";
    }
  },
});

const loading = createReducer(false, {
  [menuBattonCliked]: () => true,
  // [payMethodsSuccess]: () => false,
  // [payMethodsError]: () => false,
});
const error = createReducer(null, {
  // [payMethodsError]: (_, { payload }) => payload,
  // [payMethodsSuccess]: () => "",
});

const mainReduser = combineReducers({
  isOpenMenu,
  homeOrOffise,
  error,
  loading,
});

export { mainReduser };
