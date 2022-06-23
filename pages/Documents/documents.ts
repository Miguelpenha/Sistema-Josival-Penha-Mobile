import { Idocument } from './types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'

function documents(navigation: NativeStackScreenProps<Inavigation, 'Documents'>['navigation']): Idocument[] {
    return [
        {
            title: 'Declaração de frequência',
            icon: 'description',
            onPress() {
                navigation.navigate('Alunos', {
                    next: 'documents:aluno',
                    url: '/alunos',
                    title: 'Escolher aluno'
                })
            }
        },
        {
            title: 'Declaração financeira',
            icon: 'account-balance',
            onPress() {
                console.log('asd')
            }
        }
    ]
}

export default documents