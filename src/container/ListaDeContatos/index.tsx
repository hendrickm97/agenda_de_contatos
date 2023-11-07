import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'

import { ContainerPrincipal } from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)

  return (
    <ContainerPrincipal>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato id={c.id} nome={c.nome} email={c.email} tel={c.tel} />
          </li>
        ))}
      </ul>
    </ContainerPrincipal>
  )
}

export default ListaDeContatos
