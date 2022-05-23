import React from 'react'
import Carousel from 'react-elastic-carousel'

import path from './path'
import {
  Container,
  ProjectContainer,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectName,
  ProjectTechnologies
} from './styles'

export function Projects() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1300, itemsToShow: 3 }
  ]
  return (
    <>
      <Container id="projects">
        <h2>Projetos</h2>
        <Carousel itemsToShow={2} breakPoints={breakPoints}>
          {path.map(project => (
            <ProjectContainer key={project.name}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectImage src={project.image} />
              <ProjectTechnologies>
                <summary>Tecnologias utilizadas:</summary>{' '}
                {project.technologies}
              </ProjectTechnologies>
              <ProjectDescription>
                <summary>Descrição:</summary>
                {project.description}
              </ProjectDescription>
              <ProjectLink target="_blank" href={project.link}>
                Ver código
              </ProjectLink>
            </ProjectContainer>
          ))}
        </Carousel>
      </Container>
    </>
  )
}

/* <AllProjectContainer>
          {path.map(project => (
            <ProjectContainer key={project.name}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectImage src={project.image} />
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTechnologies>{project.technologies}</ProjectTechnologies>
              <ProjectLink href={project.link}>GitHub</ProjectLink>
            </ProjectContainer>
          ))}
        </AllProjectContainer> */
