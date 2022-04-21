import styled from 'styled-components/native'
import LogoJP from '../../components/LogoJP'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Header = styled.View`
    margin-top: 10%;
    align-items: center;
    flex-direction: row;
`

export const Logo = styled(LogoJP)`
    width: 70%;
    margin-right: 14%;
    aspect-ratio: 2.6186961870;
`

export const ContainerSettings = styled.TouchableOpacity`
    margin-left: 2%;
    margin-right: auto;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const NameUser = styled.Text`
    margin-top: 5%;
    margin-left: 10%;
    font-weight: bold;
    font-size: ${RFPercentage(4.4)}px;
    color: ${props => props.theme.primary};
`

export const Message = styled.Text`
    margin-top: 0.5%;
    margin-left: 10%;
    margin-bottom: 10%;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Options = styled.FlatList`
    flex-grow: 0;
`