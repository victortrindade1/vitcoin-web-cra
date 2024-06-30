import React from "react";

// import api from "services/api";

import SwitchInput from "components/SwitchInput";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <SwitchInput label={"Servidor"} key={"switchServidor"} />

      {/* <CarteiraContainer>

      <Label></Label>
    </CarteiraContainer> */}
    </Container>
  );
}

export default Home;
