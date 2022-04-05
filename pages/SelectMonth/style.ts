import styled from 'styled-components/native'

export const Months = styled.FlatList`
    width: 100%;
`

export const Button = styled.TouchableOpacity`
    padding: 5%;
    flex-grow: 1;
    padding: 10%;
    flex-basis: 0;
    align-self: center;
    margin: 4% 5% 4% 5%;
    align-items: center;
    border-radius: 18.93px;
    justify-content: center;
    background-color: ${props => props.theme.primary};
`

export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.color};
`