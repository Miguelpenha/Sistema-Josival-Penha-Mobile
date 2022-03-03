export interface Itheme {
  name: string
  color: string
  check: string
  primary: string
  secondary: string
  secondaryColor: string
  backgroundColor: string
}

export interface Ialuno {
  id: string
  nome: string
  turma: string
  nascimento: string
  foto: {
    url: string
    width: number
    height: number
  }
}

export type Inavigation = {
  Home: undefined
  Pagamentos: {
    aluno: Ialuno
  }
  SelectMonth: {
    aluno: Ialuno
  }
  Camera: {
    aluno: string
  }
  Foto: {
    foto: Ialuno['foto']
  }
  Alunos: {
    next: 'camera:aluno' | 'pagamentos:aluno'
    url: string
    title?: string
  }
  Settings: undefined
  Turmas: {
    success: boolean
  }
}