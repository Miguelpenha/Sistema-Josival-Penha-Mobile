import styled from 'styled-components/native'
import { Text } from 'react-native'

export const Title = styled(Text)`
    color: ${props => props.theme.primary};
    font-size: 25px;
    margin-top: 5%;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-bottom: 5%;
`