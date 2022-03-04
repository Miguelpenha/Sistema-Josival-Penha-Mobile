import { Ipagamentos, IlistPagamentos } from '../types'
import { IveriPago } from '../types'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { DateTime } from 'luxon'

function veriPago(pagamentos: Ipagamentos, mês?: IlistPagamentos): IveriPago {
    const mêsPagamento: IlistPagamentos = mês || DateTime.now().toLocaleString().split('/')[1]
    const pagamento = pagamentos[mêsPagamento]
    
    if (pagamento.pago) {
        return 'Em dia'
    } else {
        const mêsVencimento = Number(pagamento.vencimento.split('/')[1])
        const mêsAtual = Number(DateTime.now().toLocaleString().split('/')[1])

        if (mêsVencimento >= mêsAtual) {
            if (mêsVencimento === mêsAtual) {
                const diaVencimento = Number(pagamento.vencimento.split('/')[0])
                const diaAtual = Number(DateTime.now().toLocaleString().split('/')[0])
                
                if (diaVencimento >= diaAtual) {                 
                    return 'Em espera'
                } else {
                    return 'Atrasado'
                }
            } else {
                return 'Em espera'
            }
        } else {
            return 'Atrasado'
        }
    }
}

export default veriPago