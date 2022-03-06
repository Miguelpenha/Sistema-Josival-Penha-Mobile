import React, { FC } from 'react'
import { Ialuno } from '../../../../types'
import { Container, ContainerImage, Image, Name } from './style'
import TextLimit from '../../../../components/TextLimit'

interface IonPress {
    (): void
}

interface Iprops {
    aluno: Ialuno
    onPress: IonPress
}

const PerfilAluno: FC<Iprops> = ({ aluno, onPress }) => {
    return (
        <Container>
            <ContainerImage onPress={onPress}>
                <Image source={{
                    uri: aluno.foto.url
                }}/>
            </ContainerImage>
            <TextLimit component={Name} limit={26}>{aluno.nome}</TextLimit>
        </Container>
    )
}

export default PerfilAluno