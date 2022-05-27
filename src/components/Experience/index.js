import React from 'react'

import CssLogo from '../../assets/css-logo.png'
import DockerLogo from '../../assets/docker-logo.png'
import GitLogo from '../../assets/git-logo.png'
import HtmlLogo from '../../assets/html-logo.png'
import JsLogo from '../../assets/js-logo.png'
import MongoLogo from '../../assets/mongodb-logo.png'
import NodeLogo from '../../assets/node-logo.jpg'
import PostgresLogo from '../../assets/postgres-logo.png'
import ReactLogo from '../../assets/react-logo.png'
import { Container } from './styles'

export function Experience() {
  return (
    <>
      <Container id="experience">
        <h2>Experiência</h2>
        <div className="box">
          <p className="firstParagraph">
            Adquiro experiência realizando projetos pessoais para aprender novas
            tecnologias e melhores práticas na hora do desenvolvimento. Busco
            sempre desenvolver projetos mais complexos e com alguma
            funcionalidade nova para me desafiar e aprender algo novo.
          </p>

          <p className="label">Tenho conhecimento nas seguintes tecnologias:</p>
          <div className="listBox">
            <ul>
              <li className="miniature-html">
                HTML
                <img src={HtmlLogo} alt="ícone-html" className="miniature" />
              </li>

              <li className="miniature-css">
                CSS
                <img src={CssLogo} alt="ícone-css" className="miniature" />
              </li>

              <li className="miniature-js">
                JavaScript
                <img
                  src={JsLogo}
                  alt="ícone-javascript"
                  className="miniature"
                />
              </li>

              <li className="miniature-github ">
                Git e GitHub
                <img
                  src={GitLogo}
                  alt="ícone-github"
                  className="miniature-git"
                />
              </li>

              <li className="miniature-node">
                Node
                <img src={NodeLogo} alt="ícone-node" className="miniature" />
              </li>

              <li className="miniature-react ">
                React
                <img
                  style={{ backgroundColor: '#ffffff' }}
                  src={ReactLogo}
                  className="miniature"
                  alt="ícone-react"
                />
              </li>

              <li className="miniature-postgres">
                Postgres
                <img
                  src={PostgresLogo}
                  alt="ícone-postgres"
                  className="miniature"
                />
              </li>

              <li className="miniature-mongo">
                MongoDB
                <img
                  src={MongoLogo}
                  alt="ícone-mongodb"
                  className="miniature"
                />
              </li>

              <li className="miniature-docker">
                Docker
                <img
                  src={DockerLogo}
                  alt="ícone-docker"
                  className="miniature"
                />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
