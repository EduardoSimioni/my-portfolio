import styled from 'styled-components'

export const Container = styled.section`
  display: block;
  width: 100vw;
  height: max-content;
  background-color: #000000;
  border-bottom: 3px solid #787d82;

  .about-text {
    max-width: 700px;
    padding-top: 60px;
    padding-left: 60px;
    font-size: 18px;
    color: #787d82;
  }

  img {
    margin: 30px 50px 20px 30px;
    height: 300px;
    width: 300px;
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

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    color: #787d82;
  }

  .info {
    display: flex;
    width: max-content;
    margin: 0 auto;
  }

  .text {
    display: flex;
    flex-direction: row;
  }

  .header-list {
    color: #787d82;
    font-size: 18px;
  }

  .list {
    margin: 60px 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`
