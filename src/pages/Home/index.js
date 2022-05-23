import React from 'react'

import { AboutMe } from '../../components/AboutMe'
import { Contact } from '../../components/Contact'
import { Experience } from '../../components/Experience'
import { Header } from '../../components/Header'
import { Projects } from '../../components/Projects'
import { WhoIAm } from '../../components/WhoIAm'

export function Home() {
  return (
    <>
      <Header />

      <WhoIAm id="who" />

      <AboutMe id="about" />

      <Experience id="experience" />

      <Projects id="projects" />

      <Contact id="contact" />
    </>
  )
}
