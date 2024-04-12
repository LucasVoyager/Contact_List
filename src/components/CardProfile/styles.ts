import styled from 'styled-components'
import variables from '../../styles/variables'

export const BackDiv = styled.div`
  background-image: url('https://cdn.pixabay.com/photo/2020/02/11/10/24/lake-4839058_1280.jpg');
  background-size: cover;
  width: 100%;
  display: inline-block;
  padding: 8px;
`

export const Name = styled.h2`
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
  font-family: 'Roboto Mono', monospace;
  color: ${variables.nameCard};
`

export const Descrip = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: ${variables.describe};
  margin-top: 8px;
  font-family: 'Roboto Mono', monospace;
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: inline-block;
`
