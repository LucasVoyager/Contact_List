import { Buttons, CardDiv } from '../../styles'
import { FormsCT, InputST, Message } from './styles'

const Forms = () => (
  <CardDiv>
    <FormsCT>
      <Message>Adicione mais contatos</Message>
      <InputST type="text" placeholder="Nome do contato" />
      <InputST type="number" placeholder="Numero do contato" />
      <InputST type="email" placeholder="Digite o email" />
      <Buttons type="submit">Adicionar</Buttons>
    </FormsCT>
  </CardDiv>
)

export default Forms
