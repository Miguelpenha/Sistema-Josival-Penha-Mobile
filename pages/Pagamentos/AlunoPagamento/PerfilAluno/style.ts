import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 95%;
    padding: 2%;
    align-self: center;
    flex-direction: row;
    border-radius: 20px;
    background-color: ${props => props.theme.primary};
`

export const ContainerImage = styled.TouchableOpacity`
    width: auto;
    border-radius: 30px;
`

export const Image = styled.Image`
    width: 40px;
    height: 40px;
    aspect-ratio: 1;
    border-radius: 50px;
`

export const Name = styled.Text`
    bottom: 1%;
    width: 100%;
    padding-left: 2%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(2.6)}px;
    color: ${props => props.theme.color};
`