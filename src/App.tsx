import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import Formulario from './container/Formulario'
import ListaDeContatos from './container/ListaDeContatos'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Formulario />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
