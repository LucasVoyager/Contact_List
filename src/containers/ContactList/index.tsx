import { useSelector } from 'react-redux'
import ContactCP from '../../components/Contact'
import { ContainerCL } from '../../styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)
  const { terme } = useSelector((state: RootReducer) => state.filter)

  const filterContact = () => {
    let contactFilter = itens
    if (terme !== undefined) {
      contactFilter = contactFilter.filter(
        (item) => item.name.toLowerCase().search(terme.toLocaleLowerCase()) >= 0
      )
    } else {
      return itens
    }
    return contactFilter
  }

  const contacts = filterContact()

  return (
    <ContainerCL>
      <ul>
        {contacts?.map((c) => (
          <li key={c.name}>
            <ContactCP
              id={c.id}
              name={c.name}
              phone={c.phone}
              email={c.email}
              local={c.local}
            />
          </li>
        ))}
      </ul>
    </ContainerCL>
  )
}

export default ContactList
