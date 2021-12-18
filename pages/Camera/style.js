import styled from 'styled-components'
import { View, TouchableOpacity } from 'react-native'
import ButtonBackStyled from '../../components/ButtonBack'
import { Camera } from 'expo-camera'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'

export const IconMaterial = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Container = styled(View)`
    flex: 1;
    padding-top: 4.5%;
    justify-content: center;
    background-color: #000000;
`

export const ContainerCamera = styled(Camera)`
    width: 100%
    height: ${props => props.height+'px'};
`

export const Options = styled(View)`
    flex: 1;
    flex-direction: row;
`

export const ButtonBack = styled(ButtonBackStyled)`
    margin: 2%;
    position: absolute;
    align-self: flex-start;
`

export const ContainerFlip = styled(TouchableOpacity)`
    margin: 20px;
    margin-right: auto;
    align-self: flex-end;
`

export const ContainerCircle = styled(TouchableOpacity)`
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
    align-self: flex-end;
    color: ${props => props.theme.primary};
`

export const IconFontAwesome = styled(FontAwesome)`
    color: ${props => props.theme.primary};
`

export const ContainerFlash = styled(TouchableOpacity)`
    margin: 20px;
    align-self: flex-end;
`