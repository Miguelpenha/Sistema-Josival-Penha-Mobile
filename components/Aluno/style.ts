import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    width: 85%;
    padding: 5%;
    elevation: 8;
    margin-top: 4%;
    margin-bottom: 4%;
    align-self: center;
    flex-direction: row;
    border-radius: 15px;
    background-color: ${props => props.theme.primary};
`

export const ContainerImg = styled.TouchableOpacity`
    width: auto;
    border-radius: 30px;
`

export const Img = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 50px;
`

export const Text = styled.Text`  
    width: 90%;
    font-size: 22px;
    text-align: left;
    padding-left: 2%;
    margin-top: 1.5%;
    font-weight: bold;
    padding-right: 10%;
    color: ${props => props.theme.color};
`