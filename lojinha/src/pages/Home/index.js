import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({ route, navigation }) {
  const user = route.params.nome;
  const estilo = {
    ...route.params.estilo,
    imagem: {
      width: 100,
      height: 100,
      margin: 5,
    },
    box: {
      flexDirection: 'row',
      margin: 5,
      padding: 3,
    },
    botao: {
      alignItems: 'center',
      backgroundColor: '#eee',
      margin: 3,
      borderWidth: 5,
      borderColor: '#000',
      borderRadius: 10,
    },
  };

  const playStore = 'Gift Card para compra de apps/filmes/livros na Playstore';

  const steam = 'Gift Card para compra de jogos/softwares na plataforma Steam';

  const lol = 'Gift Card para compra de Riot Points para o jogo League of Legends';

  // state pra mudar styles da borda
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
    nCor = Math.floor(Math.random() * cor.length);
    setModel({ style: { borderColor: cor[nCor] } });
  };
  setTimeout(MudaBorda, 2000);

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Cliente: {user}</Text>
      <View style={estilo.box}>
        <TouchableOpacity
          style={[estilo.botao, model.style]}
          onPress={() =>
            navigation.navigate('Produto', {
              estilo,
              user,
              desc: playStore,
              preco: 10,
              pagamento: 'Cartão/Boleto',
              produto: 'PlayStore',
              url: {
                uri:
                  'https://cdn.shopify.com/s/files/1/0788/5983/products/Copy_of_Google_Play_10_1024x1024.png',
              },
            })
          }
        >
          <Image
            style={estilo.imagem}
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/0788/5983/products/Copy_of_Google_Play_10_1024x1024.png',
            }}
            resizeMode="center"
          />
          <Text>PlayStore R$10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[estilo.botao, model.style]}
          onPress={() =>
            navigation.navigate('Produto', {
              estilo,
              user,
              desc: playStore,
              preco: 25,
              pagamento: 'Cartão/Boleto',
              produto: 'PlayStore',
              url: {
                uri:
                  'https://cdn.shopify.com/s/files/1/0788/5983/products/Google_Play_25_2_250x250.png',
              },
            })
          }
        >
          <Image
            style={estilo.imagem}
            source={{
              uri:
                'https://cdn.shopify.com/s/files/1/0788/5983/products/Google_Play_25_2_250x250.png',
            }}
            resizeMode="center"
          />
          <Text>PlayStore R$25</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[estilo.botao, model.style]}
          onPress={() =>
            navigation.navigate('Produto', {
              estilo,
              user,
              desc: playStore,
              preco: 30,
              pagamento: 'Cartão/Boleto',
              produto: 'PlayStore',
              url: {
                uri:
                  'https://http2.mlstatic.com/D_NQ_NP_777673-MLB42527977058_072020-O.jpg',
              },
            })
          }
        >
          <Image
            style={estilo.imagem}
            source={{
              uri:
                'https://http2.mlstatic.com/D_NQ_NP_777673-MLB42527977058_072020-O.jpg',
            }}
            resizeMode="center"
          />
          <Text>PlayStore R$30</Text>
        </TouchableOpacity>
      </View>

      <View style={estilo.box}>
        <TouchableOpacity
          style={[estilo.botao, model.style]}
          onPress={() =>
            navigation.navigate('Produto', {
              estilo,
              user,
              desc: steam,
              preco: 20,
              pagamento: 'Cartão',
              produto: 'Steam',
              url: {
                uri: 'https://www.zero3games.com.br/loja/assets/0300_l.jpg',
              },
            })
          }
        >
          <Image
            style={estilo.imagem}
            source={{
              uri: 'https://www.zero3games.com.br/loja/assets/0300_l.jpg',
            }}
            resizeMode="center"
          />
          <Text>Steam R$20</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[estilo.botao, model.style]}
          onPress={() =>
            navigation.navigate('Produto', {
              estilo,
              user,
              desc: steam,
              preco: 50,
              pagamento: 'Até 2x Cartão',
              produto: 'Steam',
              url: {
                uri:
                  'https://http2.mlstatic.com/D_NQ_NP_705590-MLB31864243798_082019-O.jpg',
              },
            })
          }
        >
          <Image
            style={estilo.imagem}
            source={{
              uri:
                'https://http2.mlstatic.com/D_NQ_NP_705590-MLB31864243798_082019-O.jpg',
            }}
            resizeMode="center"
          />
          <Text>Steam R$50</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[estilo.botao, model.style]}
          onPress={() =>
            navigation.navigate('Produto', {
              estilo,
              user,
              desc: steam,
              preco: 100,
              pagamento: 'Até 4x Cartão',
              produto: 'Steam',
              url: {
                uri:
                  'https://http2.mlstatic.com/D_NQ_NP_816669-MLB31209101533_062019-O.jpg',
              },
            })
          }
        >
          <Image
            style={estilo.imagem}
            source={{
              uri:
                'https://http2.mlstatic.com/D_NQ_NP_816669-MLB31209101533_062019-O.jpg',
            }}
            resizeMode="center"
          />
          <Text>Steam R$100</Text>
        </TouchableOpacity>
      </View>

      <View style={estilo.box}>
        <TouchableOpacity
          style={[estilo.botao, model.style]}
          onPress={() =>
            navigation.navigate('Produto', {
              estilo,
              user,
              desc: lol,
              preco: 50,
              pagamento: 'Boleto',
              produto: 'League of Legends',
              url: {
                uri:
                  'https://cdn.awsli.com.br/600x450/553/553043/produto/29887119/878ee6f092.jpg',
              },
            })
          }
        >
          <Image
            style={estilo.imagem}
            source={{
              uri:
                'https://cdn.awsli.com.br/600x450/553/553043/produto/29887119/878ee6f092.jpg',
            }}
            resizeMode="center"
          />
          <Text>LoL R$50</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[estilo.botao, model.style]}
          onPress={() =>
            navigation.navigate('Produto', {
              estilo,
              user,
              desc: lol,
              preco: 100,
              pagamento: 'Boleto',
              produto: 'League of Legends',
              url: {
                uri:
                  'https://cdn.awsli.com.br/600x450/754/754385/produto/51774496/0a61adcd2f.jpg',
              },
            })
          }
        >
          <Image
            style={estilo.imagem}
            source={{
              uri:
                'https://cdn.awsli.com.br/600x450/754/754385/produto/51774496/0a61adcd2f.jpg',
            }}
            resizeMode="center"
          />
          <Text>LoL R$100</Text>
        </TouchableOpacity>
      </View>

      <View style={{ bottom: 5, right: 5, position: 'absolute' }}>
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
