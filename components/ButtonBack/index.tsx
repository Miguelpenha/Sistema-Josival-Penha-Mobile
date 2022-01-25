import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from './style'

interface Iprops {
    onClick: Function
}

const ButtonBack: FC<Iprops> = ({ onClick, ...rest }) => {
    return (
        <TouchableOpacity onPress={() => onClick()} {...rest}>
            <Icon name="arrow-back" size={40}/>
        </TouchableOpacity>
    )
}

export default ButtonBack