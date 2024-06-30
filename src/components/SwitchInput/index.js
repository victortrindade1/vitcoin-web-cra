import React from "react";

import { Container } from "./styles";

function SwitchInput({ checked, label, key }) {
  return (
    <Container key={key}>
      <label class="switch">
        <input type="checkbox" checked={checked} />
        <span class="slider round"></span>
      </label>
      {label}
    </Container>
  );
}

export default SwitchInput;
