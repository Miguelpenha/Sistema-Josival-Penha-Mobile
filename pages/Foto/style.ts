import styled from 'styled-components/native'
import { Ialuno } from '../../types'
import ButtonBackNotStyled from '../../components/ButtonBack'

export const Container = styled.View`
    height: 100%;
    padding-top: 5.7%;
    align-items: center;
    justify-content: center;
    background-color: #000000;
`

interface IImg {
    foto: Ialuno['foto']
}

export const Img = styled.Image<IImg>`
    width: 100%;
    aspect-ratio: ${props => props.foto.width/props.foto.height};
`

export const ButtonBack = styled(ButtonBackNotStyled)`
    left: 0;
    top: 7%;
    position: absolute;
`