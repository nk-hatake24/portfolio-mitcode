import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../component/Menu";
import '../assets/style/pages.css'

const Layout = () => {
  return (
    <div id="layout">
      <div id="menu">
        <Menu />
      </div>
      <Home />
      {/* <Footer /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
