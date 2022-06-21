import styled from 'styled-components/native'
import HeaderBackNotStyled from '../../components/HeaderBack'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const HeaderBack = styled(HeaderBackNotStyled)`
    margin-bottom: 0%;
`

export const Title = styled.Text`
    margin: 6%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.secondaryColor};
`