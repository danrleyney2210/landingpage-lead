import React from 'react'
import { Container } from "./styles"


export const EmailSend = () => {
  return (
    <Container className='email-send'>
      <h2>Participe do Intensivo em Anúncios Online e aprenda a atrair mais clientes, vender mais e aumentar o seu faturamento através das maiores ferramentas de vendas da internet.</h2>
      <div className="wrap-input">
        <input type="email" placeholder='Digite seu melhor e-mail'/>
        <input type="button" value="Quero Participar" />
      </div>
    </Container>
  )
}
