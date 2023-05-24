import { ThemeColor } from "@/config/color";
import styled from "styled-components";

export const ErrorMessage = styled.li<{ success?: boolean }>`
  font-size: 14px;
  font-weight: bold;
  list-style-type: disc;
  color: ${({ theme, success }) => (success ? `${ThemeColor.secundaria}` : `${theme.neutral_normal}`)};
`

export const StyledP = styled.p<{ success?: boolean }>`
font-size: 16px;
font-weight: bold;
margin-bottom: 16px;
color: ${({ success, theme }) => (success ? `${ThemeColor.secundaria}`: `${theme.neutral_normal}`)};
`;

