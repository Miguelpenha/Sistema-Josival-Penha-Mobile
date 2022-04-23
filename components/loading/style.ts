import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'

export const Load = styled(Lottie)`
    width: 70%;
    margin-top: 12%;
    margin-left: auto;
    margin-right: auto;
`

export const Texto = styled.Text`
    margin-top: 5%;
    font-size: 27px;
    text-align: center;
    color: ${props => props.theme.primary};
`