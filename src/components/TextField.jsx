import styled from 'styled-components';

const TextField = styled.input`
  width: 100%;
  height: 36px;
  outline: none;
  padding: 0 12px;
  font-size: 0.875rem;
  font-weight: 400;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.borderDanger : theme.borderColor)};
  background-color: ${({ theme }) => theme.background};
  transition: background-color 150ms linear, border 150ms linear;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default TextField;
