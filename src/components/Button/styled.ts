import styled from "styled-components";

interface Props {
  success: boolean;
  colorBackground: string
}

export const CustomButton = styled.button<Props>`
  border-radius: 0.6rem;
  width: 100%;
  height: 6rem;

  font-weight: 500;
font-size: 1.5rem;
line-height: 2rem;
letter-spacing: 0.05rem;
  color: ${({ success, theme }) => (success ? `${theme.white_sys}` : `${theme.neutral_dark}`)};

  background: ${({ success, colorBackground, theme }) => (success ? `${colorBackground}` : `${theme.gray_sys1}`)};
  cursor: ${({ success }) => (success ? "grab" : "not-allowed")};
`;
