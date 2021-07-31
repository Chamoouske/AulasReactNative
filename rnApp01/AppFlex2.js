import React from "react";
import styled from "styled-components/native";

const Quadrado = styled.View`
  background-color: ${(props) => props.cor};
  width: 50px;
  height: 50px;
`;
const Pagina = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Pagina>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
      <Quadrado cor="#ffff00"></Quadrado>
    </Pagina>
  );
}

export default App;
