import styled, { css } from 'styled-components/native'
import ContainerPdNotStyled from '../../components/ContainerPd'
import HeaderBackNotStyled from '../../components/HeaderBack'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const ContainerPd = styled(ContainerPdNotStyled)`
    background-color: ${props => props.theme.secondary};
`

export const HeaderBack = styled(HeaderBackNotStyled)`
    margin-bottom: 0%;
    background-color: ${props => props.theme.backgroundColor};
`

export const Container = styled.View`

`

export const ContainerSelect = styled.View`
    padding-top: 5%;
    padding-bottom: 8%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: ${RFPercentage(2.7)}px;
    border-bottom-right-radius: ${RFPercentage(2.7)}px;
    background-color: ${props => props.theme.backgroundColor};
`

export const ContainerIconSelectLeft = styled.TouchableOpacity`
    margin-right: 1%;
    border-radius: ${RFPercentage(8.9)}px;
`

export const ContainerIconSelectRight = styled.TouchableOpacity`
    margin-left: 1%;
    border-radius: ${RFPercentage(8.9)}px;
`

interface IIconSelect {
    max: boolean
}

export const IconSelect = styled(MaterialIcons)<IIconSelect>`
    color: ${props => props.theme.primary};
    opacity: ${props => props.max ? 0.3 : 1};
`

export const ValueSelect = styled.Text`
    width: 35%;
    text-align: center;
    font-size: ${RFPercentage(3.2)}px;
    border-radius: ${RFPercentage(2.7)}px;
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
`