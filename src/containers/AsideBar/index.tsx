import Forms from '../Forms'
import {
  AsideGEN,
  Avatar,
  CoverAvatar,
  Message,
  PersonName,
  Timer
} from './styles'

const AsideBar = () => {
  const newYorkImg =
    'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg'
  const profilePicture = 'https://github.com/LucasVoyager.png'

  return (
    <AsideGEN>
      <div>
        <CoverAvatar src={newYorkImg} />
      </div>
      <Avatar src={profilePicture} alt="" />
      <PersonName>Lucas barros</PersonName>
      <Timer>11/04 ás 21:59</Timer>
      <Message>Deseja adicionar mais contatos, sir?</Message>
      <Forms />
    </AsideGEN>
  )
}

export default AsideBar
