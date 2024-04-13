import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove } from '../../store/reducers/contacts'
import ContactCLass from '../../models/Contact'
import { Buttons } from '../../styles'

type Props = ContactCLass

const ContactCP = ({ name, email, phone, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.ContactCd>
      <S.Name>{name}</S.Name>
      <S.EmailNumber>{phone}</S.EmailNumber>
      <S.EmailNumber>{email}</S.EmailNumber>
      <Buttons onClick={() => dispatch(remove(id))}>Remover</Buttons>
    </S.ContactCd>
  )
}

export default ContactCP
