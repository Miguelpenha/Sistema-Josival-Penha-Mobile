import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from './types'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import Home from './pages/Home'
import Turmas from './pages/Turmas'
import Alunos from './pages/Alunos'
import Camera from './pages/Camera'
import Foto from './pages/Foto'
import Settings from './pages/Settings'
import Pagamentos from './pages/Pagamentos'
import AddPagamento from './pages/AddPagamento'
import Financeiro from './pages/Financeiro'
import SelectMonth from './pages/SelectMonth'
import AppLoading from 'expo-app-loading'
import updateApp from './utils/updateApp'

function App() {
  const [pronto, setPronto] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | null | undefined>(Appearance.getColorScheme())
  const [modeViewAlunosFind, setModeViewAlunosFind] = useState(true)
  const { Navigator, Screen } = createStackNavigator<Inavigation>()
  
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
        if (await AsyncStorage.getItem('theme') === 'light') {
          setTheme('light')
        } else {
          setTheme('dark')
        }
      }
    } catch {

    }
  }
  
  async function modeViewAlunosFindVeri() {
    try {
      if (await AsyncStorage.getItem('modeViewAlunosFind') === null) {
        await AsyncStorage.setItem('modeViewAlunosFind', modeViewAlunosFind ? 'true' : 'false')
      } else {
        setModeViewAlunosFind((await AsyncStorage.getItem('modeViewAlunosFind')) === 'false' ? false : true)
      }
    } catch {

    }
  }

  async function veriGeral() {
    await themeVeri()
    await modeViewAlunosFindVeri()
    await updateApp()
    
    setPronto(true)
  }

  useEffect(() => {
    themeVeri().then()
  }, [theme])

  useEffect(() => {
    modeViewAlunosFindVeri().then()
  }, [modeViewAlunosFind])

  useEffect(() => {
    veriGeral().then()
  }, [])
  
  if (!pronto) {
    return <AppLoading/>
  } else {
    return (
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <StatusBar
          animated={true}
          style={theme === 'dark' ? 'light' : 'dark'}
        />
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
            <Screen name="Home">
              {props => <Home {...props} veriGeral={veriGeral} find={modeViewAlunosFind}/>}
            </Screen>
            <Screen name="Turmas" initialParams={{ success: false }} component={Turmas}/>
            <Screen name="Settings">
              {props => <Settings
                {...props}
                theme={theme}
                modeView={modeViewAlunosFind}
                setTheme={theme => setTheme(theme)}
                setModeView={view => setModeViewAlunosFind(view)}
              />}
            </Screen>
            <Screen name="Alunos" component={Alunos}/>
            <Screen name="Camera" component={Camera}/>
            <Screen name="Foto" component={Foto}/>
            <Screen name="Pagamentos" component={Pagamentos}/>
            <Screen name="AddPagamento" component={AddPagamento}/>
            <Screen name="Financeiro" component={Financeiro}/>
            <Screen name="SelectMonth" component={SelectMonth}/>
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    )
  }
}

export default App