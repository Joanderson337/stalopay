import styled from 'styled-components'

interface ConfigTitle {
  colorTitle: string
}

export const ContainerRecover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  width: 100%;
  max-width: 426px;

  .containerSubmit{
    margin-bottom: 90px;
  }
  @media (max-width: 600px) {
    .containerSubmit{
    margin-bottom: 0px;
    }
  }

  @media (max-width: 600px) {
    width: 326px;
  }
`

export const ContextTitle = styled.div<ConfigTitle>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    color: ${props => `${props.colorTitle}`};
  }

  > p {
    font-size: 18px;
    line-height: 28px;
    color: ${({ theme }) => theme.gray_sys2};
  }
`


