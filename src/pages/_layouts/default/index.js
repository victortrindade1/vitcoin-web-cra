import React from "react";

// import { Container } from './styles';

function DefaultLayout({ children }) {
  return (
    <>
      <h1>Default Page</h1>
      <div>{children}</div>
    </>
  );
}

export default DefaultLayout;
