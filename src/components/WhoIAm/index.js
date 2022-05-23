import React from 'react'

import PerfilPicture from '../../assets/photo-picture.jpeg'
import { Container, Line } from './styles'

export function WhoIAm() {
  return (
    <>
      <Container id="who">
        <Line></Line>
        <h2>Quem sou eu?</h2>

        <div className="whoInfo">
          <div className="text">
            <h3>Olá, eu sou o Eduardo, </h3>
            <p>
              tenho 18 anos e sou um estudante de desenvolvimento web. <br />
              Meu foco atualmente é atuar como um desenvolvedor full-stack,
              trabalhando tanto no front-end quanto no back-end e mobile,
              utilizando Node.js, React.js e React Native.
            </p>
          </div>

          <img alt="minha-foto" src={PerfilPicture} />
        </div>
      </Container>
    </>
  )
}
