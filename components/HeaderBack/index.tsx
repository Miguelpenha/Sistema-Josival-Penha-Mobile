import React, { FC, memo } from 'react'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { Container, ButtonBack, ContainerHeader, Title, Logo } from './style'

interface Iprops {
    title?: string
    logo?: boolean
    style?: ViewStyle
    onClick: Function
    styleTitle?: TextStyle
    styleLogo?: ImageStyle
    iconSizeButtonBack?: number
    styleButtonBack?: ViewStyle
    styleButtonBackIcon?: TextStyle
    styleContainerHeader?: ViewStyle
}

const HeaderBack: FC<Iprops> = ({ style, onClick, styleButtonBack, iconSizeButtonBack, styleButtonBackIcon, styleContainerHeader, title, styleTitle, logo=true, styleLogo }) => {
    return (
        <Container style={style}>
            <ButtonBack
                onClick={onClick}
                style={styleButtonBack}
                iconSize={iconSizeButtonBack}
                styleIcon={styleButtonBackIcon}
            />
            <ContainerHeader style={styleContainerHeader}>
                {title && <Title style={styleTitle}>{title}</Title>}
                {!title && logo && <Logo style={styleLogo}/>}
            </ContainerHeader>
        </Container>
    )
}

export default memo(HeaderBack)