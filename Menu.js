// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import PANTALLAB from './Pantallab';
import ID from './Id';
import ACCIONES from './Acciones';
import ALTAS from './Altas';
import BAJAS from './Bajas';
import MODIFICACIONES from './Modificaciones';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LOGIN} />
        <Stack.Screen name="Pantalla2" component={PANTALLAB} options={{headerShown: false}} />
        <Stack.Screen name="Id" component={ID} />
        <Stack.Screen name="Acciones" component={ACCIONES} />
        <Stack.Screen name="Altas" component={ALTAS} />
        <Stack.Screen name="Bajas" component={BAJAS} />
        <Stack.Screen name="Modificaciones" component={MODIFICACIONES} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;