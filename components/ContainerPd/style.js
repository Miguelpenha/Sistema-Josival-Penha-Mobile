import styled from 'styled-components'
import { View } from 'react-native'

export const Container = styled(View)`
    background-color: ${props => props.theme.backgroundColor};
    height: 100%;
`