import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";
import NavOverlay from "./NavOverlay";
// import "../components/styles/global.css";

import { GlobalStyle } from "./styles/GlobalStyles";

import "./styles/index.css";
const Layout = ({ children, title }) => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div>
      <GlobalStyle />

      <NavBar navToggle={navToggle} setNavToggle={setNavToggle} />
      <title>My Voice Canada - {title}</title>
      <main>{children}</main>

      <Footer />
      {navToggle ? (
        <NavOverlay navToggle={navToggle} setNavToggle={setNavToggle} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Layout;
