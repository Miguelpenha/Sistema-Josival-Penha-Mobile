import { Ioption } from './type'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'

function options(navigation: NativeStackScreenProps<Inavigation, 'Alunos'>['navigation'], find: boolean): Ioption[] {
  return [
    {
      title: 'Foto do aluno',
      icon: 'add-a-photo',
      onClick: () => find ? navigation.navigate('Alunos', {
        next: 'camera:aluno',
        url: '/alunos'
      }) : navigation.navigate('Turmas', {
        success: false
      })
    },
    {
      title: 'Pagamentos',
      icon: 'payments',
      onClick: () => navigation.navigate('Alunos', {
        next: 'pagamentos:aluno',
        url: '/alunos',
        title: 'Escolher Aluno',
        financeiro: true
      })
    },
    {
      title: 'Financeiro',
      icon: 'account-balance',
      onClick: () => navigation.navigate('Financeiro')
    }
  ]
}

export default options