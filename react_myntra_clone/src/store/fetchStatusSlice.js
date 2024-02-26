import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducer: {
    marckFetchDone: (state, action) => {
      return state.fetchDone = true;
    },
    markFetchStarted: (state, action) => {
      return state.currentlyFetching = true
    },
    marckFetchFinished: (state, action) => {
      return state.currentlyFetching = false;
    },
  },
});

export const actionsFetchStatus = fetchStatusSlice.actions;

export default fetchStatusSlice;
