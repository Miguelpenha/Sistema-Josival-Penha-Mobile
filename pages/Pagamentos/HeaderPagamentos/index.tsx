import React from 'react'
import { Container, ContainerTitles, Mês, Status, Vencimento } from './style'

function HeaderPagamentos() {
  return (
    <Container>
      <ContainerTitles>
        <Mês>Mês</Mês>
        <Status>Status</Status>
        <Vencimento>Vencimento</Vencimento>
      </ContainerTitles>
    </Container>
  )
}

export default HeaderPagamentos