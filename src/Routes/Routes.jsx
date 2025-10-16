import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";
import Apps from "../pages/Apps/Apps";
import AppNotFound from "../pages/AppNotFound/AppNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/H_appsData.json"),
      },
      {
        path: "/Home",
        Component: Home,
        loader: () => fetch("/H_appsData.json"),
      },
      {
        path: "/Apps",
        loader: () => fetch("/appsData.json"),
        Component: Apps,
        errorElement: <AppNotFound></AppNotFound>,
      },
      {
        path: "/Apps/:id",
        loader: () => fetch("/appsData.json"),
        Component: AppDetails,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
