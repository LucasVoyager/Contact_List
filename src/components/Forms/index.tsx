import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Buttons, CardDiv } from '../../styles'
import { FormsCT, InputST, Message } from './styles'
import { register } from '../../store/reducers/contacts'

const Forms = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState('')

  const registerContact = (eventRT: FormEvent) => {
    eventRT.preventDefault()

    dispatch(
      register({
        name,
        phone,
        email
      })
    )
  }
  return (
    <CardDiv>
      <FormsCT onSubmit={registerContact}>
        <Message>Adicione mais contatos</Message>
        <InputST
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome do contato"
        />
        <InputST
          value={phone}
          onChange={(p) => setPhone(parseFloat(p.target.value))}
          type="number"
          placeholder="Numero do contato"
        />
        <InputST
          value={email}
          onChange={(ema) => setEmail(ema.target.value)}
          type="email"
          placeholder="Digite o email"
        />
        <Buttons type="submit">Adicionar</Buttons>
      </FormsCT>
    </CardDiv>
  )
}

export default Forms
