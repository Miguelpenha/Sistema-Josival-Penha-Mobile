import React, { FC, memo } from 'react'
import { ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import { Icon } from './style'

interface Iprops {
    onClick: Function
    style?: ViewStyle
    styleIcon?: TextStyle
    iconSize?: number
}

const ButtonBack: FC<Iprops> = ({ onClick, style, styleIcon, iconSize, ...rest }) => {
    return (
        <TouchableOpacity style={[style]} onPress={() => onClick()} {...rest}>
            <Icon name="arrow-back-ios" size={iconSize ? iconSize : 22} style={styleIcon}/>
        </TouchableOpacity>
    )
}

export default memo(ButtonBack)