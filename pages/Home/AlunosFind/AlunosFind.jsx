import React, { useState } from 'react'
import ContainerPd from '../../../components/ContainerPd'
import { Header, ContainerSettings, Settings, Logo, Find, ContainerAlertNotFound, AlertNotFound } from './style'
import LoadingData from '../../../components/loadingData'
import { FlatList } from 'react-native'
import Aluno from '../../../components/Aluno'
import { get } from '../../../api'

export default function AlunosFind({ navigation }) {
    const { data: alunos } = get(`/alunos`)
    const [filter, setFilter] = useState('')

    function HeaderFlatList() {
        let existsAluno = false

        alunos.map(aluno => {
            if (aluno.nome.toUpperCase().includes(filter.toUpperCase())) {
                existsAluno = true
            }
        })
        
        return (
            <Header>
                <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                    <Settings name="settings" size={35}/>
                </ContainerSettings>
                <Logo/>
                <Find placeholder="Filtro" value={filter} onChangeText={setFilter}/>
                {!existsAluno && (
                    <ContainerAlertNotFound>
                        <AlertNotFound>
                            {'Não encontramos nenhum aluno com esse nome :('}
                        </AlertNotFound>
                    </ContainerAlertNotFound>
                )}
            </Header>
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
                                    foto={item.foto} 
                                    id={item._id} 
                                    nome={item.nome} 
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