import React from 'react'
import { StatusBar } from 'react-native'
import { Provider, Appbar } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Description,
} from './src/screens'

import InformationsScreen from './src/screens/InformationsScreen'
import FinalScreen from './src/screens/FinalScreen'
const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider theme={theme}>

      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          headerMode="none"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Description" component={Description} />
          <Stack.Screen name="InfoUser" component={InformationsScreen} />
          <Stack.Screen name="Final" component={FinalScreen} />
          {/* <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


export default App
