import styled from 'styled-components'

export const Container = styled.section`
  height: max-content;
  background: #000000;
  border-bottom: 3px solid #787d82;
  display: flex;
  flex-direction: column;

  .rec.rec-arrow {
    background-color: #e6398f;
    color: #f8fafc;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
    margin: 15px;
  }
  .rec.rec-arrow:hover {
    border-radius: 2px solid;
    background-color: #7b5bc7;
    color: #f8fafc;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .rec.rec-dot {
    background-color: #bebebf;
  }

  .rec.rec-dot_active {
    background-color: #e6398f;
    box-shadow: 0 0 1px 3px rgb(123, 91, 199);
  }

  h2 {
    padding: 20px 0 0 20px;
    width: max-content;
    background-image: linear-gradient(
      90deg,
      rgb(123, 91, 199) 0%,
      rgb(234, 56, 141) 100%
    );
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 2rem;
  }
`

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #787d82;
  border-radius: 10px;
  width: 400px;
  min-height: 400px;
  margin-top: 10px;
`

export const ProjectName = styled.p`
  background-image: linear-gradient(
    90deg,
    rgb(63, 250, 86) 0%,
    rgb(228, 230, 77) 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  width: max-content;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 0 10px 0;
`

export const ProjectImage = styled.img`
  max-width: 380px;
`

export const ProjectDescription = styled.details`
  max-width: 360px;
  cursor: pointer;
  margin-bottom: 10px;
  align-self: flex-start;
  padding-left: 15px;
  font-size: 17px;
  color: #000000;
  font-weight: 500;

  summary {
    color: #000000;
    font-weight: 500;
  }
`

export const ProjectTechnologies = styled.details`
  padding: 15px 0 15px 0;
  max-width: 360px;
  color: #000000;
  align-self: flex-start;
  padding-left: 15px;
  font-size: 17px;
  cursor: pointer;
  font-weight: 500;

  summary {
    color: #000000;
    font-weight: 500;
  }
`

export const ProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  text-decoration: none;
  background-image: linear-gradient(
    90deg,
    rgb(63, 250, 86) 0%,
    rgb(228, 230, 77) 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  width: max-content;
  font-weight: bold;
  font-size: 17px;
`
