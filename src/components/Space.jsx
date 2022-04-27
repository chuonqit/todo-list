import styled from 'styled-components';

const Space = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Space;
