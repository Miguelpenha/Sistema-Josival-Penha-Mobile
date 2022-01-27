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

export const ContainerData = styled.View`
    max-width: 80%;
`

export const Text = styled.Text`  
    width: 100%;
    font-size: 18px;
    text-align: left;
    padding-left: 2%;
    margin-top: 1.5%;
    font-weight: bold;
    color: ${props => props.theme.color};
`