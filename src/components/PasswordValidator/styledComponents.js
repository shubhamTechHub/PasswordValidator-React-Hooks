import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 30px;
  border-radius: 6px;
  background-color: #383a4e;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 0;
`

export const DescriptionText = styled.p`
  font-family: 'Roboto';
  font-size: 11px;
  color: #f8fafc;
`

export const PasswordInput = styled.input`
  border: none;
  padding: 6px 10px;
  width: 100%;
  outline: none;
  margin-top: 25px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 11px;
  color: #ef4444;
  margin: 5px;
`
