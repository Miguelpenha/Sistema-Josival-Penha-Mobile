import React, { FC, useRef, createRef } from 'react'
import { Ialuno } from '../../../types'
import dinero from 'dinero.js'
import PerfilAluno from './PerfilAluno'
import { Informations, TitleInfo, ContainerTextInfo, ButtonContainerTextInfo, TextInfo, InputTextInfo, IconBottom } from './style'
import { View, TextInput } from 'react-native'
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
    let textInputRef = useRef<TextInput>(null)
    const max = Math.max(
        ...Object.keys(aluno.pagamentos).map(mês => (
            aluno.pagamentos[mês].valueBruto
        )
    ))
    const mensalidade = dinero({ amount: max, currency: 'BRL' }).toFormat()
    
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
                    <ButtonContainerTextInfo onPress={() => textInputRef.current?.focus()}>
                        <InputTextInfo ref={textInputRef as any}>{mensalidade}</InputTextInfo>
                        <IconBottom name="expand-more" size={20}/>
                    </ButtonContainerTextInfo>
                </View>
            </Informations>
        </>
    )
}

export default AlunoPagamento