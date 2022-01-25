import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

export const Check = styled(Lottie)`
    width: 35%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
`

export const TextCheck = styled.Text`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.check};
`

export const Title = styled.Text`
    width: 80%;
    margin-top: 5%;
    font-size: 25px;
    margin-bottom: 5%;
    font-weight: bold;
    text-align: center;
    align-self: center;
    color: ${props => props.theme.primary};
`