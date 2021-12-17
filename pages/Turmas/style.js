import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'
import { Text, FlatList } from 'react-native'

export const Check = styled(Lottie)`
    width: 35%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
`

export const TextCheck = styled(Text)`
    color: ${props => props.theme.check};
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`

export const Title = styled(Text)`
    color: ${props => props.theme.primary};
    font-size: 25px;
    margin-top: 5%;
    font-weight: bold;
    width: 80%;
    text-align: center;
    align-self: center;
    margin-bottom: 5%;
`

export const Turmas = styled(FlatList)`
    width: 100%;
`