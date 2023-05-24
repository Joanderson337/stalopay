import styled, { DefaultTheme } from 'styled-components'

export const CustomInputContainer = styled.div<{
  hasError?: boolean
  hasSuccess?: boolean
  colorInputSuccess: string
  theme: DefaultTheme
}>`
  display: flex;
  align-items: center;

  border: 1px solid
    ${({ hasError, hasSuccess, colorInputSuccess, theme }) =>
      hasError
        ? `${theme.red_error}`
        : hasSuccess
        ? `${colorInputSuccess}`
        : `${theme.neutral_Light_active}`};
  outline: none;
  width: 100%;
  border-radius: 4px;
  height: 44px;
  padding: 0 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  > input {
    flex: 1;
    border: none;
    outline: none;


    font-size: 1.6rem;
    margin-right: 0.8rem;
    color: ${({
      hasError,
      hasSuccess,
      colorInputSuccess,
      theme
    }) =>
      hasError
        ? `${theme.red_error}`
        : hasSuccess
        ? `${colorInputSuccess}`
        : `${theme.neutral_Light_active}`};
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: ${({ hasError, hasSuccess, colorInputSuccess, theme }) =>
        hasError
          ? `${theme.red_error}`
          : hasSuccess
          ? `${colorInputSuccess}`
          : `${theme.gray_sys2}`};
    }
  }
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({
    theme
  }) =>
  `${theme.neutral_normal}`};
  font-size: 2rem;
`

export const Label = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: ${({ theme }) => theme.neutral_darker};
margin-bottom: 4px;
`
