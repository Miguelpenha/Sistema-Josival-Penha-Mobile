import styled from 'styled-components/native'
import { View, Image } from 'react-native'
import ButtonBackStyled from '../../components/ButtonBack'

export const Container = styled(View)`
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 5.7%;
    background-color: #000000;
`

export const Img = styled(Image)`
    width: 100%;
    aspect-ratio: ${props => props.foto.width/props.foto.height};
`

export const ButtonBack = styled(ButtonBackStyled)`
    position: absolute;
    left: 0;
    top: 7%;
`