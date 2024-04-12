import { CardDiv } from '../../styles'
import { Avatar, BackDiv, Descrip, Name } from './styles'

const CardProfile = () => {
  const profilePicture = 'https://github.com/LucasVoyager.png'
  return (
    <CardDiv>
      <BackDiv>
        <Avatar src={profilePicture} alt="" />
      </BackDiv>
      <Name>
        <strong>
          <i>Lucas barros</i>
        </strong>
      </Name>
      <Descrip>Perfil de Contatos</Descrip>
    </CardDiv>
  )
}

export default CardProfile
