import styled from 'styled-components'
import variables from '../../styles/variables'

export const AsideGEN = styled.aside`
  max-width: 100%;
  padding: 8px;
  text-align: center;
  background-image: linear-gradient(
    ${variables.seabrok},
    ${variables.picoVoid}
  );
`

export const CoverAvatar = styled.img`
  max-width: 100%;
  height: 48px;
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`

export const PersonName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 8px;
`

export const Timer = styled.span`
  font-size: 16px;
`

export const Message = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #aaa;
  margin-top: 4px;
  margin-bottom: 8px;
`
