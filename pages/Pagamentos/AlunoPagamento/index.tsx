import React, { FC, useState } from 'react'
import { Ialuno } from '../../../types'
import dinero from 'dinero.js'
import PerfilAluno from './PerfilAluno'
import { Informations, TitleInfo, ContainerTextInfo, ButtonContainerTextInfo, TextInfo, InputTextInfo, IconBottom } from './style'
import { View } from 'react-native'
import calcIdade from '../../../utils/calcIdade'

dinero.globalLocale = 'pt-br'

interface IonPress {
    (): void
}

interface IsetMensalidade {
    (mensalidade: string): void
}

interface IopenModalMensalidade {
    (mensalidade: string, setMensalidade: IsetMensalidade): void
}

interface Iprops {
    aluno: Ialuno
    onPress: IonPress
    openModalMensalidade: IopenModalMensalidade
}

const AlunoPagamento: FC<Iprops> = ({ aluno, onPress, openModalMensalidade }) => {
    const [open, setOpen] = useState(false)
    const max = Math.max(
        ...Object.keys(aluno.pagamentos).map(mês => (
            aluno.pagamentos[mês].valueBruto
        )
    ))
    const [mensalidade, setMensalidade] = useState(dinero({ amount: max, currency: 'BRL' }).toFormat())
    
    return (
        <>
            <PerfilAluno aluno={aluno} onPress={onPress}/>
            <Informations>
                <View>
                    <TitleInfo>Turma: </TitleInfo>
                    <ContainerTextInfo>
                        <TextInfo>{aluno.turma}</TextInfo>
                    </ContainerTextInfo>
                </View>
                <View>
                    <TitleInfo>Idade: </TitleInfo>
                    <ContainerTextInfo>
                        <TextInfo>{calcIdade(aluno.nascimento)} anos</TextInfo>
                    </ContainerTextInfo>
                </View>
                <View>
                    <TitleInfo>Valor: </TitleInfo>
                    <ButtonContainerTextInfo onPress={() => {
                        setOpen(!open)
                        openModalMensalidade(mensalidade, setMensalidade)
                    }}>
                        <InputTextInfo>{mensalidade}</InputTextInfo>
                        <IconBottom name={open ? 'expand-less' : 'expand-more'} size={20}/>
                    </ButtonContainerTextInfo>
                </View>
            </Informations>
        </>
    )
}

export default AlunoPagamento