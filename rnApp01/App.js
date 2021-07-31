import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color: #ddd;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1px;
`;

const Quadrado = styled.View`
  background-color: ${(props) => props.cor};
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
  border: 2px;
`;
const Pagina = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
`;

const Texto = styled.Text`
  font-size: 25px;
  color: #0000ff;
`;

function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado style={{marginTop:20, width: 42, height: 42 }}>
          <Image
            source={require("./src/imagens/Uni.jpg")}
            style={{ width: 40, height: 40 }}
            resizeMode="cover"
          />
        </Quadrado>
        <Header style={{ alignItems: "center", flexDirection: "column" }}>
          <Texto>Galeria de imagens do</Texto>
          <Texto>Ajax Lima</Texto>
          <Texto style={{ fontSize: "20px", color: "red" }}>Unicórnios</Texto>
        </Header>
      </Header>
      <Header>
        <Quadrado cor="green">
          <Image
            source={require("./src/imagens/Uni1.jpg")}
            style={{ width: 100, height: 100, backgroundColor: "#aaa" }}
            resizeMode="cover"
          />
        </Quadrado>
        <Quadrado cor="blue" style={{ marginLeft: "1px" }}>
          <Image
            source={require("./src/imagens/Rino1.jpg")}
            style={{ width: 100, height: 100, backgroundColor: "#aaa" }}
            resizeMode="center"
          />
        </Quadrado>
      </Header>
      <Header>
        <Quadrado cor="blue">
          <Image
            source={require("./src/imagens/Uni2.jpg")}
            style={{ width: 100, height: 100, backgroundColor: "#aaa" }}
            resizeMode="center"
          />
        </Quadrado>
        <Quadrado cor="green" style={{ marginLeft: "1px" }}>
          <Image
            source={require("./src/imagens/Rino2.jpg")}
            style={{ width: 100, height: 100, backgroundColor: "#aaa" }}
            resizeMode="center"
          />
        </Quadrado>
      </Header>
      <Header>
        <Quadrado cor="purple" style={{ width: 300 }}>
          <Image
            source={{
              uri:
                "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/caracterizado-com-um-chifre-ao-centro-cabeca-unicornio-um-ser-mitologico-semelhante-ao-cavalo-5aa6e88890471.jpg",
            }}
            style={{ width: 250, height: 100 }}
            resizeMode="center"
          />
        </Quadrado>
      </Header>
    </Pagina>
  );
}

export default App;
