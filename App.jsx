import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Container, Logo, Title } from './style'
import LoadingData from './components/loadingData'
import { get } from './api'
import { SWRConfig } from 'swr'
import { AppState } from 'react-native'

export default function App() {
  const { data: alunos } = get('/alunos')
  console.log(alunos)
  return (
    <SWRConfig value={{
      provider: () => new Map(),
      isVisible: () => { return true },
      initFocus(callback) {
        let appState = AppState.currentState
        
        const onAppStateChange = (nextAppState) => {
          /* If it's resuming from background or inactive mode to active one */
          if (appState.match(/inactive|background/) && nextAppState === 'active') {
            callback()
          }
          appState = nextAppState
        }
  
        // Subscribe to the app state change events
        const subscription = AppState.addEventListener('change', onAppStateChange)
        
        return () => {
          subscription.remove()
        }
      }
    }}>
      <Container>
        <StatusBar style="auto"/>
        <Logo source={require('./assets/logo-josival-penha.png')}/>
        <LoadingData loading={alunos}>
          <Title>Escolha um aluno para adicionar uma foto</Title>
        </LoadingData>
      </Container>
    </SWRConfig>
  )
}