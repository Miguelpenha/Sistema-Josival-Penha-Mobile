import React, { FC, memo } from 'react'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { Container, ButtonBack, ContainerHeader, Title, Logo } from './style'

interface Iprops {
    title?: string
    logo?: boolean
    style?: ViewStyle
    onClick: Function
    buttonBack?: boolean
    styleTitle?: TextStyle
    styleLogo?: ImageStyle
    iconSizeButtonBack?: number
    styleButtonBack?: ViewStyle
    styleButtonBackIcon?: TextStyle
    styleContainerHeader?: ViewStyle
}

const HeaderBack: FC<Iprops> = ({ style, onClick, buttonBack=true, styleButtonBack, iconSizeButtonBack, styleButtonBackIcon, styleContainerHeader, title, styleTitle, logo=true, styleLogo }) => {
    if (!styleButtonBack) {
        styleButtonBack = {
            alignSelf: 'center'
        }
    }

    return (
        <Container style={style}>
            {buttonBack && (
                <ButtonBack
                    onClick={onClick}
                    style={styleButtonBack}
                    iconSize={iconSizeButtonBack}
                    styleIcon={styleButtonBackIcon}
                />
            )}
            <ContainerHeader style={styleContainerHeader}>
                {title && <Title style={styleTitle}>{title}</Title>}
                {!title && logo && <Logo style={styleLogo}/>}
            </ContainerHeader>
        </Container>
    )
}

export default memo(HeaderBack)