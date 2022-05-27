import Burger from '@animated-burgers/burger-rotate'
import React, { useState } from 'react'

import '@animated-burgers/burger-rotate/dist/styles.css'
import { Container } from './styles'

export function Header() {
  const head = '< Portfólio />'

  const [capture, setCapture] = useState(false)

  const changeMode = data => {
    if (data === false) {
      setCapture(true)
    }
    if (data === true) {
      setCapture(false)
    }
  }

  return (
    <>
      <Container checkButton={capture}>
        <h1 id="home">{head}</h1>

        <div className="container-header">
          <a href="#who">Quem sou eu?</a>
          <a href="#about">Sobre mim</a>
          <a href="#experience">Experiência</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>

        <div className="button-container">
          <Burger
            Component="button"
            type="button"
            onClick={() => changeMode(capture)}
            isOpen={capture}
            // Style de border aplicado apenas para retirar pequenas bordas brancas
            style={{ background: '#000', border: '2px solid #000' }}
            className="item"
          />

          <div className="list-container">
            <a className="first-tag" href="#who">
              Quem sou eu?
            </a>

            <a href="#about">Sobre mim</a>

            <a href="#experience">Experiência</a>

            <a href="#projects">Projetos</a>

            <a href="#contact">Contato</a>
          </div>
        </div>
      </Container>
    </>
  )
}
