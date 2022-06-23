import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    margin: 3%;
    width: 43%;
    padding: 3%;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.primary};
`

export const Icon = styled(MaterialIcons)`
    margin-bottom: 5%;
    align-self: center;
    color: ${props => props.theme.color};
`

export const Title = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.color};
`