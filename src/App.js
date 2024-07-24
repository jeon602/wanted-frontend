import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./layout/HomeLayout";
import { BorderList } from "./page/BorderList";
import { BoardWrite } from "./page/BoardWrite";

const routes = createBrowserRouter(
  <Route path="/" element={<HomeLayout />}>
    <Route index element={<BorderList />} />
    <Route path="write" element={<BoardWrite />} />
  </Route>,
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;

//rsf react basic setting
