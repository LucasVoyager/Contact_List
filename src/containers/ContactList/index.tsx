import { useSelector } from 'react-redux'
import ContactCP from '../../components/Contact'
import { ContainerCL } from '../../styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)

  return (
    <ContainerCL>
      <ul>
        {itens.map((c) => (
          <li key={c.name}>
            <ContactCP
              id={c.id}
              name={c.name}
              phone={c.phone}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </ContainerCL>
  )
}

export default ContactList
