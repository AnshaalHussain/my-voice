import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";

import { menuData } from "../data/MenuData";
import Logos from "../../images/svg/logo.inline.svg";
import ContactUs from "../../images/contact-img.png";
const Footer = () => {
  return (
    <>
      {/* <FooterContainer> */}

      <div className="bg-primary-yellow flex flex-col justify-center items-center md:flex-row md:justify-evenly text-sm py-9 divide-y-[1px] md:divide-x-[1px] sm:divide-y-0 divide-black">
        <div className="flex flex-col justify-center items-center">
          <Logos
            style={{
              maxWidth: 7.5 + "rem",
              paddingTop: 1 + "rem",
              paddingBottom: 1 + "rem",
            }}
          />

          {/* <NavMenu> */}

          <div className="flex flex-row my-6">
            {menuData.map((item, index) => {
              return (
                <NavLink to={item.link} key={index}>
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* </NavMenu> */}

        <SocialsContainer>
          <div className="flex flex-col md:flex-row items-center justify-center px-20">
            <div className="flex flex-col justify-center items-center">
              <div className="h-40 w-40 my-6 text-2xl text-center">
                <h1>Contact Us</h1>
                <img src={ContactUs} />
              </div>
              <div className="text-base flex flex-col justify-center items-center font-bold">
                <a
                  href="mailto: info@myvoicecanada.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="hover:text-primary-red">
                    {" "}
                    email: info@myvoicecanada
                  </p>
                </a>

                <a
                  href="https://myvoicecanada.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="hover:text-primary-red">
                    {" "}
                    website: myvoicecanada.com
                  </p>
                </a>
              </div>

              <a
                href="https://myvoicecanada.com/"
                className="hover:text-color-primary-red"
                rel="noreferrer"
                target="_blank"
              >
                <div className="text-lg underline my-3  text-gray-700 hover:text-primary-red">
                  Sign up for our newsletter
                </div>
              </a>
            </div>

            <div className="md:flex md:flex-col md:justify-center md:items-center md:mx-14">
              <SocialsH1>Socials</SocialsH1>
              <SocialsLinks>
                <NavLink>
                  <a
                    href="https://www.facebook.com/myvoicecanada/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TiSocialFacebook />
                  </a>
                </NavLink>
                <NavLink>
                  <a
                    href="https://twitter.com/myvoicecanada?lang=en"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TiSocialTwitter />
                  </a>
                </NavLink>
                <NavLink>
                  <a
                    href="https://www.instagram.com/myvoicecanada/?hl=en"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TiSocialInstagram />
                  </a>
                </NavLink>
                <NavLink>
                  <a
                    href="https://www.youtube.com/c/MYVoiceCanada"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TiSocialYoutube />
                  </a>
                </NavLink>
              </SocialsLinks>
            </div>
          </div>
        </SocialsContainer>
      </div>
      {/* </FooterContainer> */}
    </>
  );
};

export default Footer;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialsH1 = styled.h1`
  font-size: 1.5rem;
  padding: 1rem 0;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
const SocialsLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 1.8rem;

  cursor: pointer;
  z-index: 3;
  text-transform: uppercase;

  &:hover {
    color: #ff0064;
  }
`;
