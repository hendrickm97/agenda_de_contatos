import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
`
export const Header = styled.header`
  margin-bottom: 40px;
  padding: 16px;

  h1 {
    margin-bottom: 24px;
    font-weight: normal;
  }

  h2 {
    font-weight: bold;
  }
`
export const CampoTelefone = styled(InputMask)`
  padding: 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #666666;
  border-radius: 8px;
  color: #666666;
`
