import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`
export const Campo = styled.input`
  padding: 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #666666;
  border-radius: 8px;
  color: #666666;
`

export const Botao = styled.button`
  text-transform: capitalize;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;

  background-color: black;
  color: #fff;

  border: none;
  border-radius: 4px;
`

export default EstiloGlobal
