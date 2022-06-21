import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'
import { IveriPago2 } from '../../types'

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
    align-self: center;
    border-radius: ${RFPercentage(3.5)}px;
`

export const Img = styled.Image`
    width: ${RFPercentage(5.5)}px;
    height: ${RFPercentage(5.5)}px;
    border-radius: ${RFPercentage(3.5)}px;
`

export const ContainerData = styled.View`
    margin-left: 2%;
`

interface IText {
    bold?: boolean
}

export const Text = styled.Text<IText>`  
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};

    ${props => props.bold && css`
        font-weight: bold;
    `}
`

interface IContainerStatus {
    pago: IveriPago2
}

export const ContainerStatus = styled.View<IContainerStatus>`
    right: 12%;
    width: 32%;
    padding: 5%;
    position: absolute;
    align-self: center;
    justify-content: center;
    border-radius: ${RFPercentage(3.5)}px;
    background-color: ${props => {
        if (props.pago === 'Em dia') {
            return props.theme.receita
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