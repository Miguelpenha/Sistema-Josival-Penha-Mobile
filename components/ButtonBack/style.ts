import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Icon = styled(MaterialIcons)`
    left: 20%;
    margin-right: 5%;
    color: ${props => props.theme.secondaryColor};
`