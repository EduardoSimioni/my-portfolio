import styled from 'styled-components'

export const Container = styled.section`
  background-color: #000000;
  display: block;
  flex-direction: row;
  border-bottom: 3px solid #787d82;

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

  p {
    color: #787d82;
    font-size: 18px;
  }

  .box {
    display: block;

    .listBox {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .firstParagraph {
      margin: 60px 0 0 30px;
    }

    .label {
      margin: 20px 0 0 30px;
    }

    ul {
      display: flex;
      gap: 70px;

      margin: 15px 0 0 30px;
      flex-direction: row;

      li {
        font-size: 18px;
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-image: linear-gradient(
          90deg,
          rgb(63, 250, 86) 0%,
          rgb(228, 230, 77) 100%
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;

        .miniature {
          height: 90px;
        }

        .miniatureGit {
          height: 90px;
          background: white;
        }
      }
    }
  }
`
