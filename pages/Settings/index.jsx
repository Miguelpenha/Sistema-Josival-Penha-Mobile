import React, { useEffect, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { dark as darkTheme, light as lightTheme } from '../../theme'
import { ContainerTheme, TextTheme, SwitchTheme } from './style'

export default function Settings({ navigation, theme, setTheme }) {
    const [dark, setDark] = useState(theme==='light' ? false : true)
    
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
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.navigate('Turmas', {success: false})}/>
            <ContainerTheme style={{}}>
                <TextTheme>Tema</TextTheme>
                <SwitchTheme trackColor={{false: darkTheme.secondary, true: lightTheme.secondary}} thumbColor={dark ? darkTheme.secondary : lightTheme.secondary} value={dark} onChange={() => dark ? setDark(false) : setDark(true)}/>
            </ContainerTheme>
        </ContainerPd>
    )
}