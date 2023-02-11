import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
`;
export const LinkStyled = styled(NavLink)`
  font-size: 25px;
  color: blue;
  text-decoration: none;
  transition: color 250ms ease;
  &.active,
  :hover,
  :focus {
    text-decoration: underline;
    color: #fdab14;
  }
`;
export const BackLinkStyled = styled(Link)`
  font-size: 25px;
  color: blue;
  text-decoration: none;
  transition: color 250ms ease;
  :hover,
  :focus {
    color: #fdab14;
  }
`;
export const TitleLink = styled.p`
  font-size: 30px;
  margin-bottom: 15px;
`;
export const ListLinks = styled.ul`
  display: flex;
  justify-content: space-around;
`;
export const MovieDetailsBox = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: solid 1px black;
  border-top: solid 1px black;
  width: 100%;
`;
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  gap: 25px;
  font-size: 20px;
`;
