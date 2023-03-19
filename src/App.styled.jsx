import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: all .3s;
  color: black;
  &.active {
    color: #BC4749;
    border-bottom: 2px solid #BC4749;
  }
`

export const StyledNav = styled.nav`
  margin-bottom: 20px;
`

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`