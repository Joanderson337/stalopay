import styled from "styled-components";

export const ErrorMessage = styled.li<{ success?: boolean }>`
  font-size: 14px;
  font-weight: bold;
  list-style-type: disc;
  color: ${({ theme, success }) => (success ? '#07A8D2' : '#7D7D7D')};
`
