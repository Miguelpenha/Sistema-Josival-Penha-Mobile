import styled from 'styled-components/native'

export const Find = styled.TextInput`
    width: 80%;
    padding: 15px;
    font-size: 20px;
    margin-bottom: 5%;
    align-self: center;
    border-radius: 12px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondary};
`

export const ContainerAlertNotFound = styled.View`
    width: 90%;
    padding: 5%;
    align-self: center;
    border-radius: 20px;
    background-color: ${props => props.theme.primary};
`

export const AlertNotFound = styled.Text`
    font-size: 21px;
    font-weight: 700;
    color: ${props => props.theme.color};
`

export const Title = styled.Text`
    width: 100%;
    font-size: 30px;
    margin-top: 2.5%;
    margin-bottom: 5%;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.primary};
`