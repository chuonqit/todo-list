import styled from 'styled-components';

const Space = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Space;
