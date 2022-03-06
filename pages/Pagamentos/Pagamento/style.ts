import styled from 'styled-components/native'
import { IveriPago } from '../../../types'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    width: 98%;
    padding: 3.5%;
    margin-top: 1.8%;
    align-self: center;
    align-items: center;
    margin-bottom: 1.8%;
    flex-direction: row;
    border-radius: 15px;
    flex-direction: row;
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