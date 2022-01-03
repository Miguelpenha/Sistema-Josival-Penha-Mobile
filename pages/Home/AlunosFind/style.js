import styled from 'styled-components/native'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import LogoJP from '../../../components/LogoJP'

export const Header = styled.View`
    margin-top: 10%;
`

export const ContainerSettings = styled.TouchableOpacity`
    position: absolute;
    margin: 1.5%;
    top: 0;
    margin-top: 2%;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Logo = styled(LogoJP)`
    width: 75%;
    height: auto;
    aspect-ratio: 2.6186961870;
    margin-left: auto;
    margin-right: auto;
`

export const Find = styled.TextInput`
    width: 80%;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.color};
    align-self: center;
    border-radius: 12px;
    padding: 15px;
    font-size: 20px;
`