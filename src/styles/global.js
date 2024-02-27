"use client";

import "./fonts";
import { createGlobalStyle, keyframes } from "styled-components";
const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: linear-gradient(315deg, #2b4162 0%, #221A35 20%, #06081A 70%, #12100e 80% );
    background-size: 400% 400%;
	  animation: ${gradient} 15s ease infinite;
  }

  body, input, button {
    color: ${(props) => props.theme.main};
    font-size: 14px;
    font-family: "Roboto", sans-serif, Arial;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
