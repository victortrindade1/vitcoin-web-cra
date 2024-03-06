import React, { useState, useEffect, useRef } from "react";

import {
  Container,
  // MoedaContainer,
  // SelectMoeda,
  ChartContainer,
} from "./styles";

function TradingViewChart() {
  const [scriptAdded, setScriptAdded] = useState(false);

  const tradingViewRef = useRef();

  // Script Trading View - Chart dos candles
  useEffect(() => {
    if (tradingViewRef.current) {
      const tradingCurrent = tradingViewRef.current;

      if (!scriptAdded) {
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
          "support_host": "https://www.tradingview.com",
          "watchlist": [
            "BMFBOVESPA:AFHI11",
            "BMFBOVESPA:XPCM11"
          ],
          "allow_symbol_change": true
        }`;

        tradingCurrent.appendChild(script);

        setScriptAdded(true);
      }
    }
  }, [scriptAdded]);

  return (
    <Container>
      <div
        className="tradingview-widget-container"
        ref={tradingViewRef}
        style={{
          width: "100%",
        }}
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </Container>
  );
}

export default TradingViewChart;
