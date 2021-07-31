import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color: #ddd;
  height: 500px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Quadrado = styled.View`
  background-color: ${(props) => props.cor};
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;
const Pagina = styled.View`
  flex: 1;
`;

function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green">
          <Image
            source={require("./src/imagens/uepa.png")}
            style={{ width: 100, height: 100, backgroundColor: "#aaa" }}
            resizeMode="cover"
          />
        </Quadrado>
        <Quadrado cor="blue">
          <Image
            source={{uri:'https://geeksinaction.com.br/wp-content/uploads/2020/06/Kumo-desu-ga-Nani-ka-light-novel-volume-4-artwork-cropped-destaque-752x440.jpg'}}
            style={{ width: 100, height: 100, backgroundColor: "#aaa" }}
            resizeMode="center"
          />
        </Quadrado>
      </Header>
    </Pagina>
  );
}

export default App;
