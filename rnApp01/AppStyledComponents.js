import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

// criando um componente de texto
const Texto = styled.Text`
  color: ${props => props.cor};
  font-size: 30px;
`;

// criando um componente
const Pagina = styled.View`
  flex: 1;
  background-color: #0000ff;
`;

function App() {
  return (
    <Pagina>
      <Texto cor="red">Texto de Exemplo</Texto>
      <Texto cor="black">Outro Texto</Texto>
    </Pagina>
  );
}

export default App;
