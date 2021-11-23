import styled from 'styled-components/native'
import { View, Image, Text } from 'react-native'

export const Container = styled(View)`
    flex: 1;
    background-color: #00AFEF;
    align-items: center;
    padding-top: 16%;
`

export const Logo = styled(Image)`
    width: 266.125px;
    height: 101.625px;
`

export const Title = styled(Text)`
    color: #ffffff;
    font-size: 25px;
    margin-top: 10%;
    font-weight: bold;
    width: 80%;
    text-align: center;
`