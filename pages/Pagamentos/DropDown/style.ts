import styled, { css } from 'styled-components'
import { View, TouchableOpacity, Text } from 'react-native'

interface IContainerItemListDropDown {
    pri: boolean
    ult: boolean
}

export const Container = styled(View)`
    width: 80%;
    align-self: center;
    margin-top: 5%;
`

export const ContainerDropDown = styled(TouchableOpacity)`
    padding: 5%;
    display: flex;
    border-radius: 15px;
    background-color: ${props => props.theme.secondary};
`

export const TextDropDown = styled(Text)`
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.color};
`

export const ListDropDown = styled(View)`
    width: 100%;
    margin-top: 32%;
    z-index: 999;
    position: absolute;
`

export const ContainerItemListDropDown = styled(TouchableOpacity)<IContainerItemListDropDown>`
    padding: 2.8%;
    background-color: ${props => props.theme.primary};
    ${props => !props.ult && css`
        border-bottom-width: 2px;
        border-bottom-color: ${props => props.theme.color};
    `}
    ${props => props.pri && css`
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    `}
    ${props => props.ult && css`
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    `}
`

export const TextItemListDropDown = styled(Text)`
    font-size: 30px;
    color: ${props => props.theme.color};
`