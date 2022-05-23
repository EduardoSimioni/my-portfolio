import React from 'react'

import LogoDevClub from '../../assets/LogoDevClub.png'
import { Container } from './styles'

export function AboutMe() {
  return (
    <>
      <Container id="about">
        <h2>Sobre mim</h2>

        <div className="info">
          <div className="text">
            <p className="about-text">
              Estudo programação no DevClub, um curso que possui desafios além
              dos conteúdos para fixar melhor o conhecimento e simular o dia a
              dia de uma empresa. Além do curso possuímos a comunidade onde os
              membros compartilham suas experiências e conhecimento e tiram as
              dúvidas uns dos outros.
            </p>

            <img alt="logo-curso-devclub" src={LogoDevClub} />

            <div className="list">
              <p className="header-list">
                O curso é voltado para a o desenvolvimento full-stack, e conta
                <br />
                com as seguintes tecnologias:
              </p>
              <ul>
                <li> HTML</li>
                <li> CSS</li>
                <li> JavaScript</li>
                <li> Git e GitHub</li>
                <li> Node</li>
                <li> React</li>
                <li> React Native</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
