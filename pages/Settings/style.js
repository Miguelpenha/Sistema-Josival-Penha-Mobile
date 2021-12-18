import styled from 'styled-components'
import { View, Text, Switch } from 'react-native'

export const ContainerTheme = styled(View)`
    flex-direction: row;
    align-content: center;
    justify-content: center;
    margin-top: 5%;
`

export const TextTheme = styled(Text)`
    font-size: 30px;
    color: ${props => props.theme.primary};
`

export const SwitchTheme = styled(Switch)`
    margin-left: 2%;
`