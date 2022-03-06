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
    padding: 4%;
    border-radius: ${RFPercentage(3.6)}px;
    background-color: ${props => props.theme.secondary};
`

export const ContainerTextInfo = styled.View`
    ${styleContainerTextInfo}
`

export const ButtonContainerTextInfo = styled.TouchableOpacity`
    width: 85%;
    flex-direction: row;
    
    ${styleContainerTextInfo}
`

interface ITextInfo {
    button?: boolean
}

export const TextInfo = styled.Text<ITextInfo>`
    text-align: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};

    ${props => props.button && css`
        padding-left: 4%;
    `}
`

export const IconBottom = styled(MaterialIcons)`
    margin-right: 2%;
    color: ${props => props.theme.color};
`