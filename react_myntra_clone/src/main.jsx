import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./router/Home.jsx";
import Bags from "./router/Bags.jsx";
import e_commercestore from "./store/index.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bags />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={e_commercestore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
