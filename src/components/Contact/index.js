/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

import GitIcon from '../../assets/icon-github.png'
import GmailIcon from '../../assets/icon-gmail.png'
import LinkedIcon from '../../assets/icon-linkedin.png'
import WhatsappIcon from '../../assets/icon-whatsapp.png'
import { Container } from './styles'
export function Contact() {
  return (
    <>
      <Container id="contact">
        <div className="linksContact">
          <h2>Minhas redes:</h2>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/eduardo-carmelino/"
                rel="noreferrer"
              >
                LinkedIn
                <img className="icon" alt="ícone-linkedin" src={LinkedIcon} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/EduardoSimioni"
                rel="noreferrer"
              >
                GitHub <img className="icon" alt="ícone-github" src={GitIcon} />
              </a>
            </li>
          </ul>
        </div>
        <div className="linksContact">
          <h2>Entre em contato:</h2>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://wa.me/+5514996885617"
                rel="noreferrer"
                title="(14) 99688-5617"
              >
                WhatsApp
                <img className="icon" alt="ícone-whatsapp" src={WhatsappIcon} />
              </a>
            </li>
            <li>
              <a
                href="mailto:eduardocarmelino.contato@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Gmail{' '}
                <img
                  className="icon"
                  title="eduardocarmelino.contato@gmail.com"
                  alt="ícone-gmail"
                  src={GmailIcon}
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  )
}
