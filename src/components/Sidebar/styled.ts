import styled, { css } from 'styled-components'

interface Props {
  color?: string
  colorSec?: string
  selected?: boolean
}

export const ContainerSidebar = styled.div<Props>`
  background: ${props => `${props.color}`};
  border-radius: 0px 25px 25px 0px;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 38px;
`

export const Logo = styled.img`
  width: 143.44px;
  height: 40.37px;
  margin-bottom: 40px;
`

export const Line = styled.div`
  width: 213px;
  height: 0px;
  margin-bottom: 33px;
  border: 1px solid ${({ theme }) => theme.white_sys};
`
export const Menu = styled.div<Props>`
  width: 100%;
  padding-left: 28px;
  height: 75%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => `${props.colorSec}`};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => `${props.colorSec}`};
    border-radius: 4px;
  }
`
export const ButtonSider = styled.button<Props>`
  background-color: transparent;

  width: 100%;
  max-width: 238px;
  height: 51px;

  display: flex;
  text-align: center;
  align-items: center;
  gap: 15px;

  font-weight: 700;
  font-size: 15px;
  line-height: 34px;
  color: #ffffff;

  ${({ selected, colorSec }) =>
    selected &&
    css`
      color: ${colorSec};
      &::after {
        display: block;
        content: '|';
        position: static;
        pointer-events: none;
      }
    `}

  > svg {
    font-size: 23px;
  }
`;
