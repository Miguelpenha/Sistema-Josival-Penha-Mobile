import styled from 'styled-components'
import { View, TouchableOpacity } from 'react-native'

export const Options = styled(View)`
    flex-direction: row;
    margin: 20px;
    flex: 1;
    display: flex;
`

export const Option = styled(TouchableOpacity)`
    align-self: flex-end;
    align-items: center;
    width: auto;
`