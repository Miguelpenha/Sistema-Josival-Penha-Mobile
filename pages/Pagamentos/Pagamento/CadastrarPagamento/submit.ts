import api from '../../../../base'

function submit(date: string, valor: string, pago: boolean, forma: string, idAluno: string, mês: string) {
    api.post('/pagamentos', {
        id: idAluno,
        mês,
        value: valor,
        pago,
        vencimento: date,
        forma
    })
}

export default submit