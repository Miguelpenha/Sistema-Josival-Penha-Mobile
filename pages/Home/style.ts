import styled from 'styled-components'
import { View, TouchableOpacity, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import LogoJP from '../../components/LogoJP'

export const Header = styled(View)`
    width: 100%;
    margin-top: 10%;
    flex-direction: column;
`

export const ContainerSettings = styled(TouchableOpacity)`
    margin: 1.5%;
    position: absolute;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Logo = styled(LogoJP)`
    width: 75%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    aspect-ratio: 2.6186961870;
`

export const Title = styled(Text)`
    width: 100%;
    margin-top: 10%;
    font-size: 28px;
    margin-bottom: 15%;
    font-weight: bold;
    text-align: center;
    align-self: center;
    color: ${props => props.theme.primary};
`

export const Button = styled(TouchableOpacity)`
    width: 70%;
    padding: 4%;
    display: flex;
    align-self: center;
    align-items: center;
    border-radius: 18.93px;
    justify-content: center;
    background-color: ${props => props.theme.primary};
    margin-bottom: 8%;
`

export const TextButton = styled(Text)`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.color};
`