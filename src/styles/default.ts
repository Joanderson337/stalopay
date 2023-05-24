import styled from 'styled-components'

export const ContainerSubmit = styled.div`
  width: 350px;

  @media (max-width: 600px) {
    width: 300px;
  }
`

export const ContextTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 366px;

  > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    color: ${({ theme }) => theme.neutral_normal};
  }

  > p {
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.gray_sys2};
  }

  @media (max-width: 600px) {
    width: 266px;
  }
`
