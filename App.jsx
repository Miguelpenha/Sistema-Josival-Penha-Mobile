import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme'
import { NavigationContainer } from '@react-navigation/native'
import Turmas from './pages/Turmas'
import Alunos from './pages/Alunos'
import Camera from './pages/Camera'
import Foto from './pages/Foto'
import Settings from './pages/Settings'
import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator()

export default function App() {
  const [pronto, setPronto] = useState(false)
  const [theme, setTheme] = useState(Appearance.getColorScheme())
  

  async function themeVeri() {
    try {
      if (await AsyncStorage.getItem('theme') === null) {
        if (Appearance.getColorScheme() === 'light') {
          await AsyncStorage.setItem('theme', 'light')
          setTheme('light')
        } else {
          await AsyncStorage.setItem('theme', 'dark')
          setTheme('dark')
        }
      } else {
        setTheme(await AsyncStorage.getItem('theme'))
      }
    } catch {

    }
  }

  useEffect(() => {
    themeVeri().then()
  }, [theme])
  
  if (!pronto) {
    return <AppLoading startAsync={themeVeri} onFinish={() => setPronto(true)} onError={(err) => console.log(err)}/>
  } else {
    return (
      <ThemeProvider theme={theme === 'dark' ? dark : light} style={{color: '#2fcc8d'}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }} initialRouteName="Turmas">
            <Stack.Screen name="Turmas" component={Turmas} initialParams={{
              success: false
            }}/>
            <Stack.Screen name="Settings">
              {props => <Settings {...props} theme={theme} setTheme={theme => setTheme(theme)}/>}
            </Stack.Screen>
            <Stack.Screen name="Alunos" component={Alunos}/>
            <Stack.Screen name="Camera" component={Camera}/>
            <Stack.Screen name="Foto" component={Foto}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    )
  }
}