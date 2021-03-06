import propTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url(/static/radnikanext-medium-webfont.woff2) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', sans-serif;
    padding: 0;
    margin: 0;
    fotn-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: none;
    color: var(--red);
  }
  button {
    font-family: 'radnika_next', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h2>the page component</h2>
      <InnerStyles>
        {cool}
        {children}
      </InnerStyles>
    </div>
  );
}

Page.propTypes = {
  cool: propTypes.string,
  children: propTypes.any,
};
