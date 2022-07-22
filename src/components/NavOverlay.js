import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";

import { menuData } from "./data/MenuData";

const NavOverlay = ({ navToggle, setNavToggle }) => {
  const navView = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          );
        })}
      </NavMenu>
      <Close onClick={() => navView()} />
      <NavOverlayContainer></NavOverlayContainer>
    </>
  );
};

export default NavOverlay;

const NavOverlayContainer = styled.div`
  background: #000;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  position: fixed;
`;
const Close = styled(FaWindowClose)`
  display: block;
  position: absolute;
  color: #fff;
  z-index: 101;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
  position: fixed;
  &:hover {
    color: #ffb600;
  }
`;

const NavMenu = styled.div`
  position: absolute;
  z-index: 101;
  top: 20%;
  right: 10%;
  position: fixed;
  font-size: 1.8rem;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 3.8rem;
  &:hover {
    color: #ffb600;
  }
`;
