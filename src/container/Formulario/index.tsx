import { useDispatch, useSelector } from 'react-redux'
import { Botao, Campo } from '../../styles'
import { Header, Form, CampoTelefone } from './styles'
import { RootReducer } from '../../store'
import { cadastrar } from '../../store/reducers/contato'
import { FormEvent, useState } from 'react'

const Formulario = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contato)

  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        tel
      })
    )
  }

  const limparCampos = () => {
    setTimeout(() => {
      setNome('')
      setTel('')
      setEmail('')
    }, 100)
  }

  return (
    <>
      <Header>
        <h1>Agenda de contatos</h1>
        <h2>{itens.length} contatos na agenda</h2>
      </Header>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <CampoTelefone
          mask="(99) 99999-9999"
          value={tel}
          onChange={(event) => setTel(event.target.value)}
          type="text"
          placeholder="Telefone"
          required
        />
        <Campo
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="E-mail"
          required
        />
        <Botao onClick={limparCampos} type="submit">
          ADICIONAR
        </Botao>
      </Form>
    </>
  )
}

export default Formulario
