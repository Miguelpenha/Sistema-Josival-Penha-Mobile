import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    
`

export const Informations = styled.View`
    width: 95%;
    margin-top: 5%;
    align-self: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
`

export const ContainerInfo = styled.View`
    
`

export const TitleInfo = styled.Text`
    margin-left: 8%;
    margin-bottom: 2%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`

export const ContainerTextInfo = styled.View`
    width: 100%;
    padding: 4%;
    border-radius: 20px;
    background-color: ${props => props.theme.secondary};
`

export const ButtonContainerTextInfo = styled.TouchableOpacity`
    width: 100%;
    padding: 4%;
    border-radius: 20px;
    background-color: ${props => props.theme.secondary};
`

export const TextInfo = styled.Text`
    text-align: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const IconBottom = styled(MaterialIcons)`
    
`