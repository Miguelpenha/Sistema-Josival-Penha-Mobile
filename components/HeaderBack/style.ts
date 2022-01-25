import styled from 'styled-components/native'
import ButtonBackNotStyled from '../ButtonBack'
import LogoJP from '../LogoJP'

export const Container = styled.View`
    margin-top: 10%;
    flex-direction: row;
`

export const ButtonBack = styled(ButtonBackNotStyled)`
    margin-top: 6%;
    margin-left: 2%;
    align-self: flex-start;
`

export const ContainerLogo = styled.View`
    flex: 1;
    padding-left: 1%;
    margin-right: 5%;
    align-items: flex-start;
`

export const Logo = styled(LogoJP)`
    width: 90%;
    height: auto;
    aspect-ratio: 2.6186961870;
`