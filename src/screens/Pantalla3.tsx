import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const pantalla3 = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View>
      <Text>Imagen 2</Text>
      <Text>MI ESTADO EMOCIONAL AL VER QUE LAS PANTALLAS FUNCIONAN</Text>
        <Image style={styles.imagen} source={require('../img/Elmo.jpg')} />
      </View>
      <ButtonComponent title='Pantalla1' onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla1' }))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 0.5,
    backgroundColor: '#B2BABB',
    marginVertical: 80,
    marginHorizontal: 20,
    alignItems: 'center', 
    textAlign:'center'
  },
  imagen: {
    height: 200, 
    width: 250,
    left:40,
  },
});

export default pantalla3;
