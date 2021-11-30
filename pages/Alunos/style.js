import styled from 'styled-components/native'
import { Text, FlatList } from 'react-native'

export const Title = styled(Text)`
    color: #ffffff;
    font-size: 25px;
    margin-top: 10%;
    font-weight: bold;
    width: 80%;
    text-align: center;
    align-self: center;
    margin-bottom: 2%;
    margin-top: 15%;
`

export const Alunos = styled(FlatList)`
    width: 100%;
    margin-bottom: 5%;
`