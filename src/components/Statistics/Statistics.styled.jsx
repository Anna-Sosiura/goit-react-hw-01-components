import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 35px;
  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 0 auto;
  align-items: center;
  background-color: #${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)};
`;
