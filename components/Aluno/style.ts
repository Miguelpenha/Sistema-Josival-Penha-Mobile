import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

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
    ${props => props.bold && css`
        font-weight: bold;
    `}
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`

export const ContainerPagamentos = styled.View`
    width: 70%;
    justify-content: center;
    padding-left: 1%;
    flex-direction: row;
    align-items: center;
`

export const ContainerStatus = styled.View`
    width: 32%;
    padding-right: 4%;
    padding-left: 4%;
    margin-right: 5%;
    border-radius: 15px;
    height: 80%;
    align-items: center;
    flex-direction: row;
    background-color: ${props => props.theme.check};
`

export const Status = styled.Text`
    text-align: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const ContainerIconBack = styled.TouchableOpacity`
    margin-right: 40%;
`

export const IconBack= styled(MaterialIcons)`
    color: ${props => props.theme.secondaryColor};
`