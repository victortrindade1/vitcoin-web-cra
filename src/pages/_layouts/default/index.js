import React from "react";

import Menu from "components/Menu";

// import { Container } from './styles';

function DefaultLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <Menu />
    </>
  );
}

export default DefaultLayout;
