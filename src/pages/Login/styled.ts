import styled from 'styled-components'

interface ConfigLogin {
  colorTitle: string
}

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 426px;
`

export const TitleLogin = styled.div<ConfigLogin>`
  color: ${props => `${props.colorTitle}`};
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`

export const ConatainerInput = styled.div`
  width: 365px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 600px) {
    width: 326px;
  }
`

export const ContextInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const ConatainerButton = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 0.5px;
  color: #5e5e5e;

  > button {
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;
    letter-spacing: 0.5px;
    background-color: transparent;
    color: #08bbe9;
    margin-left: 6px;
  }
`
