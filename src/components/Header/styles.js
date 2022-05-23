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
    border-bottom: 2px solid #000;

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
`
