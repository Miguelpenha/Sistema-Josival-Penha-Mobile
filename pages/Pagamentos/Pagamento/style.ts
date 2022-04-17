import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { IveriPago } from '../../../types'
import { MaterialIcons } from '@expo/vector-icons'

interface IContainer {
    open: boolean
}

export const Container = styled.View<IContainer>`
    width: 95%;
    margin-top: 2.5%;
    align-self: center;
    margin-bottom: 2.5%;
    
    ${props => props.open && css`
        border-radius: ${RFPercentage(2.7)}px;
        background-color: ${props.theme.primary};
    `}
`

export const ContainerPagamento = styled.TouchableOpacity`
    width: 100%;
    padding: 3.5%;
    align-self: center;
    align-items: center;
    flex-direction: row;
    flex-direction: row;
    border-radius: ${RFPercentage(2.7)}px;
    border: 2px solid ${props => props.theme.secondary};
    background-color: ${props => props.theme.backgroundColor};
`

export const Month = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`

interface IContainerStatus {
    pago: IveriPago
}

export const ContainerStatus = styled.View<IContainerStatus>`
    left: 35%;
    width: 30%;
    padding: 4%;
    position: absolute;
    border-radius: 20px;
    background-color: ${props => {
        if (props.pago === 'Em dia') {
            return props.theme.receita
        } else if (props.pago === 'Em espera') {
            return props.theme.emEspera
        } else if (props.pago === 'Atrasado') {
            return props.theme.despesa
        }
    }};
`

export const Status = styled.Text`
    text-align: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const Vencimento = styled.Text`
    left: 68%;
    position: absolute;
    color: ${props => props.theme.secondaryColor};
`

export const IconBack= styled(MaterialIcons)`
    right: 0;
    margin-left: 3.5%;
    position: absolute;
    align-self: center;
    color: ${props => props.theme.secondaryColor};
`