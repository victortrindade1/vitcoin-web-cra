import React from "react";
import { useNavigate } from "react-router-dom";

import chartIcon from "assets/svg/charticon.svg";
import homeIcon from "assets/svg/homeicon.svg";
import historicoIcon from "assets/svg/historicoicon.svg";

import { Container, NavLinkStyled, ImageIcon } from "./styles";

function Menu() {
  const navigate = useNavigate();

  const handleCLick = (url) => {
    navigate(url);
  };

  return (
    <Container>
      <NavLinkStyled
        to="/chart"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        onClick={() => handleCLick("/chart")}
      >
        <ImageIcon src={chartIcon} alt="Chart" />
      </NavLinkStyled>
      <NavLinkStyled
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        onClick={() => handleCLick("/home")}
      >
        <ImageIcon src={homeIcon} alt="Home" />
      </NavLinkStyled>
      <NavLinkStyled
        to="/historico"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        onClick={() => handleCLick("/historico")}
      >
        <ImageIcon src={historicoIcon} alt="Histórico" />
      </NavLinkStyled>
    </Container>
  );
}

export default Menu;
