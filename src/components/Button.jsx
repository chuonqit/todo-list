import styled, { css } from 'styled-components';

const Button = styled.button`
  border: 1px solid
    ${({ theme, primary }) =>
      primary ? theme.buttonPrimaryBorder : theme.buttonDefaultBorder};
  height: ${({ size }) => (size === 'small' ? '30px' : '36px')};
  outline: none;
  display: flex;
  padding: 0 1rem;
  min-width: ${({ width }) => width && `${width}px`};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${({ size }) => (size === 'small' ? '0.75rem' : '0.875em')};
  color: ${({ theme, primary }) =>
    primary ? theme.buttonPrimaryColor : theme.buttonDefaultColor};
  background-color: ${({ theme, primary }) =>
    primary ? theme.buttonPrimary : theme.buttonDefault};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 150ms linear, opacity 250ms linear;
  &:hover {
    background-color: ${({ theme, primary }) =>
      primary ? theme.buttonPrimaryHover : theme.buttonDefaultHover};
  }
  &:active {
    background-color: ${({ theme, primary }) =>
      primary ? theme.buttonPrimary : theme.buttonDefault};
  }

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.7;
          pointer-events: none;
        `
      : css`
          opacity: 1;
          cursor: pointer;
          pointer-events: visible;
        `};
`;

export default Button;
