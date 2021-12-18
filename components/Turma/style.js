import styled from 'styled-components'
import { TouchableOpacity, Text as TextRN } from 'react-native'

export const Container = styled(TouchableOpacity)`
    width: 60%;
    padding: 5%;
    elevation: 8;
    display: flex;
    margin-top: 5%;
    margin-left: auto;
    margin-bottom: 5%;
    margin-right: auto;
    border-radius: 15px;
    background-color: ${props => props.theme.primary};
`

export const Text = styled(TextRN)`
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.color};
`