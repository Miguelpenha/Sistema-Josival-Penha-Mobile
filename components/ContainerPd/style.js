import styled from 'styled-components'
import { SafeAreaView } from 'react-native'

export const Container = styled(SafeAreaView)`
    height: 100%;
    background-color: ${props => props.theme.backgroundColor};
`