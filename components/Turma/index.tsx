import React, { FC } from 'react'
import { Iturma } from '../../types'
import { Container, Row1InColumn1, Name, Teacher, StudentsCount, Column2, IconNext } from './style'
import { View } from 'react-native'
import limitText from '../../utils/limitText'

interface Iprops {
    turma: Iturma
    onClick: (turmaId: Iturma['_id']) => void
}

const Turma: FC<Iprops> = ({ turma, onClick }) => {
    return (
        <Container onPress={() => onClick(turma._id)}>
            <View>
                <Row1InColumn1>
                    <Name>{limitText(turma.nome, 16)}</Name>
                    <Teacher>{limitText(turma.professora, 16)}</Teacher>
                </Row1InColumn1>
                <StudentsCount>{limitText(String(turma.alunos), 8)} alunos</StudentsCount>
            </View>
            <Column2>
                <IconNext name="arrow-forward-ios" size={20}/>
            </Column2>
        </Container>
    )
}

export default Turma