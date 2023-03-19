import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinksContainer = styled.div`
  margin-bottom: 20px;
`

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #BC4749;
  }
`;