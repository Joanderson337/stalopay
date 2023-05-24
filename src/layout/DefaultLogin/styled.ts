import styled from 'styled-components'

interface BackgroundProp {
  background: string
  colorOverlay: string
}

export const DefaultContainerLogin = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const BackgroundLogin = styled.div<BackgroundProp>`
  position: relative;
  width: 50%;
  height: 100vh;
  border-radius: 0rem 2rem 2rem 0rem;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${ props => props.colorOverlay};
    opacity: 0.9;
    z-index: 1;
    border-radius: 0rem 2rem 2rem 0rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 150px;
    border-radius: 0;

    &::after {
      border-radius: 0;
    }

    > img {
      width: 165px;
      height: 46.44px;
    }
  }
`

export const DefaultContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 90px;
  width: 50%;
  height: 100vh;
  margin: 0px 20px;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 0px;
    height: 100%;
    margin-top: 57px;
    gap: 60px;
  }

  > span {
    font-weight: 400;
font-size: 14px;
line-height: 24px;
color: ${({ theme }) => theme.black_sys};

  }

  @media (max-width: 600px) {
    > span {
      margin-bottom: 20px;
    }
  }
`
