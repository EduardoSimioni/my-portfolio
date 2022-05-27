import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  height: 120px;
  background: #000000;
  display: flex;
  justify-content: space-evenly;
  position: fixed;

  h1 {
    align-self: center;
    background-image: linear-gradient(
      90deg,
      rgb(123, 91, 199) 0%,
      rgb(234, 56, 141) 100%
    );
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    color: #787d82;
    font-size: 20px;
    padding-bottom: 5px;
    font-weight: 500;
    border-bottom: 2px solid transparent;

    :hover {
      border-bottom: 2px solid #e6398f;
    }
  }
  .container-header {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    padding-left: 150px;
  }

  .item {
    display: none;
  }

  .button-container {
    display: none;
  }

  //--------------------------------------------------------------------------

  @media (max-width: 420px) {
    display: flex;
    justify-content: space-between;
    position: fixed;

    h1 {
      font-size: 34px;
      margin-left: 20px;
    }

    .container-header {
      display: none;
    }

    .item {
      display: block;
      align-self: center;
      margin-right: 40px;
      margin-bottom: 30px;
      margin-top: 30px;
    }

    .button-container {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      margin-bottom: 0px;

      .list-container {
        display: ${props => (props.checkButton ? 'flex' : 'none')};
        flex-direction: column;
        background: transparent;
        margin-right: 10px;
        gap: 5px;

        a {
          font-size: 16px;
          font-weight: bold;
          background-image: linear-gradient(
            90deg,
            rgb(123, 91, 199) 0%,
            rgb(234, 56, 141) 100%
          );
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }
      }
    }
  }
`
// ${props => props.theme.background1};
