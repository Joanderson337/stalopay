import styled from 'styled-components'

interface Props {
  color: string
}

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 10px 16px;
`
export const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 14px;
`

export const NomePerfil = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.neutral_normal};
`

export const ContainerModal = styled.div`
  position: fixed;
  top: 78px;
  z-index: 500;
`

export const ButtonHeader = styled.button<Props>`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 10px;
  color: ${props => `${props.color}`};

  > svg {
    font-size: 16px;
  }
`

export const ImagPerfil = styled.img<Props>`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  border: 3px solid ${props => `${props.color}`};
`

export const Label = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
color: ${({ theme }) => theme.neutral_darker}
`

