import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'animate.css/animate.css'
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "*",
        element: <Home></Home>
      }]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App className={"bg-neutral-800"} />
    </RouterProvider>
  </React.StrictMode>
);
