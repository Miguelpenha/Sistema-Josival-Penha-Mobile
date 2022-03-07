import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import convertPxToPercentage from '../../../../utils/convertPxToPercentage'
convertPxToPercentage(5)

export const Container = styled.View`
    width: 98%;
    padding: 2%;
    padding-top: 4%;
    padding-bottom: 8%;
    align-self: center;
    border-radius: ${RFPercentage(2.7)}px;
    background-color: ${props => props.theme.primary};
`

export const ContainerDate = styled.View`
    
`

export const LabelDate = styled.Text`
    margin-bottom: 0.5%;
    font-size: ${RFPercentage(2.1)}px;
    color: ${props => props.theme.color};
`

export const ContainerInputDate = styled.TouchableOpacity`
    width: 40%;
    border-radius: ${RFPercentage(0.9)}px;
    border: ${RFPercentage(0.2)}px solid ${props => props.theme.color};
`

export const InputDate = styled.Text`
    align-self: center;
    font-size: ${RFPercentage(2.9)}px;
    color: ${props => props.theme.color};
`