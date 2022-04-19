import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const ContainerSwitch = styled.View`
    margin-top: 2%;
    flex-direction: row;
    justify-content: center;
`

export const TextSwitch = styled.Text`
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const Switch = styled.Switch`
    margin-left: 2%;
`

interface IButton {
    loading?: boolean
}

export const Button = styled.TouchableOpacity<IButton>`
    padding: 3.5%;
    margin-top: 5%;
    align-self: center;
    align-items: center;
    flex-direction: row;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.loading ? '#c7dffe' : props.theme.primary};
`

export const IconButton = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`

interface IIconUpdateButton {
    checkUpdating: boolean
}

export const IconUpdateButton = styled(IconButton)<IIconUpdateButton>`
    ${props => props.checkUpdating ? css`
        transform: rotate(90deg);
    ` : css`
        transform: rotate(0deg);
    `};
`

export const TextButton = styled.Text`
    margin-left: 1%;
    font-weight: bold;
    padding-right: 1%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const Version = styled.Text`
    margin-top: auto;
    align-self: center;
    margin-bottom: 8%;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`