import React from "react";

// import { Container } from './styles';

function AuthLayout({ children }) {
  return (
    <>
      <h1>Auth Page</h1>
      <div>{children}</div>
    </>
  );
}

export default AuthLayout;
