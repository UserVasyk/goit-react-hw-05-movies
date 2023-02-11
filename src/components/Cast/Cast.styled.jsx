import styled from '@emotion/styled';

export const ListCast = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;
export const ItemCast = styled.li`
  border: 1px solid black;
`;
export const PhotoCast = styled.img`
  width: 100%;
`;
export const NamesBoxCast = styled.div`
  background-color: #bfbfbf70;
  padding: 15px;
  box-shadow: 3px 3px 5px 0px rgb(115 115 115);
  height: 75px;
`;
