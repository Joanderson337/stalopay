import styled, { DefaultTheme } from 'styled-components'

type Props = {
  hasError?: boolean
  hasSuccess?: boolean
  colorInputSuccess: string
  theme: DefaultTheme
}

export const CustomInputContainer = styled.input<Props>`
  border: 1px solid
    ${({
      hasError,
      hasSuccess,
      colorInputSuccess,
      theme
    }) => {
      if (hasError) {
        return `${theme.red_error}`
      } else if (hasSuccess) {
        return `${colorInputSuccess}`
      } else {
        return `${theme.neutral_Light_active}`
      }
    }};

  color: ${({
    hasError,
    hasSuccess,
    colorInputSuccess,
    theme
  }) => {
    if (hasError) {
      return `${theme.red_error}`
    } else if (hasSuccess) {
      return `${colorInputSuccess}`
    } else {
      return `${theme.gray_sys2}`
    }
  }};
  outline: none;
  width: 100%;
  border-radius: 4px;

  padding: 0 3rem;
  font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  height: 44px;

  filter: drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1));

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${({ hasError, theme }) =>
      hasError ? `${theme.red_error}` : `${theme.gray_sys2}`};
  }
`

export const Label = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: ${({ theme }) => theme.neutral_darker};
margin-bottom: 4px;
`

