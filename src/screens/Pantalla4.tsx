import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Image } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../components/ButtonComponent';
// import { styles } from '../components/StyleSheet';


  export const Pantalla4 = () => {
    const navigation = useNavigation();
    const [numero1, setNumero1] = useState<string>('');
    const [numero2, setNumero2] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);
  
    const mayorQue = (numero1: number, numero2: number): number|  null => {
      if (numero1 > numero2) {
        return numero1;
      } else if (numero2 > numero1) {
        return numero2;
      } else {
        return null; 
        
      }
    };
    const limpiarCampos = () => {
      setNumero1('');
      setNumero2('');
    };
  
  
    const handleCalcular = () => {
      if (numero1 !== '' && numero2 !== '') {
        const resultadoMayor = mayorQue(parseFloat(numero1), parseFloat(numero2));
        setResultado(resultadoMayor);
      }
    };
    return (
      <View>
        <View>
      
      <Text>Mayor Que menor Que</Text>
        <Image style={styles.imagen} source={require('../img/pensar.jpg')} />
      </View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
          onChangeText={(text) => setNumero1(text)}
          value={numero1}
          keyboardType="numeric"
          placeholder="Ingrese el primer número"
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
          onChangeText={(text) => setNumero2(text)}
          value={numero2}
          keyboardType="numeric"
          placeholder="Ingrese el segundo número"
        />
        <View style={styles.buttonWrapper}>
           <ButtonComponent title="Calcular los Numeros" onPress={handleCalcular} />
        {resultado !== null && <Text>El múnero mayor es: {resultado}</Text>}
        </View>
        <View style={styles.buttonWrapper}> 
        <ButtonComponent title="Limpiar campos" onPress={limpiarCampos} />
        </View>
        <View style={styles.buttonWrapper}>    
          <ButtonComponent title='Pantalla1' onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla1' }))} />
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
  imagen: {
    height: 200, 
    width: 250,
    left:40,
  },
});



  export default Pantalla4;
