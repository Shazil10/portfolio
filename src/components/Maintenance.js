import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';

const StyledMain = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  padding: 40px 24px;
  text-align: center;
`;

const StyledTitle = styled.h1`
  margin: 0 0 16px;
  color: var(--lightest-slate);
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 600;
`;

const StyledMessage = styled.p`
  max-width: 420px;
  margin: 0;
  color: var(--slate);
  font-size: var(--fz-lg);
  line-height: 1.6;
`;

const StyledEmail = styled.a`
  margin-top: 32px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-sm);

  &:hover,
  &:focus {
    outline: none;
  }
`;

const Maintenance = () => (
  <>
    <Helmet>
      <title>Temporarily Unavailable</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledMain>
        <StyledTitle>Site temporarily unavailable</StyledTitle>
        <StyledMessage>
          This portfolio is offline for a short update. It should be back online soon.
        </StyledMessage>
        <StyledEmail href="mailto:m.farukh@uni.minerva.edu">m.farukh@uni.minerva.edu</StyledEmail>
      </StyledMain>
    </ThemeProvider>
  </>
);

export default Maintenance;
