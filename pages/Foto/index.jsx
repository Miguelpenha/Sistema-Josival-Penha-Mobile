import React from 'react'
import { Container, Img } from './style'
import { TouchableOpacity } from 'react-native'
import { Svg, Path } from 'react-native-svg'

export default function Foto({ route, navigation }) {
    const { foto } = route.params
   
    return (
        <Container>
            <Img source={{
                uri: foto.url
            }} foto={foto}/>
            <TouchableOpacity style={{position: 'absolute', left: 0, top: '7%'}} onPress={() => navigation.goBack()}>
                <Svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#0872FC">
                    <Path d="M0 0h24v24H0V0z" fill="none"/>
                    <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </Svg>
            </TouchableOpacity>
        </Container>
    )
}