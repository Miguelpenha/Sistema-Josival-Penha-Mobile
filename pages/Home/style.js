import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import LogoJP from '../../components/LogoJP'

export const Check = styled(Lottie)`
    width: 35%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
`

export const TextCheck = styled(Text)`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.check};
`

export const Header = styled(View)`
    margin-top: 10%;
    align-items: center;
    flex-direction: column;
`

export const ContainerSettings = styled(TouchableOpacity)`
    position: absolute;
    margin: 1.5%;
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

export const Title = styled(Text)`
    width: 80%;
    margin-top: 5%;
    font-size: 25px;
    margin-bottom: 5%;
    font-weight: bold;
    text-align: center;
    align-self: center;
    color: ${props => props.theme.primary};
`