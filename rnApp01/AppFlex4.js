import React from "react";
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color: #ddd;
  height: 200px;
  flex-wrap:wrap;
`;

const Quadrado = styled.View`
  background-color: ${(props) => props.cor};
  width: 50px;
  height: 50px;
`;
const Pagina = styled.View`
  flex: 1;
`;

function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="#ffff00"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="#ffff00"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="#ffff00"></Quadrado>
      </Header>
    </Pagina>
  );
}

export default App;
