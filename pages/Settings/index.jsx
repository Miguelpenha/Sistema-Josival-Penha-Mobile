import React, { useEffect, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { dark as darkTheme, light as lightTheme } from '../../theme'
import { ContainerSwitch, TextSwitch, Switch } from './style'

export default function Settings({ navigation, theme, modeView, setTheme, setModeView }) {
    const [dark, setDark] = useState(theme==='light' ? false : true)
    const [modeViewAlunosFind, setModeViewAlunosFind] = useState(modeView)

    useEffect(() => {
        async function veri() {
            if (dark && theme === 'light') {
                await AsyncStorage.setItem('theme', 'dark')
                setTheme('dark')
            } else if (!dark && theme === 'dark') {
                await AsyncStorage.setItem('theme', 'light')
                setTheme('light')
            }
        }

        veri().then()
    }, [dark])

    useEffect(() => {   
        async function veri() {
            if (modeViewAlunosFind) {
                await AsyncStorage.setItem('modeViewAlunosFind', 'true')
                setModeView(true)
            } else if (!modeViewAlunosFind) {
                await AsyncStorage.setItem('modeViewAlunosFind', 'false')
                setModeView(false)
            }
        }

        veri().then()
    }, [modeViewAlunosFind])
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()}/>
            <ContainerSwitch>
                <TextSwitch>Tema escuro</TextSwitch>
                <Switch trackColor={{false: darkTheme.secondary, true: lightTheme.secondary}} thumbColor={dark ? darkTheme.secondary : lightTheme.secondary} value={dark} onChange={() => dark ? setDark(false) : setDark(true)}/>
            </ContainerSwitch>
            <ContainerSwitch>
                <TextSwitch>Buscar alunos</TextSwitch>
                <Switch trackColor={{false: darkTheme.secondary, true: lightTheme.secondary}} thumbColor={dark ? darkTheme.secondary : lightTheme.secondary} value={modeViewAlunosFind} onChange={() => modeViewAlunosFind ? setModeViewAlunosFind(false) : setModeViewAlunosFind(true)}/>
            </ContainerSwitch>
        </ContainerPd>
    )
}