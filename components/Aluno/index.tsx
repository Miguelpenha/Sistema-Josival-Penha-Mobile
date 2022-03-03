import React, { FC, memo } from 'react'
import { Container, ContainerImg, Img, ContainerData, Text, ContainerPagamentos, ContainerStatus, Status, ContainerIconBack, IconBack } from './style'
import TextLimit from '../TextLimit'
import { Ialuno } from '../../types'

interface ionClickFoto {
    (foto: Ialuno['foto']): void
}

interface IonClick {
    (aluno: Ialuno): void
}

interface Ifilter {
    (aluno: Ialuno): boolean
}

interface Iprops {
    aluno: Ialuno
    filter: Ifilter
    onClick: IonClick
    onClickFoto: ionClickFoto
}

const Aluno: FC<Iprops> = ({ aluno, filter, onClick, onClickFoto }) => {
    function calcIdade(nascimento: string) {
        const newNascimento = new Date(`${nascimento.split('/')[2]}-${nascimento.split('/')[1]}-${nascimento.split('/')[0]}`)

        return Math.floor(
            Math.ceil(
                Math.abs(newNascimento.getTime()-new Date().getTime())/(1000*3600*24)
            )/365.25
        )
    }

    const TextBold: FC = ({ children }) => <Text bold>{children}</Text>

    if (filter(aluno)) {
        return (
            <Container onPress={() => onClick(aluno)}>
                <ContainerImg onPress={() => onClickFoto(aluno.foto)}>
                    <Img source={{
                        uri: aluno.foto.url
                    }}/>
                </ContainerImg>
                <ContainerData>
                    <TextLimit component={TextBold} limit={16}>{aluno.nome}</TextLimit>
                    <TextLimit component={Text} limit={16}>
                        {calcIdade(aluno.nascimento)} anos
                    </TextLimit>
                </ContainerData>
                <ContainerPagamentos>
                    <ContainerStatus>
                        <Status>Em Dia</Status>
                    </ContainerStatus>
                    <ContainerIconBack onPress={() => {}}>
                        <IconBack name="arrow-forward-ios"/>
                    </ContainerIconBack>
                </ContainerPagamentos>
            </Container>
        )
    } else {
        return null
    }
}

export default memo(Aluno)