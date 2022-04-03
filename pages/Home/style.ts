import styled from 'styled-components/native'
import LogoJP from '../../components/LogoJP'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Header = styled.View`
    width: 100%;
    margin-top: 10%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

export const Logo = styled(LogoJP)`
    width: 70%;
    height: auto;
    margin-right: 14%;
    aspect-ratio: 2.6186961870;
`

export const ContainerSettings = styled.TouchableOpacity`
    margin: 1.5%;
    margin-left: 2%;
    margin-right: auto;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Title = styled.Text`
    width: 100%;
    margin-top: 10%;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10%;
    text-align: center;
    align-self: center;
    color: ${props => props.theme.primary};
`

export const Button = styled.TouchableOpacity`
    width: 80%;
    padding: 7%;
    display: flex;
    margin-bottom: 8%;
    align-self: center;
    align-items: center;
    border-radius: 18.93px;
    justify-content: center;
    background-color: ${props => props.theme.primary};
`

export const TextButton = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.color};
`