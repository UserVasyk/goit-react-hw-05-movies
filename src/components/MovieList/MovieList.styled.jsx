import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const MovieListStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin: 0px auto;
  padding: 0px;
  list-style: none;
`;
export const MovieItem = styled.li`
  height: 450px;
`;
export const Image = styled.img`
  height: 400px;
`;
export const LinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
`;
export const NameBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  color: #000000;
  font-weight: 500;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 2px 1px -1px;
`;
