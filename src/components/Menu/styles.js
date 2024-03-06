import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 12vh;
  background: #00000090;

  position: fixed;
  bottom: 0px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #00b3b3,
    0 0 0.8rem #00b3b3, 0 0 2.8rem #00b3b3, inset 0 0 1.3rem #00b3b3;
  width: 32vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10.5vh;
  position: relative;
  background-color: #00000080;
  transition: background-color 2s;

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 32vw;
    height: 10.5vh;
    background-color: #ffffff20;
    cursor: pointer;
  }

  &.active {
    background-color: #00b3b330;
    cursor: default !important;
  }
`;

export const ImageIcon = styled.img`
  height: 8vh;
`;
