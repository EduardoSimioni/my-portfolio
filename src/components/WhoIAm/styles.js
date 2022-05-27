import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: max-content;
  background-color: #000000;
  display: block;
  position: static;
  padding-top: 120px;
  border-bottom: 3px solid #787d82;

  p {
    max-width: 600px;
    color: #787d82;
    font-size: 18px;
  }

  h3 {
    color: #999999;
    font-size: 26px;
  }

  h2 {
    margin: 20px 0 0 20px;
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

  .whoInfo {
    display: flex;
    margin: 20px 20px 0 0;
    justify-content: space-around;
  }

  img {
    height: 300px;
    margin-bottom: 20px;
  }

  .text {
    margin: 30px 0 0 30px;
  }

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    padding-top: 120px;

    .whoInfo {
      display: flex;
      flex-direction: column-reverse;
      width: 100vw;
    }

    img {
      width: 340px;
      align-self: center;
    }

    p {
      margin-bottom: 15px;
    }
  }
`

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #787d82;
`
