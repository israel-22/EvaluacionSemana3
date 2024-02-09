import React, { useState } from 'react';
import { Text, View,TextInput, StyleSheet, Image } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../components/ButtonComponent';


  export const Pantalla5 = () => {
    const navigation = useNavigation();
    const [numero1, setNumero1] = useState<string>('');
    const [numero2, setNumero2] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);
  
    const menorQue = (numero1: number, numero2: number): number|  null => {
      if (numero1 < numero2) {
        return numero1;
      } else if (numero2 < numero1) {
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
        const resultadoMenor = menorQue(parseFloat(numero1), parseFloat(numero2));
        setResultado(resultadoMenor);
      }
    };
    return (
      <View>
          <View>
    
      <Text>Gracias por Revisar mi Tarea</Text>
        <Image style={styles.imagen} source={require('../img/abuelo.jpg')} />
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
        {resultado !== null && <Text>El múnero menor es: {resultado}</Text>}
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



  export default Pantalla5;
