import { createGlobalStyle, styled } from 'styled-components'
import variables from './variables'

const GlobalStyleP = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export default GlobalStyleP

export const Buttons = styled.button`
  font-size: 8px;
  font-weight: bold;
  color: ${variables.picoVoid};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 8px;
`

export const ContainerCL = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #353b48;
`

export const CardDiv = styled.div`
  background-color: ${variables.cardBack};
  border-radius: 16px;
  height: 25vh;
  margin-bottom: 32px;
`
