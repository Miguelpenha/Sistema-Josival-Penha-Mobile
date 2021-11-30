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
      <Navigator initialRouteName="Turmas" screenOptions={{headerStyle: {
        backgroundColor: '#00AFEF'
      }, headerTitle: () => {
        return (
          <Image style={{width: 186.2875,
            height: 71.1375, marginBottom: '5%', marginLeft: '20%', marginTop: '5%'}} source={require('./assets/logo-josival-penha.png')}/>
        )
      }}}>
        <Stack.Screen name="Turmas" component={Turmas} initialParams={{
          success: false
        }}/>
        <Stack.Screen name="Alunos" component={Alunos} options={{
          headerTitle: () => {
            return (
              <Image style={{width: 186.2875,
                height: 71.1375, marginBottom: '5%', marginTop: '5%'}} source={require('./assets/logo-josival-penha.png')}/>
            )
          }
        }}/>
        <Stack.Screen name="Camera" component={Camera} options={{headerShown: false}}/>
        <Stack.Screen name="Foto" component={Foto} options={{headerTitle: () => {
            return (
              <></>
            )
          }}}/>
      </Navigator>
    </NavigationContainer>
  )
}