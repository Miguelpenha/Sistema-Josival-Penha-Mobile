import styled from 'styled-components'
import { TouchableOpacity, Text } from 'react-native'

export const Container = styled(TouchableOpacity)`
    background-color: #ffffff;
    padding: 4%;
    border-radius: 12px;
    margin-top: 7%;
    width: 50%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`

export const Texto = styled(Text)`
    text-align: center;
    font-size: 18px;
`