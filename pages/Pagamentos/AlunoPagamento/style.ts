import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Informations = styled.View`
    width: 100%;
    margin-top: 3%;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`

export const TitleInfo = styled.Text`
    margin-left: 8%;
    margin-bottom: 2%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`

const styleContainerTextInfo = css`
    border-radius: ${RFPercentage(3.6)}px;
    background-color: ${props => props.theme.primary};
`

export const ContainerTextInfo = styled.View`
    padding: 4%;

    ${styleContainerTextInfo}
`

export const ButtonContainerTextInfo = styled.TouchableOpacity`
    width: 85%;
    padding: 1%;
    flex-direction: row;
    align-items: center;

    ${styleContainerTextInfo}
`

const styleTextInfo = css`
    text-align: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const TextInfo = styled.Text`
    ${styleTextInfo}
`

export const InputTextInfo = styled.Text`
    height: 80%;
    padding-left: 6%;
    
    ${styleTextInfo}
`

export const IconBottom = styled(MaterialIcons)`
    margin-right: 2%;
    color: ${props => props.theme.color};
`