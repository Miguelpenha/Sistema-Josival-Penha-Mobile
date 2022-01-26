import styled from 'styled-components/native'
import ButtonBackStyled from '../../components/ButtonBack'
import { Camera as CameraNotStyled } from 'expo-camera'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'

interface ICameraComponent {
    height: number
}

export const IconMaterial = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Container = styled.View`
    flex: 1;
    margin-top: 4.5%;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColor};
`

export const ContainerCamera = styled.View`
    width: 100%;
    overflow: hidden;
    align-self: center;
`

export const CameraComponent = styled(CameraNotStyled)<ICameraComponent>`
    height: ${props => `${props.height}px`};
`

export const Options = styled.View`
    flex: 1;
    flex-direction: row;
`

export const ButtonBack = styled(ButtonBackStyled)`
    margin: 2%;
    position: absolute;
    align-self: flex-start;
`

export const ContainerFlip = styled.TouchableOpacity`
    margin: 20px;
    margin-right: auto;
    align-self: flex-end;
`

export const ContainerCircle = styled.TouchableOpacity`
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
    align-self: flex-end;
    color: ${props => props.theme.primary};
`

export const IconFontAwesome = styled(FontAwesome)`
    color: ${props => props.theme.primary};
`

export const ContainerFlash = styled.TouchableOpacity`
    margin: 20px;
    align-self: flex-end;
`