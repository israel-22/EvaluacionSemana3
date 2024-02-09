import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';
// import { styles } from  from '../components/StyleSheet';
 // Importa los estilos desde el archivo styles.ts


export const Pantalla1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Bienvenidos</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            title='Imagen 1'
            onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla2' }))}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            title='Imagen 2'
            onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla3' }))}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            title='>='
            onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla4' }))}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonComponent
            title='<='
            onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla5' }))}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2BABB',
    marginVertical: 80,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginVertical: 10,
    width: '70%',
  },
});
