import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'
import LogoJP from '../LogoJP'

export const Container = styled.View`
    margin-top: 10%;
    align-items: center;
`

export const Logo = styled(LogoJP)`
    width: 75%;
    height: auto;
    aspect-ratio: 2.6186961870;
`

export const Load = styled(Lottie)`
    width: 70%;
    margin-top: 12%;
`

export const Texto = styled.Text`
    margin-top: 5%;
    font-size: 27px;
    color: ${props => props.theme.primary};
`