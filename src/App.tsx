import { Provider } from 'react-redux'

import GlobalStyleP, { Container } from './styles'

import store from './store'

import ContactList from './containers/ContactList'
import AsideBar from './containers/AsideBar'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyleP />
      <Container>
        <AsideBar />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
