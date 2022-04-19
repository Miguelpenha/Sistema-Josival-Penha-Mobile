import React, { FC, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { dark as darkTheme, light as lightTheme } from '../../theme'
import { ScrollView } from 'react-native'
import { ContainerSwitch, TextSwitch, Switch, Button, IconButton, TextButton, Version } from './style'
import Constants from 'expo-constants'
import updateApp from '../../utils/updateApp'

type IsetTheme = {
    (theme: Iprops['theme']): void
}

type IsetModeView = {
    (view: boolean): void
}

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'Settings'>['navigation']
    theme: 'light' | 'dark' | null | undefined
    modeView: boolean
    setTheme: IsetTheme
    setModeView: IsetModeView
}

const Settings: FC<Iprops> = ({ navigation, theme, modeView, setTheme, setModeView }) => {
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
            <ScrollView>
                <ContainerSwitch>
                    <TextSwitch>Tema escuro</TextSwitch>
                    <Switch trackColor={{false: darkTheme.secondary, true: lightTheme.secondary}} thumbColor={dark ? darkTheme.secondary : lightTheme.secondary} value={dark} onChange={() => dark ? setDark(false) : setDark(true)}/>
                </ContainerSwitch>
                <ContainerSwitch>
                    <TextSwitch>Buscar alunos</TextSwitch>
                    <Switch trackColor={{false: darkTheme.secondary, true: lightTheme.secondary}} thumbColor={dark ? darkTheme.secondary : lightTheme.secondary} value={modeViewAlunosFind} onChange={() => modeViewAlunosFind ? setModeViewAlunosFind(false) : setModeViewAlunosFind(true)}/>
                </ContainerSwitch>
                <Button onPress={() => updateApp().then()}>
                    <IconButton name="sync" size={32}/>
                    <TextButton>Verificar atualizações</TextButton>
                </Button>
            </ScrollView>
            <Version>Versão {Constants.manifest.version}</Version>
        </ContainerPd>
    )
}

export default Settings