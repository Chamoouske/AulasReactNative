import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function Produto({ route, navigation }) {
  const estilo = { ...route.params.estilo };
  const url = route.params.url;
  const user = route.params.user;
  const desc = route.params.desc;
  const preco = route.params.preco;
  const pagamento = route.params.pagamento;
  const produto = route.params.produto;
  // state pra mudar styles variados
  const [model, setModel] = useState({ style: { borderColor: '#FFB6B6' } });
  let nCor;

  const MudaBorda = function () {
    let cor = [
      '#FFB6B6',
      '#FFCEB6',
      '#FFDDB6',
      '#FFEFB6',
      '#FCFFB6',
      '#EDFFB6',
      '#DDFFB6',
      '#D0FFB6',
      '#BEFFB6',
      '#B6FFC3',
      '#B6FFD8',
      '#B6FFE8',
      '#B6FFFA',
      '#B6EFFF',
      '#B6DDFF',
      '#B6CBFF',
      '#B6B6FF',
      '#DAB6FF',
      '#EDB6FF',
      '#FFB6FA',
    ];
    // gera um numero aleatório entre o tamnha do vetor cor e 0
    nCor = Math.floor(Math.random() * cor.length);
    // coloca a borda na variável model
    setModel({ style: { borderColor: cor[nCor] } });
  };
  setTimeout(MudaBorda, 2000);

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Cliente: {user}</Text>
      <View
        style={[
          estilo.box,
          {
            borderRadius: 10,
            borderWidth: 5,
            padding: 5,
          },
          model.style,
        ]}
      >
        <Image
          style={[
            estilo.imagem,
            {
              width: 300,
              height: 300,
            },
          ]}
          source={{ uri: url.uri }}
          resizeMode="center"
        />
      </View>

      <View
        style={[
          model.style,
          {
            borderRadius: 10,
            borderWidth: 5,
            width: 'auto',
            height: 'auto',
            alignItems: 'center',
            padding: 5,
          },
        ]}
      >
        <Text
          style={[
            {
              textAlign: 'center',
              margin: 5,
              borderBottomWidth: 2,
              borderBottomColor: '#000',
            },
            estilo.textoRes,
          ]}
        >
          Produto: Gift Card - {produto}
        </Text>

        <Text
          style={[
            {
              textAlign: 'center',
              borderBottomWidth: 2,
              borderBottomColor: '#000',
            },
            estilo.textoRes,
          ]}
        >
          Descrição: {desc}
        </Text>

        <Text
          style={[
            {
              textAlign: 'center',
              borderBottomWidth: 2,
              borderBottomColor: '#000',
            },
            estilo.textoRes,
          ]}
        >
          Preço: R${preco}
        </Text>
        <Text style={estilo.texto}>Forma de Pagamento: {pagamento}</Text>
      </View>

      <View style={{ bottom: '1%', right: 5, position: 'absolute' }}>
        <TouchableOpacity
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              backgroundColor: '#41AEF4',
              borderRadius: 5,
              padding: 5,
              marginRight: 5,
            },
          ]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[estilo.texto, { color: '#fff' }]}>Encerrar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
