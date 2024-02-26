import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlicer";
import { actionsFetchStatus } from "../store/fetchStatusSlice";

function FetchItemss() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(actionsFetchStatus.markFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(actionsFetchStatus.markFetchDone());
        dispatch(actionsFetchStatus.markFetchFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
}

export default FetchItemss;
