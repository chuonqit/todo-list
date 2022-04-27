import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10vh;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export default Container;
