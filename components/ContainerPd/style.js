import styled from 'styled-components'
import { View } from 'react-native'

export const Container = styled(View)`
    height: 100%;
    background-color: ${props => props.theme.backgroundColor};
`