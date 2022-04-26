import styled from 'styled-components';

const Box = styled.div`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: ${({ width }) => (width ? `${width}px` : '800px')};
  width: 100%;
  background-color: ${({ theme }) => theme.boxBackground};
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: background-color 150ms linear, border 150ms linear;
`;

export default Box;
