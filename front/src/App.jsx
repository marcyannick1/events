import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import PageLayout from "./layouts/PageLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import NotFound from "./page/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>

        <Route element={<DashboardLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
