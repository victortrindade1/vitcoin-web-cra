import React, { useEffect, useState } from "react";

import api from "services/api";

import SwitchInput from "components/SwitchInput";

import { Container } from "./styles";

function Home() {
  const [isServerLoading, setIsServerLoading] = useState(true);
  const [isServerOnState, setIsServerOnState] = useState(false);

  // Verifica se servidor está on
  const isServerOn = async () => {
    try {
      const response = await api.get("/verifyserver");

      setIsServerOnState(response.data.statusServer);

      setIsServerLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };

  // Liga/Desliga servidor
  const handleSwitchServer = async () => {
    if (isServerOnState) {
      try {
        await api.get("/stopserver");

        setIsServerOnState(false);
      } catch (error) {
        console.log({ error });
      }
    } else {
      await api.get("/startserver", {
        params: {
          /**
           * Limite de consultas / mês no coingecko (free): 10000
           * 2 consulta a cada 10 minutos (600s): 8928 / mês
           * 2 consulta a cada 8 minutos: 11160 / mês
           * OBS: acredito q farei 2 consultas por vez:
           *    uma pra histórico de 2 semanas e uma pra 1 dia
           */
          interval: 600,
        },
      });

      setIsServerOnState(true);
    }
  };

  useEffect(() => {
    isServerOn();
  }, []);

  return (
    <Container>
      <SwitchInput
        label={"Servidor"}
        name={"switchServidor"}
        isLoading={isServerLoading}
        checked={isServerOnState}
        defaultChecked={false}
        onChange={handleSwitchServer}
      />

      {/* <CarteiraContainer>

      <Label></Label>
    </CarteiraContainer> */}
    </Container>
  );
}

export default Home;
