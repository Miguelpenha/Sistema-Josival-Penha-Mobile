import styled from 'styled-components'
import { Text } from 'react-native'

export const Title = styled(Text)`
    width: 100%;
    margin-top: 5%;
    font-size: 30px;
    margin-bottom: 5%;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.primary};
`