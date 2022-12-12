import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { dishSlice } from "./dish";
import { cartSlice } from "./cart";
import { restaurantSlice } from "./restaurant";
import { userSlice } from "./user";
import { reviewSlice } from "./review";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     loggerMiddleware,
//     loadRestaurantsIfNotExist,
//     loadDishesIfNotExist,
//     loadReviewsIfNotExist,
//     loadUsersIfNotExist
//   )
// );
