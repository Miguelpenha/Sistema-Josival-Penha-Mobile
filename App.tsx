import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme'
import { NavigationContainer } from '@react-navigation/native'
import Home from './pages/Home'
import Turmas from './pages/Turmas'
import Alunos from './pages/Alunos'
import Camera from './pages/Camera'
import Foto from './pages/Foto'
import Settings from './pages/Settings'
import Pagamentos from './pages/Pagamentos'
import AppLoading from 'expo-app-loading'
import 'react-native-gesture-handler'

export default function App() {
  const [pronto, setPronto] = useState(false)
  const [theme, setTheme] = useState(Appearance.getColorScheme())
  const [modeViewAlunosFind, setModeViewAlunosFind] = useState(false)

  const { Navigator, Screen } = createStackNavigator()
  
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

  async function modeViewAlunosFindVeri() {
    try {
      if (await AsyncStorage.getItem('modeViewAlunosFind') === null) {
        await AsyncStorage.setItem('modeViewAlunosFind', modeViewAlunosFind ? 'true' : 'false')
      } else {
        setModeViewAlunosFind((await AsyncStorage.getItem('modeViewAlunosFind')) === 'true' ? true : false)
      }
    } catch {

    }
  }

  function veriGeral() {
    themeVeri().then()
    modeViewAlunosFindVeri().then()
  }

  useEffect(() => {
    themeVeri().then()
  }, [theme])

  useEffect(() => {
    modeViewAlunosFindVeri().then()
  }, [modeViewAlunosFind])
  
  if (!pronto) {
    return <AppLoading startAsync={veriGeral} onFinish={() => setPronto(true)} onError={(err) => console.log(err)}/>
  } else {
    return (
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <NavigationContainer theme={theme === 'dark' ? {
          colors: {
            background: dark.backgroundColor,
            border: dark.color,
            card: dark.primary,
            notification: dark.secondary,
            primary: dark.primary,
            text: dark.color
          },
          dark: true
        } : {
          colors: {
            background: light.backgroundColor,
            border: light.color,
            card: light.primary,
            notification: light.secondary,
            primary: light.primary,
            text: light.color
          },
          dark: false
        }}>
          <Navigator screenOptions={{
            headerShown: false
          }} initialRouteName="Home">
            <Screen name="Home" component={Home}/>
            <Screen name="Turmas" initialParams={{
              success: false
            }}>
              {props => <Turmas {...props} modeViewFind={modeViewAlunosFind}/>}
            </Screen>
            <Screen name="Settings">
              {props => <Settings {...props} theme={theme} modeView={modeViewAlunosFind} setTheme={theme => setTheme(theme)} setModeView={view => setModeViewAlunosFind(view)}/>}
            </Screen>
            <Screen name="Alunos" component={Alunos}/>
            <Screen name="Camera" component={Camera}/>
            <Screen name="Foto" component={Foto}/>
            <Screen name="Pagamentos" component={Pagamentos}/>
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    )
  }
}