import styled from 'styled-components'

export const ContainerRecover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 426px;

  > button {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    background-color: transparent;

    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    margin-left: 24px;

    color: ${({ theme }) => theme.neutral_normal};
  }
`

export const ContextContainer = styled.div`
  width: 426px;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (max-width: 600px) {
    width: 326px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;

  .containerSubmit{
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    .containerSubmit{
    margin-bottom: 0px;
  }
  }
`

export const ConatainerInput = styled.div`
  width: 365px;

  display: flex;
  flex-direction: column;
  /* gap: 18px; */

  @media (max-width: 600px) {
    width: 326px;
  }
`

export const ContextInput = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.2rem; */
`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  > svg {
    color: ${({ theme }) => theme.neutral_normal};
    font-size: 2.4rem;
  }
`;


export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  width: 100%;

  > ul {
    margin-left: 20px;
  }
`

export const StyledP = styled.p<{ success?: boolean }>`
font-size: 16px;
font-weight: bold;
margin-bottom: 16px;
color: ${({ success }) => (success ? '#07A8D2' : '#7D7D7D')};
`;

