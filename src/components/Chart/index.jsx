import React, { useState, useEffect, useRef } from "react";

import {
  Container,
  // MoedaContainer,
  // SelectMoeda,
  ChartContainer,
} from "./styles";

function Chart() {
  // const [moeda, setMoeda] = useState("BTCUSDT");
  const [scriptAdded, setScriptAdded] = useState(false);

  const tradingViewRef = useRef();

  // const moedaOptions = ["BTCUSDT", "ETHUSDT"];

  // // Change criptos
  // function onSymbolChange(event) {
  //   setMoeda((prevState) => ({ ...prevState, symbol: event.target.value }));
  // }

  // Script Trading View - Chart dos candles
  useEffect(() => {
    if (tradingViewRef.current) {
      const tradingCurrent = tradingViewRef.current;
      // const existingScript = tradingCurrent.querySelector("script");
      // console.log(existingScript);

      // if (existingScript) {
      //   existingScript.remove();
      // }
      if (!scriptAdded) {
        // if (!existingScript) {
        const script = document.createElement("script");
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "autosize": "true",
          "symbol": "BINANCE:BTCUSD",
          "interval": "1",
          "withdateranges": true,
          "range": "1D",
          "timezone": "America/Sao_Paulo",
          "theme": "dark",
          "style": "1",
          "locale": "br",
          "enable_publishing": false,
          "backgroundColor": "rgba(0, 0, 0, 0)",
          "gridColor": "rgba(101, 101, 101, 0.39)",
          "hide_legend": true,
          "withdateranges": true,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

        tradingCurrent.appendChild(script);

        // return () => {
        //   tradingCurrent.removeChild(script);
        // };
        setScriptAdded(true);
        // }
      }
    }
  }, [scriptAdded]);

  return (
    <Container>
      {/* <MoedaContainer>
        Moeda
        <SelectMoeda id="symbol" defaultValue={moeda} onChange={onSymbolChange}>
          {moedaOptions.map((item) => (
            <option>{item}</option>
          ))}
        </SelectMoeda>
      </MoedaContainer> */}

      <ChartContainer>
        <div
          className="tradingview-widget-container"
          ref={tradingViewRef}
          style={{
            height: "400px" /* Exemplo de altura fixa */,
            width: "100%",
          }}
        >
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a
              href="https://br.tradingview.com/"
              rel="noreferrer nofollow"
              target="_blank"
            >
              <span className="blue-text">
                Monitore todos os mercados no TradingView
              </span>
            </a>
          </div>
        </div>
      </ChartContainer>
    </Container>
  );
}

export default Chart;
