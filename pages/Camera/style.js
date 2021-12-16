import styled from 'styled-components'
import { View, TouchableOpacity } from 'react-native'

export const Options = styled(View)`
    flex-direction: row;
    flex: 1;
`

export const Option = styled(TouchableOpacity)`
    align-self: flex-end;
    ${props => !props.margin && 'margin: 20px'};
`