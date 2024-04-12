import styled from 'styled-components'
import variables from '../../styles/variables'

export const FormsCT = styled.form`
  max-width: 80%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
  display: inline-block;
`

export const Message = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${variables.nameCard};
  margin-top: 8px;
  margin-bottom: 8px;
`

export const InputST = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 4px;
`
