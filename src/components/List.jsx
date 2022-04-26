import styled, { css } from 'styled-components';

const List = styled.ul`
  list-style: none;
`;

List.Item = styled.li`
  position: relative;
  border-style: solid;
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.875rem;
  padding-right: 0.375rem;
  border-color: ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.background};
  transition: background-color 150ms linear, border-color 150ms linear;

  ${({ status }) =>
    status == 'pending' &&
    css`
      & span {
        text-decoration: line-through;
      }
      opacity: 0.5;
    `};

  &:first-child {
    border-radius: ${({ theme }) => theme.borderRadiusTop};
  }

  &:last-child {
    border-radius: ${({ theme }) => theme.borderRadiusBottom};
  }

  &:first-child:last-child {
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  & + & {
    border-top-width: 0;
  }

  &::before {
    content: '';
    width: 3px;
    height: 35px;
    position: absolute;
    left: -8px;
    background-color: ${({ status }) =>
      status === 'pending' ? '#ffa84b' : '#32b716'};
  }
`;

export default List;
