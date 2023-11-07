import styled from 'styled-components'
import { Botao } from '../../styles'

export const CardContato = styled.div`
  display: block;
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px solid black;
  border-radius: 6px;
`

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  ul {
    textarea:first-child {
      font-weight: bold;
    }
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`

export const BotaoDeletarECancelar = styled(Botao)`
  background-color: red;
`

export const BotaoEditar = styled(Botao)`
  background-color: black;
`
export const BotaoSalvar = styled(Botao)`
  background-color: green;
`

export const Descricao = styled.textarea`
  display: inline-block;
  font-size: 14px;
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 12px;
`
