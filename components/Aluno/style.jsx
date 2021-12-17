import React from 'react'
import styled from 'styled-components'
import { TouchableOpacity, Text, Image } from 'react-native'

export const Container = styled(TouchableOpacity)`
    background-color: ${props => props.theme.primary};
    padding: 5%;
    border-radius: 15px;
    margin-top: 4%;
    margin-bottom: 4%;
    width: 85%;
    align-self: center;
    flex-direction: row;
    elevation: 8;
`

export const Img = styled(Image)`
    width: 60px;
    height: 60px;
    border-radius: 50px;
`

const TextoStyled = styled(Text)`
    text-align: left;
    font-size: 22px;
    width: 90%;
    padding-right: 10%;
    padding-left: 2%;
    margin-top: 1.5%;
    color: ${props => props.theme.color};
    font-weight: bold;
    text-align: left;
`

export function Texto({ children }) {
    let novo = ''

    for (let letra in children) {
        if (letra >= 29) {
            if (!novo.includes('...')) {
                novo += '...'
            }
        } else {
            novo += children[letra]
        }
    }

    return <TextoStyled>{novo}</TextoStyled>
}