import React, { useEffect, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Switch } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
            <Switch trackColor={{false: '#000000', true: '#ffffff'}} thumbColor={dark ? '#ffffff' : '#000000'} value={dark} onChange={() => dark ? setDark(false) : setDark(true)}/>
        </ContainerPd>
    )
}