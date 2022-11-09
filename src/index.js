import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createHashRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/root";
import Home from "./pages/Home";
import Profile, {loader as addressLoader} from "./pages/Profile";
import Kudos, {loader as kudosLoader} from "./pages/Kudos";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {path: "/", element: <Home />},
      {path: "/profile/:address", element: <Profile />, loader: addressLoader},
      {
        path: "/kudos/:address/:tokenId",
        element: <Kudos />,
        loader: kudosLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();