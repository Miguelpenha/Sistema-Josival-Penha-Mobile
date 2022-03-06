import React, { FC } from 'react'
import { Ialuno } from '../../../types'
import dinero from 'dinero.js'
import { Container, Informations, ContainerInfo, TitleInfo, ContainerTextInfo, ButtonContainerTextInfo, TextInfo, IconBottom } from './style'
import PerfilAluno from './PerfilAluno'
import calcIdade from '../../../utils/calcIdade'

dinero.globalLocale = 'pt-br'

interface IonPress {
    (): void
}

interface Iprops {
    aluno: Ialuno
    onPress: IonPress
}

const AlunoPagamento: FC<Iprops> = ({ aluno, onPress }) => {
    const max = Math.max(
        ...Object.keys(aluno.pagamentos).map(mês => (
            aluno.pagamentos[mês].valueBruto
        )
    ))

    const mensalidade = dinero({ amount: max, currency: 'BRL' }).toFormat()
    
    return (
        <Container>
            <PerfilAluno aluno={aluno} onPress={onPress}/>
            <Informations>
                <ContainerInfo>
                    <TitleInfo>Turma: </TitleInfo>
                    <ContainerTextInfo>
                        <TextInfo>{aluno.turma}</TextInfo>
                    </ContainerTextInfo>
                </ContainerInfo>
                <ContainerInfo>
                    <TitleInfo>Idade: </TitleInfo>
                    <ContainerTextInfo>
                        <TextInfo>{calcIdade(aluno.nascimento)} anos</TextInfo>
                    </ContainerTextInfo>
                </ContainerInfo>
                <ContainerInfo>
                    <TitleInfo>Valor: </TitleInfo>
                    <ButtonContainerTextInfo>
                        <TextInfo>{mensalidade}</TextInfo>
                        {/* <IconBottom name="expand-more" size={10}/> */}
                    </ButtonContainerTextInfo>
                </ContainerInfo>
            </Informations>
        </Container>
    )
}

export default AlunoPagamento