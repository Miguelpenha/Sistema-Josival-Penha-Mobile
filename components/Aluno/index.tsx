import React, { FC, memo } from 'react'
import { Ialuno } from '../../types'
import TextLimit from '../TextLimit'
import calcIdade from '../../utils/calcIdade'
import { Container, ContainerImg, Img, ContainerData, Text, ContainerStatus, Status, IconBack } from './style'
import veriPago from '../../utils/veriPago'

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
    financeiro?: boolean
}

const Aluno: FC<Iprops> = ({ aluno, filter, onClick, onClickFoto, financeiro }) => {
    const TextBold: FC = ({ children }) => <Text bold>{children}</Text>
    const onClickEvent = () => onClick(aluno)
    const onClickFotoEvent = () => onClickFoto(aluno.foto)
    
    if (filter(aluno)) {
        return (
            <Container onPress={onClickEvent}>
                <ContainerImg onPress={onClickFotoEvent}>
                    <Img source={{
                        uri: aluno.foto.url
                    }}/>
                </ContainerImg>
                <ContainerData>
                    <TextLimit component={TextBold} limit={financeiro ? 14 : 26}>{aluno.nome}</TextLimit>
                    <TextLimit component={Text} limit={financeiro ? 14 : 26}>
                        {calcIdade(aluno.nascimento)} anos
                    </TextLimit>
                </ContainerData>
                {financeiro && (
                    <ContainerStatus pago={veriPago(aluno.pagamentos,)}>
                        <Status>{veriPago(aluno.pagamentos)}</Status>
                    </ContainerStatus>
                )}
                <IconBack name="arrow-forward-ios" size={20}/>
            </Container>
        )
    } else {
        return null
    }
}

export default memo(Aluno)