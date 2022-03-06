import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'
import { IveriPago } from '../../types'

export const Container = styled.TouchableOpacity`
    width: 95%;
    padding: 2%;
    margin-top: 2.5%;
    align-self: center;
    margin-bottom: 2.5%;
    flex-direction: row;
    border-radius: 20px;
    border: 2px solid ${props => props.theme.secondary};
    background-color: ${props => props.theme.backgroundColor};
`

export const ContainerImg = styled.TouchableOpacity`
    width: auto;
    border-radius: 30px;
`

export const Img = styled.Image`
    width: 40px;
    height: 40px;
    aspect-ratio: 1;
    border-radius: 50px;
`

export const ContainerData = styled.View`
    margin-left: 2%;
`

interface Itext {
    bold?: boolean
}

export const Text = styled.Text<Itext>`  
    width: 100%;
    text-align: left;
    padding-left: 2%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
    ${props => props.bold && css`
        font-weight: bold;
    `}
`

interface IContainerStatus {
    pago: IveriPago
}

export const ContainerStatus = styled.View<IContainerStatus>`
    right: 12%;
    width: 32%;
    padding: 5%;
    position: absolute;
    align-self: center;
    border-radius: 20px;
    justify-content: center;
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

export const IconBack= styled(MaterialIcons)`
    right: 0;
    margin-left: 3.5%;
    position: absolute;
    align-self: center;
    color: ${props => props.theme.secondaryColor};
`