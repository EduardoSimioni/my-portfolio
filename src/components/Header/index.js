import React from 'react'

import { Container } from './styles'

export function Header() {
  const head = '< Portfólio />'
  return (
    <>
      <Container>
        <h1 id="home">{head}</h1>
        <div className="container-header">
          <a href="#who">Quem sou eu?</a>
          <a href="#about">Sobre mim</a>
          <a href="#experience">Experiência</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </Container>
    </>
  )
}
