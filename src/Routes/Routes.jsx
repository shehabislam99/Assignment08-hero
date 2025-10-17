import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";
import Apps from "../pages/Apps/Apps";
import AppsNotFound from "../AppsNotFound/AppsNotFound";

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
      },
      {
        path: "/Apps/:id",
        loader: async ({ params }) => {
          const response = await fetch("/appsData.json");
          const apps = await response.json();
          const app = apps.find(
            (app) => app.id.toString() === params.id.toString()
          );
          if (!app) throw new Response("Not Found", { status: 404 });
          return app;
        },
        Component: AppDetails,
        errorElement: <AppsNotFound></AppsNotFound>,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
