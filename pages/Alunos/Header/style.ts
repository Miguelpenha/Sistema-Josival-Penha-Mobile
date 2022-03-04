import styled, { css } from 'styled-components/native'

export const Find = styled.TextInput`
    width: 80%;
    padding: 15px;
    font-size: 20px;
    align-self: center;
    border-radius: 12px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondary};
`

export const ContainerAlertNotFound = styled.View`
    width: 80%;
    padding: 5%;
    margin-top: 5%;
    align-self: center;
    border-radius: 20px;
    background-color: ${props => props.theme.primary};
`

export const AlertNotFound = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.color};
`

export const ContainerButtonAtrasadosOrNo = styled.TouchableOpacity`
    width: 80%;
    margin-top: 6%;
    margin-bottom: 6%;
    align-self: center;
    flex-direction: row;
`

interface IButtonAtrasadosOrNo {
    primary?: boolean
    atrasados: boolean
}

export const ButtonAtrasadosOrNo = styled.TouchableOpacity<IButtonAtrasadosOrNo>`
    width: 40%;
    padding: 3%;
    align-items: center;
    border-radius: 20px;
    background-color: ${props => props.atrasados ? props.theme.backgroundColor : props.theme.primary};

    ${props => props.primary && css`
        margin-right: 4%;
    `}
`

interface ITextButtonAtrasadosOrNo {
    atrasados: boolean
}

export const TextButtonAtrasadosOrNo = styled.Text<ITextButtonAtrasadosOrNo>`
    font-size: 18px;
    color: ${props => props.atrasados ? props.theme.primary : props.theme.color};
`