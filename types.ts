export type Inavigation = {
    Pagamentos: {
      aluno: {
        foto: {
          url: string,
          width: number,
          height: number
        },
        nome: string
        id: string
      }
    },
    Camera: {
      aluno: string
    },
    Foto: {
      foto: {
        url: string,
        width: number,
        height: number
      }
    },
    Alunos: {
      next: 'camera:aluno' | 'pagamentos:aluno',
      url: string
    },
    Settings: undefined
    Turmas: undefined
}