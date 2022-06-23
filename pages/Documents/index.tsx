import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Container } from './style'
import documents from './documents'
import Document from './Document'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'Documents'>['navigation']
}

const Documents: FC<Iprops> = ({ navigation }) => {
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()}/>
            <Container
                numColumns={2}
                renderItem={Document}
                data={documents(navigation)}
                contentContainerStyle={{alignItems: 'center'}}
                keyExtractor={(item, index) => String(index)}
            />
        </ContainerPd>
    )
}

export default Documents