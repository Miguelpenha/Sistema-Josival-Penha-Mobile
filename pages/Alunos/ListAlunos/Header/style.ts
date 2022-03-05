import styled, { css } from 'styled-components/native'
import { MotiView, MotiText } from 'moti'

interface IFind {
    financeiro?: boolean
}

export const Find = styled.TextInput<IFind>`
    width: 80%;
    padding: 15px;
    font-size: 20px;
    align-self: center;
    border-radius: 12px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondary};

    ${props => !props.financeiro && css`
        margin-bottom: 3%;
    `}
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

export const ContainerButtonAtrasadosOrNo = styled.View`
    width: 80%;
    margin-top: 6%;
    margin-bottom: 6%;
    align-self: center;
    flex-direction: row;
`

interface IButtonAtrasadosOrNo {
    primary?: boolean
}

export const ButtonAtrasadosOrNo = styled(MotiView)<IButtonAtrasadosOrNo>`
    width: 100%;
    padding: 3%;
    align-items: center;
    border-radius: 20px;

    ${props => props.primary ? css`
        margin-right: 4%;
        background-color: ${props => props.theme.primary};
    ` : css`
        background-color: ${props => props.theme.backgroundColor};
    `}
`

interface ITextButtonAtrasadosOrNo {
    primary?: boolean
}

export const TextButtonAtrasadosOrNo = styled(MotiText)<ITextButtonAtrasadosOrNo>`
    font-size: 18px;
    color: ${props => props.primary ? props.theme.color : props.theme.primary};
`