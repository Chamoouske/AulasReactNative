import React from "react";
import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={estilo.pagina}>
      <Text style={estilo.texto}>aiai</Text>
      <Text style={estilo.texto}>Segundo</Text>
      <Text style={[estilo.texto, { fontSize: 10 }]}>Terceiro</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  pagina: {
    width: 200,
    height: 200,
    backgroundColor: "#FF0000",
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 25,
  },
});

export default App;
