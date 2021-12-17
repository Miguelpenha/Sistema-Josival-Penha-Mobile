import styled from 'styled-components'
import { View, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled(View)`
    margin-top: 10%;
    flex-direction: row;
`

export const ButtonBack = styled(TouchableOpacity)`
    margin-top: 6%;
    margin-left: 2%;
    align-self: flex-start;
`

export const IconBack = styled(Ionicons)`
    color: ${props => props.theme.primary};
`

export const ContainerLogo = styled(View)`
    flex: 1;
    padding-left: 1%;
    margin-right: 5%;
    align-items: flex-start;
`

export const Logo = styled(Image)`
    width: 90%;
    height: auto;
    aspect-ratio: 2.6186961870;
`