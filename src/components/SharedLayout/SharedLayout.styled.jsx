import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 45px;
  background-color: #e0e0e0;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 2px 1px -1px;
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: 30px;
  &.active {
    color: orange;
  }
`;
export const Header = styled.header`
  ${'' /* margin-bottom: 20px; */}
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
