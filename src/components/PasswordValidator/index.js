import {useState} from 'react'

import {
  MainContainer,
  AppContainer,
  MainHeading,
  DescriptionText,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const passwordLength = password.length

  return (
    <MainContainer>
      <AppContainer>
        <MainHeading>Password Validator</MainHeading>
        <DescriptionText>
          Check how strong and secure is your password
        </DescriptionText>
        <PasswordInput type="password" onChange={onChangePassword} />
        <ErrorMsg>
          {passwordLength < 8
            ? 'Your password must be at least 8 characters'
            : ''}
        </ErrorMsg>
      </AppContainer>
    </MainContainer>
  )
}

export default PasswordValidator
