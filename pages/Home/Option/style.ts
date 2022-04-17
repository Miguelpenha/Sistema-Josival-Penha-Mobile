import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    padding: ${RFPercentage(2)}px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: ${RFPercentage(28)}px;
    margin: ${RFPercentage(1)}px;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.primary};
`

export const Icon = styled(MaterialIcons)`
    margin-bottom: 5%;
    color: ${props => props.theme.color};
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`