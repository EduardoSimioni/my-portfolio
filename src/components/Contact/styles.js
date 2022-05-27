import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  gap: 300px;
  background: #000000;

  .linksContact {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;

    h2 {
      margin-top: 20px;
      background-image: linear-gradient(
        90deg,
        rgb(63, 250, 86) 0%,
        rgb(228, 230, 77) 100%
      );
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      gap: 80px;
      margin-top: 50px;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #999999;
      text-decoration: none;
    }

    .icon {
      height: 60px;
      opacity: 0.6;
      cursor: pointer;
    }
  }

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    gap: 0px;

    .linksContact {
      display: flex;
      flex-direction: column;
      align-items: none;
      padding: 0px;

      ul {
        gap: 40px;
        margin: 20px;
      }
    }
  }
`
