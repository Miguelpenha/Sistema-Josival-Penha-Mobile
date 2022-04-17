import api from '../../../../base'
import { IpaymentMethods } from '../../../../types'

function submit(date: string, valor: string, pago: boolean, forma: IpaymentMethods, idAluno: string, mês: string) {
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