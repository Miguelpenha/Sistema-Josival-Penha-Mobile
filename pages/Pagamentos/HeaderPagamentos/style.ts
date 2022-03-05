import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top: 8%;
    padding-bottom: 2%;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.secondaryColor};
`

export const ContainerTitles = styled.View`
    width: 85%;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
`

export const Mês = styled.Text`
    margin-left: -2%;
    color: ${props => props.theme.secondaryColor};
`

export const Status = styled.Text`
    margin-left: 5%;
    color: ${props => props.theme.secondaryColor};
`

export const Vencimento = styled.Text`
    margin-right: 7%;
    color: ${props => props.theme.secondaryColor};
`