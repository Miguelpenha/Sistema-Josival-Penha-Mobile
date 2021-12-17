import styled from 'styled-components'
import { TouchableOpacity, Text } from 'react-native'

export const Container = styled(TouchableOpacity)`
    background-color: ${props => props.theme.primary};
    padding: 5%;
    border-radius: 15px;
    margin-top: 5%;
    width: 60%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    elevation: 8;
    margin-bottom: 5%;
`

export const Texto = styled(Text)`
    text-align: center;
    font-size: 23px;
    color: ${props => props.theme.color};
    font-weight: bold;
`