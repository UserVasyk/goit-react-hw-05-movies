import { Outlet } from 'react-router-dom';
import { Navigation, NavLinkStyled, Header, Box } from './SharedLayout.styled';
// import { Suspense } from 'react';
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
      {/* <Suspense fallback={<div>Loading</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </Box>
  );
};
