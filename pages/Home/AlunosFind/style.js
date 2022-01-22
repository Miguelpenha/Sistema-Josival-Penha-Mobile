import styled from 'styled-components/native'
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
    margin-left: auto;
    margin-right: auto;
    aspect-ratio: 2.6186961870;
`

export const Find = styled.TextInput`
    width: 80%;
    padding: 15px;
    font-size: 20px;
    margin-bottom: 5%;
    align-self: center;
    border-radius: 12px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondary};
`

export const ContainerAlertNotFound = styled.View`
    width: 90%;
    padding: 5%;
    align-self: center;
    border-radius: 20px;
    background-color: ${props => props.theme.primary};
`

export const AlertNotFound = styled.Text`
    font-size: 25px;
    font-weight: 700;
    color: ${props => props.theme.color};
`