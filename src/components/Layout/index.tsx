import React from 'react';

import { GlobalStyle } from '@/styles/global';

import { Container, Header, Content } from './styles';

const Layout: React.FC<{}> = ({ children }) => (
  <>
    <GlobalStyle />
    <Container>
      <Header>
        <h6>Menu</h6>
      </Header>
      <Content>{children}</Content>
    </Container>
  </>
);

export default Layout;
