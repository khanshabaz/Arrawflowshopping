import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlicer";
import fetchStatusSlice from "./fetchStatusSlice";

const e_commercestore = configureStore({
  reducer:{
    items:itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer
  }
});

export default e_commercestore