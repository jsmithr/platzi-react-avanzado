import styled, { css } from 'styled-components'

export const Grid = styled.div`
  padding: 5px 10px;
  position: relative;
  display: flex;
  justify-content: start;
  flex-flow: row wrap;
`

export const CardFav = styled.div`
  padding: 7px;
  position: relative;
  max-width: 150px;
  max-height: 150px;
  width: 150px;
  height: 150px;
  overflow: hidden;

  & div {
    width: 100%;
    height: 100%;
    border-radius: 5px;

    ${
      ({ src }) => css`
        background: url(${src});
        background-size: cover;
        background-position: center;
      `
    }
  }
`

export const EmptyFavs = styled.div`
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;

  & h2 {
    color: #4c4c4c;
  }

  & p {
    margin-top: 10px;
    color: #9e9e9e;
  }
`
