import { createAction } from "@reduxjs/toolkit";

const menuBattonCliked = createAction("mainPage/menuBattonCliked");
const checkBoxCliked = createAction("mainPage/checkBoxCliked");
const payMethodsError = createAction("mainPage/payMethodsError");

// const payMethodsRequest = createAction("mainPage/payMethodsRequest");
// const payMethodsSuccess = createAction("mainPage/payMethodsSuccess");
// const payMethodsError = createAction("mainPage/payMethodsError");

export { menuBattonCliked, checkBoxCliked, payMethodsError };
