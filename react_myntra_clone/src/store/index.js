import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlicer";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const e_commercestore = configureStore({
  reducer:{
    items:itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer
  }
});

export default e_commercestore