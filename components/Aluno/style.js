import styled from 'styled-components'
import { TouchableOpacity, Text, Image } from 'react-native'

export const Container = styled(TouchableOpacity)`
    background-color: #ffffff;
    padding: 5%;
    border-radius: 12px;
    margin-top: 7%;
    width: 80%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
`

export const Texto = styled(Text)`
    text-align: center;
    font-size: 22px;
    margin-top: 5%;
    width: 85%;
    padding-right: 10%;
`

export const Img = styled(Image)`
    width: 60px;
    height: 60px;
    border-radius: 50px;
`