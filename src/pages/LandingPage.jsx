import styled, { css } from 'styled-components';
import React from 'react';

function LandingPage() {
  return (
    <div>
      <CardText color="btn" fontSize="16" fontWeight="700" lineHeight="19" />
    </div>
  );
}

export default LandingPage;

const LandingPageColorPicker = (palette, color) => {
  switch (color) {
    case 'main':
      return palette.mainColor;
    case 'backgroundColor':
      return palette.backgroundColor;
    case 'btn':
      return palette.btnTextColor;
    case 'favorite':
      return palette.favoriteTextColor;
    case 'sidebar':
      return palette.sidebarBackgroundColor;
    default:
      return '';
  }
};

const LandingPageTextStyle = styled.css`
  ${(color, fontSize, fontWeight, lineHeight) => css`
    color: ${LandingPageColorPicker(color)};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    line-height: ${lineHeight}px;
  `}
`;

const CardText = styled.strong`
  ${LandingPageTextStyle};
`;
