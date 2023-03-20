import { StyledNavLink, StyledNav } from 'components/Header/StyledNavLink'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Header() {
    return (
      <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
            </StyledNav>
            <Outlet/>
      </>
  )
}
