import styled from 'styled-components/native'
import { View, Text, Switch as SwitchRN } from 'react-native'

export const ContainerSwitch = styled(View)`
    flex-direction: row;
    align-content: center;
    justify-content: center;
    margin-top: 5%;
`

export const TextSwitch = styled(Text)`
    font-size: 30px;
    color: ${props => props.theme.primary};
`

export const Switch = styled(SwitchRN)`
    margin-left: 2%;
`