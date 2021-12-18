import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from './style'

export default function ButtonBack({ onClick, style }) {
    return (
        <TouchableOpacity onPress={onClick} style={style}>
            <Icon name="arrow-back" size={40}/>
        </TouchableOpacity>
    )
}