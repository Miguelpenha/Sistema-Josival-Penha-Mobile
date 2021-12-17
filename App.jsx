import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native'
import Turmas from './pages/Turmas'
import Alunos from './pages/Alunos'
import Camera from './pages/Camera'
import Foto from './pages/Foto'

const Stack = createNativeStackNavigator()

export default function App() {
  const Navigator = Stack.Navigator
  
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="Turmas">
        <Stack.Screen name="Turmas" component={Turmas} initialParams={{
          success: false
        }}/>
        <Stack.Screen name="Alunos" component={Alunos}/>
        <Stack.Screen name="Camera" component={Camera}/>
        <Stack.Screen name="Foto" component={Foto}/>
      </Navigator>
    </NavigationContainer>
  )
}