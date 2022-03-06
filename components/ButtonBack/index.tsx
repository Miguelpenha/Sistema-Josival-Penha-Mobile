import React, { FC, memo } from 'react'
import { StyleProp } from 'react-native'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { Icon } from './style'

interface Iprops {
    onClick: Function
    style?: StyleProp<ViewStyle>
}

const ButtonBack: FC<Iprops> = ({ onClick, style, ...rest }) => {
    return (
        <TouchableOpacity style={[style]} onPress={() => onClick()} {...rest}>
            <Icon name="arrow-back-ios" size={22}/>
        </TouchableOpacity>
    )
}

export default memo(ButtonBack)