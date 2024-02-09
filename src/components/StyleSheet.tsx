import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2BABB',
    marginVertical: 80,
    marginHorizontal: 20,
   
  },
  button: {
    marginVertical: 10, // Agrega un margen vertical de 10 entre los botones
  },
  imagen: {
    height: '50%',
    width: '50%',
  },
  hellow: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  txtDes: {
    fontSize: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 20,
    paddingTop:10, // Espacio entre el texto y el primer botón
  },

  
 
});

export default StyleSheet;