import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlicer";

function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        dispatch(itemsActions.addInitialItems(items[0]));
        console.log(items[0]);
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <div></div>;
}

export default FetchItems;
