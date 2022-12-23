import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
