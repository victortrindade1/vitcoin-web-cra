import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;
