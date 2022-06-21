import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    width: 95%;
    padding: 3%;
    elevation: 8;
    margin: 2.5% auto;
    flex-direction: row;
    border-radius: ${RFPercentage(2.7)}px;
    background-color: ${props => props.theme.backgroundColor};
    border: ${RFPercentage(0.3)}px solid ${props => props.theme.secondary};
`

export const Row1InColumn1 = styled.View`
    flex-direction: row;
`

export const Name = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Teacher = styled.Text`
    margin-left: 5%;
    padding-left: 4%;
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    border-left-width: ${RFPercentage(0.3)}px;
    color: ${props => props.theme.secondaryColor};
    border-left-color: ${props => props.theme.secondary};
`

export const StudentsCount = styled.Text`
    margin-top: 1%;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Column2 = styled.View`
    margin-left: auto;
`

export const IconNext = styled(MaterialIcons)`
    margin: auto;
    color: ${props => props.theme.secondaryColor};
`