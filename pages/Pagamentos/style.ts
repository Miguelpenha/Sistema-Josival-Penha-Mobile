import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
    width: 70%;
    padding: 5%;
    display: flex;
    margin-bottom: 8%;
    align-self: center;
    align-items: center;
    border-radius: 18.93px;
    justify-content: center;
    background-color: ${props => props.theme.primary};
`

export const TextButton = styled.Text`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.color};
`