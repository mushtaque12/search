import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors.blue};
  color: white;
  border-radius: 2px;
  border: none;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  transition: 0.3s;
  font-size: 14px;

  ${({ theme, primary }) => primary && css`
    background: ${theme.colors.gold};
    color: black;
  `}

  &:hover{
    cursor: pointer;

    ${({ theme, primary }) => primary && css`
      background: ${theme.colors.blue};
      color: white;
    `}

    ${({ theme, primary }) => !primary && css`
      background: ${theme.colors.gold};
      color: black;
    `}
  }
`;
