import React from "react";

import chartIcon from "assets/svg/charticon.svg";
import homeIcon from "assets/svg/homeicon.svg";
import historicoIcon from "assets/svg/historicoicon.svg";

import { Container, Button, ImageIcon } from "./styles";

function Menu() {
  return (
    <Container>
      <Button>
        <ImageIcon src={chartIcon} alt="Chart" />
      </Button>
      <Button>
        <ImageIcon src={homeIcon} alt="Home" />
      </Button>
      <Button>
        <ImageIcon src={historicoIcon} alt="Histórico" />
      </Button>
    </Container>
  );
}

export default Menu;
