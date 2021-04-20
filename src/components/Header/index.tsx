import React from 'react';

import { Container, Title, UserName } from './styles';

const Header = () => {
  return (
    <Container>
      <Title>
        Olá, <UserName>Gabriel</UserName>
      </Title>
    </Container>
  );
};

export default Header;
