import styled from 'styled-components/native'
import ButtonBackNotStyled from '../ButtonBack'
import LogoJP from '../LogoJP'

export const Container = styled.View`
    padding-top: 10%;
    margin-bottom: 5%;
    align-items: center;
    flex-direction: row;
`

export const ButtonBack = styled(ButtonBackNotStyled)`
    margin-top: 5%;
    margin-left: 2%;
    margin-bottom: 4.5%;
    align-self: flex-start;
`

export const ContainerHeader = styled.View`
    flex: 1;
    padding-left: 1%;
    margin-right: 5%;
    align-items: flex-start;
`

export const Title = styled.Text`
    font-size: 20px;
    margin-right: 5%;
    font-weight: 400;
    color: ${props => props.theme.secondaryColor};
`

export const Logo = styled(LogoJP)`
    width: 90%;
    height: auto;
    aspect-ratio: 2.6186961870;
`