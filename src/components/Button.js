import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#ff2767" : "#00d3ca")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 30px" : "12px 25px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "1.2rem;")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#ffb600" : "orange")};
    transform: translateY(-3px);
  }
`;
