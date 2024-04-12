import { createGlobalStyle, styled } from 'styled-components'

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
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`

export const ContainerCL = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #353b48;
`
