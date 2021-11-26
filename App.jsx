import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SWRConfig } from 'swr'
import { AppState } from 'react-native'
import Home from './pages/Home'
import Alunos from './pages/Alunos'
import Camera from './pages/Camera'
import { Container, Logo } from './style'

export default function App() {
  const [fullScreen, setFullScreen] = useState(false)
  const [turma, setTurma] = useState(false)
  const [aluno, setAluno] = useState(false)
  
  return (
    <SWRConfig value={{
      provider: () => new Map(),
      isVisible: () => { return true },
      initFocus(callback) {
        let appState = AppState.currentState
        
        const onAppStateChange = nextAppState => {
          if (appState.match(/inactive|background/) && nextAppState === 'active') {
            callback()
          }
          appState = nextAppState
        }
        const subscription = AppState.addEventListener('change', onAppStateChange)
        
        return () => {
          subscription.remove()
        }
      }
    }}>
      {!fullScreen ? <Container>
        <StatusBar style="auto"/>
        <Logo source={require('./assets/logo-josival-penha.png')}/>
        {!turma ? <Home onSelectTurma={turma => setTurma(turma)}/> : <Alunos turma={turma} onSelectAluno={aluno => setAluno(aluno)}/>}
      </Container> : !turma ? <Home onSelectTurma={turma => setTurma(turma)}/> : !aluno && <Alunos turma={turma} onSelectAluno={aluno => setAluno(aluno)}/>}
      {aluno && <Camera onFullScreen={fullScreen => setFullScreen(fullScreen)} aluno={aluno}/>}
      
    </SWRConfig>
  )
}