import styled from 'styled-components'
import { View, Image, Text } from 'react-native'
import Lottie from 'lottie-react-native'

export const Container = styled(View)`
    margin-top: 10%;
    align-items: center;
`

export const Logo = styled(Image)`
    width: 75%;
    height: auto;
    aspect-ratio: 2.6186961870;
`

export const Load = styled(Lottie)`
    width: 70%;
    margin-top: 12%;
`

export const Texto = styled(Text)`
    color: ${props => props.theme.primary};
    font-size: 27px;
    margin-top: 5%;
`