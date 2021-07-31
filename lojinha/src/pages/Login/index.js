import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Login({ navigation }) {
  const estilo = {
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#000',
    },
    input: {
      width: '90%',
      height: 50,
      fontSize: 18,
      backgroundColor: '#eee',
      marginTop: 10,
      borderRadius: 10,
      borderWidth: 5,
      borderColor: 'purple',
      padding: 10,
    },
    texto: {
      fontSize: 20,
      color: '#fff',
    },
    textoRes: {
      borderBottomColor: '#fff',
      fontSize: 20,
      color: '#fff',
    },
    title: {
      fontSize: 25,
      color: '#fff',
    },
    botao: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      backgroundColor: '#41AEF4',
      borderRadius: 5,
      padding: 5,
    },
  };
  // criação das states
  // state do nome do usuario
  const [nome, setNome] = useState('');
  // state de msg de login
  const [msg, setMsg] = useState('');
  // state pra mudar styles variados
  const [model, setModel] = useState({ style: { borderColor: '#FFB6B6' } });
  const [nomeErro, setNomeErro] = useState({});
  let nCor;
  const MudaBorda = function borda() {
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

  function logar(navigation) {
    if (nome) {
      navigation.navigate('Home', { nome, estilo: tema.estilo });
    } else {
      setMsg('Insira um nome válido!');
      setNomeErro({ style: { backgroundColor: '#FF6347' } });
    }
  }

  // state para mudar o tema
  const [tema, setTema] = useState({
    estilo,
    nome: 'Escuro',
    url: {
      uri: 'https://image.flaticon.com/icons/png/512/1434/1434012.png',
    },
  });

  function mudarTema() {
    if (tema.nome === 'Escuro') {
      setTema({
        estilo: {
          ...estilo,
          container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#fff',
          },
          texto: { fontSize: 20, color: '#000' },
          textoRes: { borderBottomColor: '#000', fontSize: 20, color: '#000' },
          title: { fontSize: 25, color: '#000' },
        },
        url: {
          uri:
            'https://images.vexels.com/media/users/3/145134/isolated/preview/46b65a02ff99e7bb4e84d4d3d627a729-iacute-cone-de-raios-n-iacute-tidos-do-sol-by-vexels.png',
        },
        nome: 'Claro',
      });
    } else {
      setTema({
        estilo: {
          ...estilo,
          container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#000',
          },
          texto: { fontSize: 20, color: '#fff' },
          textoRes: { borderBottomColor: '#fff', fontSize: 20, color: '#fff' },
          title: { fontSize: 25, color: '#fff' },
        },
        url: {
          uri: 'https://image.flaticon.com/icons/png/512/1434/1434012.png',
        },
        nome: 'Escuro',
      });
    }
  }

  return (
    <View style={[estilo.container, tema.estilo.container]}>
      {msg!='' && (<Text style={[estilo.title, tema.estilo.title]}>{msg}</Text>)}
      <TextInput
        style={[estilo.input, model.style, nomeErro.style]}
        placeholder="Nome de Cliente"
        placeholderTextColor="#000"
        value={nome}
        onChangeText={(nome) => {
          setNome(nome);
          setNomeErro({ style: { backgroundColor: '#eee' } });
          setMsg('');
        }}
      />
      <TouchableOpacity style={estilo.botao} onPress={() => logar(navigation)}>
        <Text style={estilo.texto}>ENTRAR</Text>
      </TouchableOpacity>

      <View style={{ bottom: 5, right: 5, position: 'absolute' }}>
        <TouchableOpacity
          style={[
            estilo.botao,
            { right: 5, marginBottom: 0, flexDirection: 'row' },
          ]}
          onPress={mudarTema}
        >
          <Text style={estilo.texto}>Tema: </Text>
          <Image
            source={tema.url}
            style={{ width: 30, height: 30 }}
            resizeMode="center"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
