import React from "react";

// import TradingViewWidget from "components/TradingViewWidget";
// import TradingViewWidget from "components/TradingViewWidget";

import Chart from "components/Chart";

import {
  Container,
  CarteiraContainer,
  CarteiraTitle,
  CarteiraDetails,
} from "./styles";

function HomeBroker() {
  return (
    <Container>
      <Chart />
      <CarteiraContainer>
        <CarteiraTitle>Carteira</CarteiraTitle>
        <CarteiraDetails>Carteira Details</CarteiraDetails>
      </CarteiraContainer>
    </Container>
  );
}

export default HomeBroker;
