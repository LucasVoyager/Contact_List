import { Provider } from 'react-redux'

import GlobalStyleP, { Container } from './styles'

import store from './store'
import Forms from './containers/Forms'
import ContactList from './containers/ContactList'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyleP />
      <Container>
        <Forms />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
