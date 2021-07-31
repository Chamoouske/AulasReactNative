import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text> Home2 </Text>
      <Button
        title="Ir para o perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}
