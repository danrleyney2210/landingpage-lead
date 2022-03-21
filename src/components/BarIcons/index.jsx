import React from 'react'
import { Container } from "./styles"

export const BarIcons = () => {
  return (
    <Container>
      <div>
        <img src="/imgs/calendar.svg" alt="" />
        <p>14 a 20 de Março</p>
      </div>
      <div>
        <img src="/imgs/notebook.svg" alt="notebook" />
        <p>100% Online e Gratuito</p>
      </div>
      <div>
        <img src="/imgs/bar.svg" alt="barra" />
        <p>Do Zero ao Avançado</p>
      </div>
      <div>
        <img src="/imgs/mouse.svg" alt="mouse" />
        <p>Aulas Práticas</p>
      </div>
      <div>
        <img src="/imgs/facebook.svg" alt="facebook" />
        <p>Comunidade Exclusiva</p>
      </div>
      <div>
        <img src="/imgs/bookDown.svg" alt="book" />
        <p>PDF das Aulas</p>
      </div>
    </Container>
  )
}
