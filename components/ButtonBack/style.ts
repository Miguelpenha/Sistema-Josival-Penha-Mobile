import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Icon = styled(MaterialIcons)`
    color: ${props => props.theme.secondaryColor};
    left: 20%;
    margin-right: 5%;
`