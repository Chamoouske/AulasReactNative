import React from "react";
//import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Quadrado = styled.View`
  backgroud-color: ${(props) => props.cor};
  flex: ${(props) => props.flexivel};
  height: 50px;
`;

// criando um componente
const Pagina = styled.View`
  flex: 1;
  flex-direction: row;
`;

function App() {
  return (
    <Pagina>
      <Quadrado flexivel={1} cor="red"></Quadrado>
      <Quadrado flexivel={2} cor="green"></Quadrado>
      <Quadrado flexivel={1} cor="blue"></Quadrado>
    </Pagina>
  );
}

export default App;
