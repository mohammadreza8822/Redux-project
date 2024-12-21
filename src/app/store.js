import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productSlice.js";

import logger from "redux-logger";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
