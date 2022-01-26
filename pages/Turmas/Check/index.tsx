import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { View } from 'react-native'
import { CheckAnimation, TextCheck } from './style'

interface Iprops {
    success: boolean
}

const CheckVeri: FC<Iprops> = ({ success }) => {
    const theme = useTheme()
    
    if (success) {
        return (
            <View>
                <CheckAnimation
                    autoPlay
                    loop={false}
                    source={require('../../../animations/check.json')}
                    colorFilters={[
                        {
                            keypath: 'Shape Layer 5',
                            color: theme.check
                        },
                        {
                            keypath: 'Shape Layer 2',
                            color: theme.color
                        },
                        {
                            keypath: 'Shape Layer 1',
                            color: theme.check
                        },
                        {
                            keypath: 'Comp 2',
                            color: theme.check
                        }
                    ]}
                />
                <TextCheck>Foto adicionada com sucesso</TextCheck>
            </View>
        )
    } else {
        return null
    }
}

export default CheckVeri