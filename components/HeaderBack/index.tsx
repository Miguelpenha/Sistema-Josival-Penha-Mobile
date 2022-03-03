import React, { FC } from 'react'
import { Container, ButtonBack, ContainerLogo, Title, Logo } from './style'

interface Iprops {
    onClick: Function
    title?: string
}

const HeaderBack: FC<Iprops> = ({ onClick, title }) => {
    return (
        <Container>
            <ButtonBack onClick={onClick}/>
            <ContainerLogo>
                {title ? (
                    <Title>{title}</Title>
                ) : <Logo/>}
            </ContainerLogo>
        </Container>
    )
}

export default HeaderBack