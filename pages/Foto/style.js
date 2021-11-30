import styled from 'styled-components'
import { View, Image } from 'react-native'

export const Container = styled(View)`
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const Img = styled(Image)`
    width: 100%;
    aspect-ratio: ${props => props.foto.width/props.foto.height};
`