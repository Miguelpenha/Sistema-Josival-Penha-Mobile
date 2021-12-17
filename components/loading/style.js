import styled from 'styled-components'
import { View, Image, Text } from 'react-native'
import Lottie from 'lottie-react-native'

export const Container = styled(View)`
    margin-top: 15%;
    align-items: center;
`

export const Logo = styled(Image)`
    width: 65%;
    height: auto;
    aspect-ratio: 2.6186961870;
`

export const Load = styled(Lottie)`
    width: 70%;
`

export const Texto = styled(Text)`
    color: #ffffff;
    font-size: 27px;
`