import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMovieCard = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`

export const ButtonsContainer = styled.div`
  margin-bottom: 20px;
`

export const StyledNavLinkBtn = styled(NavLink)`
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