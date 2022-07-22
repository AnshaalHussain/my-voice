import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { menuData } from "../data/MenuData";
import { Button } from "../Button";

import Logo from "../../images/ART/MY-LOGO-COLOUR.jpg";

import Logos from "../../images/svg/logo.inline.svg";
import DonateBar from "./DonateBar";

const NavBar = ({ navToggle, setNavToggle }) => {
  //mobile screen onClick trigger

  const navView = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div>
      <NavContainer>
        <Nav>
          <NavLink to="/">
            <LogoContainer>
              <Logos
                style={{
                  minWidth: 4 + "rem",
                  paddingTop: 1 + "rem",
                  paddingBottom: 1 + "rem",
                }}
              />
            </LogoContainer>
          </NavLink>

          <Bars onClick={() => navView()} />

          <NavMenu>
            {menuData.map((item, index) => {
              return (
                <NavLink to={item.link} key={index}>
                  {item.title}
                </NavLink>
              );
            })}
          </NavMenu>
          <NavBtn>
            <a
              className="text-white rounded-xl bg-primary-blue hover:text-primary-yellow hover:bg-primary-red py-3 px-6 text-2xl tracking-wider hover:drop-shadow-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ring ring-cyan-500 ring-offset-2 ring-offset-cyan-100 outline-cyan-500 
              hover:ring-primary-red
              hover:ring-offset-2 hover:outline-primary-red focus:ring-violet-300 focus:scale-90"
              href="https://crm.bloomerang.co/HostedDonation?ApiKey=pub_7f79bc33-bc0a-11ec-be05-02d341daa68d&WidgetId=28672"
              rel="noreferrer"
              target="_blank"
            >
              Donate
            </a>
          </NavBtn>
        </Nav>
      </NavContainer>
    </div>
  );
};

export default NavBar;

const NavContainer = styled.div`
  margin-bottom: 15vh;
`;

const Nav = styled.div`
  background: #fff;
  height: 15vh;
  padding: 0rem calc((100vh - 550px) / 2);
  padding: 0 13rem;

  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  position: fixed;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);

  top: 0;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1.5rem;

  cursor: pointer;
  z-index: 3;
  text-transform: uppercase;

  &:hover {
    color: #ffb600;
  }
`;

const LogoContainer = styled.div`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 1rem;
    font-size: 1.8rem;
  } ;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    // display: none;
    margin-right: 6rem;
  } ;
`;

const MobileButton = styled.button``;

const Bars = styled(FaBars)`
  display: none;
  color: #000;
  z-index: 3;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
