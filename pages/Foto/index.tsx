import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { Container, Img, ButtonBack } from './style'

type Iprops = NativeStackScreenProps<Inavigation, 'Foto'>

const Foto: FC<Iprops> = ({ route, navigation }) => {
    const { foto } = route.params
    
    return (
        <Container>
            <Img source={{
                uri: foto.url
            }} foto={foto}/>
            <ButtonBack onClick={() => navigation.goBack()}/>
        </Container>
    )
}

export default Foto