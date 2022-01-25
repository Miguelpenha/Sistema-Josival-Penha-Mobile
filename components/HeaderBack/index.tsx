import React, { FC } from 'react'
import { Container, ButtonBack, ContainerLogo, Logo } from './style'

interface Iprops {
    onClick: Function
}

const HeaderBack: FC<Iprops> = ({ onClick }) => {
    return (
        <Container>
            <ButtonBack onClick={onClick}/>
            <ContainerLogo>
                <Logo/>
            </ContainerLogo>
        </Container>
    )
}

export default HeaderBack