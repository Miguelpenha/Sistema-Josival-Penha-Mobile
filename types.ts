export type IveriPago = 'Em dia' | 'Atrasado' | 'Em espera'
export type IveriPago2 = 'Em dia' | 'Atrasado'

export interface Itheme {
  name: string
  color: string
  check: string
  primary: string
  secondary: string
  secondaryColor: string
  backgroundColor: string
  receita: string
  despesa: string
  emEspera: string
}

export interface Ipagamento {
  value: string
  pago: boolean
  forma: IpaymentMethods
  valueBruto: number
  vencimento: string
  vencimentoSistema: String
}

export interface Isaldo {
  saldo: string
  saldoBruto: number
  receitas: string
  receitasBrutas: number
  despesas: string
  despesasBrutas: Number
}

export type IpaymentMethods = 'Espécie' | 'Pix' | 'Boleto' | 'Cartão'

interface Imeses {
  '01': Ipagamento
  '02': Ipagamento
  '03': Ipagamento
  '04': Ipagamento
  '05': Ipagamento
  '06': Ipagamento
  '07': Ipagamento
  '08': Ipagamento
  '09': Ipagamento
  '10': Ipagamento
  '11': Ipagamento
  '12': Ipagamento
}

export interface Ipagamentos {
  [key: keyof Imeses | string]: Ipagamento
}

export type IlistPagamentos = keyof Ipagamentos

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
  pagamentos: Ipagamentos
}

export interface Iturma {
  _id: string
  nome: string
  alunos: number
}

export type Inavigation = {
  Home: undefined
  Pagamentos: {
    aluno: Ialuno
  }
  Financeiro: undefined
  AddPagamento: undefined
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
    financeiro?: boolean
  }
  Settings: undefined
  Turmas: {
    success: boolean
  }
}