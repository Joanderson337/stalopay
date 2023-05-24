import styled from 'styled-components'

interface Props {
  color: string
}


export const CotainerNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
`

export const Img404 = styled.img`
  margin-top: 27px;
  width: 43.1rem;
  height: 43.1rem;
`

export const CotainerText = styled.div`
  width: 100%;
  max-width: 43rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;

  > p {
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.9rem;
    color: ${({ theme }) => theme.neutral_normal};
  }

  > span {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: ${({ theme }) => theme.gray_sys2};
  }

  @media (max-width: 600px) {
    max-width: 360px;
    > p {
      font-size: 2.5rem;
    }
    > span {
      font-size: 1.6rem;
    }
  }
`

export const Back = styled.button<Props>`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.1rem;

  color: ${props => `${props.color}`};
  background-color: transparent;

  margin: 3.2rem 0 4rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const IconWrapper = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  > svg {
    color: ${props => `${props.color}`};
    font-size: 24px;
  }
`;
