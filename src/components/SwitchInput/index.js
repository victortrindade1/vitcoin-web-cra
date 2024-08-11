import React from "react";

import { Container } from "./styles";

function SwitchInput({ checked, label, name, isLoading, onChange }) {
  return (
    <Container name={name} checked={checked}>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider round"></span>
      </label>
      {!isLoading ? label : "Carregando..."}
    </Container>
  );
}

export default SwitchInput;
