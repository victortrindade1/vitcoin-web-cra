import React from "react";

import TradingViewChart from "components/TradingViewChart";

import { Container, TradingViewContainer } from "./styles";

function Chart() {
  return (
    <Container>
      <TradingViewContainer>
        <TradingViewChart />
      </TradingViewContainer>
    </Container>
  );
}

export default Chart;
