import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1 } from '../screens/Pantalla1';
import { pantalla2 } from '../screens/pantalla2';
import { pantalla3 } from '../screens/Pantalla3';
import { Pantalla4 } from '../screens/Pantalla4';
import { Pantalla5 } from '../screens/Pantalla5';
import { PRIMARY_COLOR } from '../commos/ConstantColor';


export type RootStackParamList = {
  Pantalla1: undefined,
  Pantalla2: undefined,
  Pantalla3: undefined,
  Pantalla4: undefined,
  Pantalla5: undefined,

}
const Stack = createStackNavigator<RootStackParamList >();
export const StackNavigator=()=>{
  return (
    <Stack.Navigator 
    screenOptions={{
headerStyle:{
 elevation:0
},
cardStyle:{
  backgroundColor:'white'
}

    }}>
     <Stack.Screen name="Pantalla1" component={Pantalla1} /> 
     <Stack.Screen name="Pantalla2" component={pantalla2} /> 
     <Stack.Screen name="Pantalla3" component={pantalla3} /> 
     <Stack.Screen name="Pantalla4" component={Pantalla4} /> 
     <Stack.Screen name="Pantalla5" component={Pantalla5} /> 

    </Stack.Navigator>
  );



}
 


  
  
