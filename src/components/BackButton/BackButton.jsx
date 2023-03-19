import React from 'react';

import { StyledBackButton } from './BackButton.styled';

export default function BackButton({ backLinkHref }) {
  return (
    <StyledBackButton to={backLinkHref}>◄ Go back</StyledBackButton>
  )
}
