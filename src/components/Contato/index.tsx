import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  BotaoDeletarECancelar,
  BotaoEditar,
  BotaoSalvar,
  ContainerButtons,
  ContainerStatus,
  CardContato,
  Descricao
} from './styles'
import ContatoClass from '../../models/Contatos'
import { editar, remover } from '../../store/reducers/contato'

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  tel: telOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (
      nomeOriginal.length > 0 &&
      emailOriginal.length > 0 &&
      telOriginal.length > 0
    ) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTel(telOriginal)
    }
  }, [nomeOriginal, emailOriginal, telOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTel(telOriginal)
    setEmail(emailOriginal)
  }

  return (
    <>
      <CardContato>
        <ContainerStatus>
          <ul>
            <Descricao
              value={nome}
              disabled={!estaEditando}
              onChange={(e) => setNome(e.target.value)}
            />
            <Descricao
              value={tel}
              disabled={!estaEditando}
              onChange={(e) => setTel(e.target.value)}
            />
            <Descricao
              value={email}
              disabled={!estaEditando}
              onChange={(e) => setEmail(e.target.value)}
            />
          </ul>
        </ContainerStatus>
        <ContainerButtons>
          {estaEditando ? (
            <>
              <BotaoSalvar
                onClick={() => {
                  dispatch(editar({ nome, tel, email, id }))
                  setEstaEditando(false)
                }}
              >
                Salvar
              </BotaoSalvar>
              <BotaoDeletarECancelar onClick={cancelarEdicao}>
                Cancelar
              </BotaoDeletarECancelar>
            </>
          ) : (
            <>
              <BotaoDeletarECancelar
                onClick={() => {
                  dispatch(remover(id))
                }}
              >
                Deletar
              </BotaoDeletarECancelar>
              <BotaoEditar
                onClick={() => {
                  setEstaEditando(true)
                }}
              >
                Editar
              </BotaoEditar>
            </>
          )}
        </ContainerButtons>
      </CardContato>
    </>
  )
}

export default Contato
