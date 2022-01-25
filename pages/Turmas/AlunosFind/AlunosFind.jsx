import React, { useState } from 'react'
import { get } from '../../../api'
import ContainerPd from '../../../components/ContainerPd'
import LoadingData from '../../../components/loadingData'
import { FlatList, View } from 'react-native'
import HeaderBack from '../../../components/HeaderBack'
import { Find, ContainerAlertNotFound, AlertNotFound } from './style'
import Aluno from '../../../components/Aluno'

export default function AlunosFind({ navigation }) {
    const { data: alunos } = get(`/alunos`)
    const [filter, setFilter] = useState('')

    function HeaderFlatList() {
        let existsAluno = false

        alunos && alunos.map(aluno => {
            if (aluno.nome.toUpperCase().includes(filter.toUpperCase())) {
                existsAluno = true
            }
        })
        
        return (
            <View>
                <HeaderBack onClick={() => navigation.goBack()}/>
                <Find placeholder="Filtro" value={filter} onChangeText={setFilter}/>
                {!existsAluno && (
                    <ContainerAlertNotFound>
                        <AlertNotFound>
                            {'Não encontramos nenhum aluno com esse nome '}&#x1F615;
                        </AlertNotFound>
                    </ContainerAlertNotFound>
                )}
            </View>
        )
    }
    
    return (
        <ContainerPd>
            <LoadingData loading={alunos}> 
                <FlatList 
                    data={alunos} 
                    ListHeaderComponent={HeaderFlatList()} 
                    renderItem={({ item }) => {
                        if (item.nome.toUpperCase().includes(filter.toUpperCase())) {
                            return (
                                <Aluno 
                                    aluno={item}
                                    onClick={aluno => navigation.navigate('Camera', {aluno})} 
                                    onClickFoto={foto => navigation.navigate('Foto', {foto})}
                                />
                            )
                        }
                    }} 
                    keyExtractor={item => item._id}
                />
            </LoadingData>
        </ContainerPd>
    )
}