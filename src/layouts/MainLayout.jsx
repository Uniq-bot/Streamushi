import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar.jsx";
import Footer from "../common/Footer.jsx";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
