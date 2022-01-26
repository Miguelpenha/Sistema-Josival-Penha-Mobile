import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

export const CheckAnimation = styled(Lottie)`
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