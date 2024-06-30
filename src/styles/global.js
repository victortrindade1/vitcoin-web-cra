"use client";

import "./fonts";
import { createGlobalStyle, keyframes } from "styled-components";
const gradient = keyframes`
	0% {
		background-position: 0%;
	}
	50% {
		/* background-position: 100%; */
	}
	100% {
		background-position: 100%;
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
    background: linear-gradient(315deg, #0a0810ff 0%, #0f0c18 10%, #1a1528ff 30%, #352852 50%, #1a1528ff 70%, #0f0c18 90%, #0a0810 100% );
    background-size: 2000% 2000%;
	  animation: ${gradient} 15s linear infinite;
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
