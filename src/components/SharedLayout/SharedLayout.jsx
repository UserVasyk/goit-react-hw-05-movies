import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation, NavLinkStyled, Header, Box } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Box>
      <Header>
        <Navigation>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="movies">Movies</NavLinkStyled>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
