import { Outlet, NavLink } from 'react-router-dom';
// import { Suspense } from 'react';
export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="movies">Movies</NavLink>
        </nav>
      </header>
      {/* <Suspense fallback={<div>Loading</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};
