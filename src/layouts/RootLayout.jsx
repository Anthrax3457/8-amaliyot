import React from "react";

// react-router-dom
import { Link, Outlet, useLocation } from "react-router-dom";

// styles
import "./style.css";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      {/* Header */}
      <Header />
      {/* Menu */}
        <main className="main">
          <Outlet />
        </main>
        {/* Footer */}
        <Footer />
      </>
      );
};

      export default RootLayout;
